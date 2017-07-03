import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild(Content) content: Content;
  tabanimate: boolean = false;
  public old_scrollTop = 0;
  public new_scrollTop = 0;
  _refresher = null;

  //数据
  items = [];

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef) {
    this.getdata();
  }

  //获取数据
  getdata() {

    let url = "http://www.devonhello.com/chihu2/home";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=" + this.items.length, {
      headers: headers
    })
      .subscribe((res) => {
        if (this._refresher) {
          this._refresher.complete();
        }
        this.items = this.items.concat(res.json());

      });
  }

  openSearch() {
    this.navCtrl.push('SearchPage');
  }

  doRefresh(refresher) {
    this.items = [];
    this.getdata();

    this._refresher = refresher;
  }

  doInfinite(infiniteScroll) {

    this.getdata();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1500);
  }

  onScroll($event: any) {

    var scrollTop = $event.scrollTop;

    if (scrollTop > 50 && (this.old_scrollTop - scrollTop) < 0) {
      if (!this.tabanimate) {
        this.tabanimate = true;
      }

    } else {
      this.tabanimate = false;
    }
    this.old_scrollTop = scrollTop;
    this.ref.detectChanges();
  }

  openMmessage() {
    this.navCtrl.push('MessagePage');
  }

  //创建菜谱
  CreateCook() {
    this.checkLogin('SendWorkTypePage')
  }

  //提问
  CreateQuestion() {
    this.checkLogin('SendQuestionPage');
  }

  //分享
  CreateShare() {
    this.checkLogin('SendSharePage');
  }

  //检查登录状态
  checkLogin(page) {

    if (this.UserService._user._id) {
      this.navCtrl.push(page);
    } else {
      this.navCtrl.push('Login');
    }
  }

}