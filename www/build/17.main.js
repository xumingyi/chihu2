webpackJsonp([17],{246:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"TabsPageModuleNgFactory",function(){return w});var r=n(0),i=n(490),o=n(19),l=n(27),a=n(85),u=n(255),s=n(101),c=n(100),p=n(382),f=n(264),d=n(383),_=n(143),y=n(144),g=n(145),h=n(146),b=n(491),m=n(367),v=n(86),F=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),P=function(t){function e(e){return t.call(this,e,[_.a,y.a,g.a,h.a,b.a],[])||this}return F(e,t),Object.defineProperty(e.prototype,"_NgLocalization_8",{get:function(){return null==this.__NgLocalization_8&&(this.__NgLocalization_8=new o.a(this.parent.get(r.c))),this.__NgLocalization_8},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵi_9",{get:function(){return null==this.__ɵi_9&&(this.__ɵi_9=new l.a),this.__ɵi_9},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_FormBuilder_10",{get:function(){return null==this.__FormBuilder_10&&(this.__FormBuilder_10=new l.b),this.__FormBuilder_10},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_CodePush_12",{get:function(){return null==this.__CodePush_12&&(this.__CodePush_12=new s.a),this.__CodePush_12},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_AppVersion_13",{get:function(){return null==this.__AppVersion_13&&(this.__AppVersion_13=new c.a),this.__AppVersion_13},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_FileOpener_14",{get:function(){return null==this.__FileOpener_14&&(this.__FileOpener_14=new p.a),this.__FileOpener_14},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Transfer_15",{get:function(){return null==this.__Transfer_15&&(this.__Transfer_15=new f.a),this.__Transfer_15},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_TransferObject_16",{get:function(){return null==this.__TransferObject_16&&(this.__TransferObject_16=new f.b),this.__TransferObject_16},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_File_17",{get:function(){return null==this.__File_17&&(this.__File_17=new d.a),this.__File_17},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new o.d,this._ɵba_1=new l.c,this._FormsModule_2=new l.d,this._ReactiveFormsModule_3=new l.e,this._IonicModule_4=new a.b,this._WorkComponentModule_5=new u.a,this._IonicPageModule_6=new a.c,this._TabsPageModule_7=new i.a,this._LAZY_LOADED_TOKEN_11=m.a,this._TabsPageModule_7},e.prototype.getInternal=function(t,e){return t===o.d?this._CommonModule_0:t===l.c?this._ɵba_1:t===l.d?this._FormsModule_2:t===l.e?this._ReactiveFormsModule_3:t===a.b?this._IonicModule_4:t===u.a?this._WorkComponentModule_5:t===a.c?this._IonicPageModule_6:t===i.a?this._TabsPageModule_7:t===o.e?this._NgLocalization_8:t===l.a?this._ɵi_9:t===l.b?this._FormBuilder_10:t===v.d?this._LAZY_LOADED_TOKEN_11:t===s.a?this._CodePush_12:t===c.a?this._AppVersion_13:t===p.a?this._FileOpener_14:t===f.a?this._Transfer_15:t===f.b?this._TransferObject_16:t===d.a?this._File_17:e},e.prototype.destroyInternal=function(){},e}(r.x),w=new r.y(P,i.a)},254:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=(n(0),n(82),this&&this.__decorate,this&&this.__metadata,function(){function t(t,e){this.navCtrl=t,this.navParams=e,this.data={},this.ishideTitle=!1,this.rootNavCtrl=null,this.irootNavCtrl=this.navCtrl}return t.prototype.ngOnChanges=function(t){try{t.rootNavCtrl.currentValue&&(null!=this.rootNavCtrl&&(this.irootNavCtrl=this.navParams.get("rootNavCtrl")),this.ishideTitle=t.ishideTitle.currentValue)}catch(t){}},t.prototype.pushArticlePage=function(t){this.irootNavCtrl.push("ArticlePage",{_id:t})},t.prototype.pushAnswerPage=function(t){this.irootNavCtrl.push("AnswerPage",{_id:t})},t.prototype.pushQuestionPage=function(t){this.irootNavCtrl.push("QuestionPage",{_id:t})},t}())},255:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=(n(0),n(82),n(254),this&&this.__decorate,function(){function t(){}return t}())},264:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return s});var r=n(0),i=n(37),o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,l=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(l=(o<3?i(l):o>3?i(e,n,l):i(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.FileTransferErrorCode={FILE_NOT_FOUND_ERR:1,INVALID_URL_ERR:2,CONNECTION_ERR:3,ABORT_ERR:4,NOT_MODIFIED_ERR:5},e}return o(e,t),e.prototype.create=function(){return new s},e}(i.a);u.decorators=[{type:r.C}],u.ctorParameters=function(){return[]},u=l([n.i(i.d)({pluginName:"FileTransfer",plugin:"cordova-plugin-file-transfer",pluginRef:"FileTransfer",repo:"https://github.com/apache/cordova-plugin-file-transfer",platforms:["Amazon Fire OS","Android","Browser","iOS","Ubuntu","Windows","Windows Phone"]})],u);var s=function(){function t(){!0===n.i(i.e)("FileTransfer",null,"FileTransfer")&&(this._objectInstance=new FileTransfer)}return t.prototype.upload=function(t,e,n,r){},t.prototype.download=function(t,e,n,r){},t.prototype.onProgress=function(t){this._objectInstance.onprogress=t},t.prototype.abort=function(){},t}();l([n.i(i.f)({successIndex:2,errorIndex:3}),a("design:type",Function),a("design:paramtypes",[String,String,Object,Boolean]),a("design:returntype",Promise)],s.prototype,"upload",null),l([n.i(i.f)({successIndex:2,errorIndex:3}),a("design:type",Function),a("design:paramtypes",[String,String,Boolean,Object]),a("design:returntype",Promise)],s.prototype,"download",null),l([n.i(i.g)({sync:!0}),a("design:type",Function),a("design:paramtypes",[Function]),a("design:returntype",void 0)],s.prototype,"onProgress",null),l([n.i(i.f)({sync:!0}),a("design:type",Function),a("design:paramtypes",[]),a("design:returntype",void 0)],s.prototype,"abort",null),s=l([n.i(i.d)({plugin:"cordova-plugin-file-transfer",pluginName:"FileTransfer"}),a("design:paramtypes",[])],s)},367:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(0),i=n(82),o=n(101),l=n(100),a=n(83),u=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,l=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(l=(o<3?i(l):o>3?i(e,n,l):i(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=p=function(){function t(t,e,n,r,i,o){var l=this;this.appVersion=t,this.UserService=e,this.codePush=n,this.platform=r,this.navCtrl=i,this.toastCtrl=o,this.tabHome="HomePage",this.tabClass="ClassPage",this.tabNotice="NoticePage",this.tabFound="FoundPage",this.tabMore="MorePage",this.backButtonPressed=!1,this.itimer=null,setTimeout(function(){l.pageBack()},1e3)}return t.prototype.pageBack=function(){var t=this;this.platform.registerBackButtonAction(function(){var e=function(t){};t.codePush.sync({},e),t.appVersion.getVersionNumber().then(function(e){t.UserService.Version=e});var n=t.navCtrl.getActive(),r=n.instance;if(r.tabs,!(r instanceof p))return t.navCtrl.canGoBack()?t.navCtrl.pop():t.showExit();var i=r.tabs,o=i.getSelected();return o.canGoBack()?o.pop():t.showExit()},101)},t.prototype.showExit=function(){var t=this;this.backButtonPressed?this.platform.exitApp():(this.presentToast(),this.backButtonPressed=!0,this.itimer&&clearTimeout(this.itimer),this.itimer=setTimeout(function(){t.backButtonPressed=!1},2e3))},t.prototype.presentToast=function(){this.toastCtrl.create({message:"再次点击返回退出APP",duration:2e3}).present()},t}();c=p=u([n.i(i.a)(),n.i(r._22)({templateUrl:"tabs.html"}),s("design:paramtypes",["function"==typeof(f=void 0!==l.a&&l.a)&&f||Object,"function"==typeof(d=void 0!==a.a&&a.a)&&d||Object,"function"==typeof(_=void 0!==o.a&&o.a)&&_||Object,"function"==typeof(y=void 0!==i.b&&i.b)&&y||Object,"function"==typeof(g=void 0!==i.c&&i.c)&&g||Object,"function"==typeof(h=void 0!==i.d&&i.d)&&h||Object])],c);var p,f,d,_,y,g,h},382:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(0),i=n(37),o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,l=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(l=(o<3?i(l):o>3?i(e,n,l):i(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.open=function(t,e){},e.prototype.uninstall=function(t){},e.prototype.appIsInstalled=function(t){},e}(i.a);u.decorators=[{type:r.C}],u.ctorParameters=function(){return[]},l([n.i(i.h)({callbackStyle:"object",successName:"success",errorName:"error"}),a("design:type",Function),a("design:paramtypes",[String,String]),a("design:returntype",Promise)],u.prototype,"open",null),l([n.i(i.h)({callbackStyle:"object",successName:"success",errorName:"error"}),a("design:type",Function),a("design:paramtypes",[String]),a("design:returntype",Promise)],u.prototype,"uninstall",null),l([n.i(i.h)({callbackStyle:"object",successName:"success",errorName:"error"}),a("design:type",Function),a("design:paramtypes",[String]),a("design:returntype",Promise)],u.prototype,"appIsInstalled",null),u=l([n.i(i.d)({pluginName:"FileOpener",plugin:"cordova-plugin-file-opener2",pluginRef:"cordova.plugins.fileOpener2",repo:"https://github.com/pwlin/cordova-plugin-file-opener2",platforms:["Android","iOS","Windows","Windows Phone 8"]})],u)},383:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(0),i=n(37),o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=this&&this.__decorate||function(t,e,n,r){var i,o=arguments.length,l=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(l=(o<3?i(l):o>3?i(e,n,l):i(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cordovaFileError={1:"NOT_FOUND_ERR",2:"SECURITY_ERR",3:"ABORT_ERR",4:"NOT_READABLE_ERR",5:"ENCODING_ERR",6:"NO_MODIFICATION_ALLOWED_ERR",7:"INVALID_STATE_ERR",8:"SYNTAX_ERR",9:"INVALID_MODIFICATION_ERR",10:"QUOTA_EXCEEDED_ERR",11:"TYPE_MISMATCH_ERR",12:"PATH_EXISTS_ERR",13:"WRONG_ENTRY_TYPE",14:"DIR_READ_ERR"},e}return o(e,t),e.prototype.getFreeDiskSpace=function(){return new Promise(function(t,e){cordova.exec(t,e,"File","getFreeDiskSpace",[])})},e.prototype.checkDir=function(t,e){if(/^\//.test(e)){var n=new FileError(5);return n.message="directory cannot start with /",Promise.reject(n)}var r=t+e;return this.resolveDirectoryUrl(r).then(function(){return!0})},e.prototype.createDir=function(t,e,n){var r=this;if(/^\//.test(e)){var i=new FileError(5);return i.message="directory cannot start with /",Promise.reject(i)}var o={create:!0};return n||(o.exclusive=!0),this.resolveDirectoryUrl(t).then(function(t){return r.getDirectory(t,e,o)})},e.prototype.removeDir=function(t,e){var n=this;if(/^\//.test(e)){var r=new FileError(5);return r.message="directory cannot start with /",Promise.reject(r)}return this.resolveDirectoryUrl(t).then(function(t){return n.getDirectory(t,e,{create:!1})}).then(function(t){return n.remove(t)})},e.prototype.moveDir=function(t,e,n,r){var i=this;if(r=r||e,/^\//.test(r)){var o=new FileError(5);return o.message="directory cannot start with /",Promise.reject(o)}return this.resolveDirectoryUrl(t).then(function(t){return i.getDirectory(t,e,{create:!1})}).then(function(t){return i.resolveDirectoryUrl(n).then(function(e){return i.move(t,e,r)})})},e.prototype.copyDir=function(t,e,n,r){var i=this;if(/^\//.test(r)){var o=new FileError(5);return o.message="directory cannot start with /",Promise.reject(o)}return this.resolveDirectoryUrl(t).then(function(t){return i.getDirectory(t,e,{create:!1})}).then(function(t){return i.resolveDirectoryUrl(n).then(function(e){return i.copy(t,e,r)})})},e.prototype.listDir=function(t,e){var n=this;if(/^\//.test(e)){var r=new FileError(5);return r.message="directory cannot start with /",Promise.reject(r)}return this.resolveDirectoryUrl(t).then(function(t){return n.getDirectory(t,e,{create:!1,exclusive:!1})}).then(function(t){var e=t.createReader();return n.readEntries(e)})},e.prototype.removeRecursively=function(t,e){var n=this;if(/^\//.test(e)){var r=new FileError(5);return r.message="directory cannot start with /",Promise.reject(r)}return this.resolveDirectoryUrl(t).then(function(t){return n.getDirectory(t,e,{create:!1})}).then(function(t){return n.rimraf(t)})},e.prototype.checkFile=function(t,e){if(/^\//.test(e)){var n=new FileError(5);return n.message="file cannot start with /",Promise.reject(n)}return this.resolveLocalFilesystemUrl(t+e).then(function(t){if(t.isFile)return!0;var e=new FileError(13);return e.message="input is not a file",Promise.reject(e)})},e.prototype.createFile=function(t,e,n){var r=this;if(/^\//.test(e)){var i=new FileError(5);return i.message="file-name cannot start with /",Promise.reject(i)}var o={create:!0};return n||(o.exclusive=!0),this.resolveDirectoryUrl(t).then(function(t){return r.getFile(t,e,o)})},e.prototype.removeFile=function(t,e){var n=this;if(/^\//.test(e)){var r=new FileError(5);return r.message="file-name cannot start with /",Promise.reject(r)}return this.resolveDirectoryUrl(t).then(function(t){return n.getFile(t,e,{create:!1})}).then(function(t){return n.remove(t)})},e.prototype.writeFile=function(t,e,n,r){var i=this;if(void 0===r&&(r={}),/^\//.test(e)){var o=new FileError(5);return o.message="file-name cannot start with /",Promise.reject(o)}var l={create:!r.append,exclusive:!r.replace};return this.resolveDirectoryUrl(t).then(function(t){return i.getFile(t,e,l)}).then(function(t){return i.writeFileEntry(t,n,r)})},e.prototype.writeFileEntry=function(t,e,n){var r=this;return this.createWriter(t).then(function(t){return n.append&&t.seek(t.length),n.truncate&&t.truncate(n.truncate),r.write(t,e)}).then(function(){return t})},e.prototype.writeExistingFile=function(t,e,n){return this.writeFile(t,e,n,{replace:!0})},e.prototype.readAsText=function(t,e){return this.readFile(t,e,"Text")},e.prototype.readAsDataURL=function(t,e){return this.readFile(t,e,"DataURL")},e.prototype.readAsBinaryString=function(t,e){return this.readFile(t,e,"BinaryString")},e.prototype.readAsArrayBuffer=function(t,e){return this.readFile(t,e,"ArrayBuffer")},e.prototype.readFile=function(t,e,n){var r=this;if(/^\//.test(e)){var i=new FileError(5);return i.message="file-name cannot start with /",Promise.reject(i)}return this.resolveDirectoryUrl(t).then(function(t){return r.getFile(t,e,{create:!1})}).then(function(t){var e=new FileReader;return new Promise(function(r,i){e.onloadend=function(){void 0!==e.result||null!==e.result?r(e.result):i(void 0!==e.error||null!==e.error?e.error:{code:null,message:"READER_ONLOADEND_ERR"})},t.file(function(t){e["readAs"+n].call(e,t)},function(t){i(t)})})})},e.prototype.moveFile=function(t,e,n,r){var i=this;if(r=r||e,/^\//.test(r)){var o=new FileError(5);return o.message="file name cannot start with /",Promise.reject(o)}return this.resolveDirectoryUrl(t).then(function(t){return i.getFile(t,e,{create:!1})}).then(function(t){return i.resolveDirectoryUrl(n).then(function(e){return i.move(t,e,r)})})},e.prototype.copyFile=function(t,e,n,r){var i=this;if(r=r||e,/^\//.test(r)){var o=new FileError(5);return o.message="file name cannot start with /",Promise.reject(o)}return this.resolveDirectoryUrl(t).then(function(t){return i.getFile(t,e,{create:!1})}).then(function(t){return i.resolveDirectoryUrl(n).then(function(e){return i.copy(t,e,r)})})},e.prototype.fillErrorMessage=function(t){try{t.message=this.cordovaFileError[t.code]}catch(t){}},e.prototype.resolveLocalFilesystemUrl=function(t){var e=this;return new Promise(function(n,r){try{window.resolveLocalFileSystemURL(t,function(t){n(t)},function(t){e.fillErrorMessage(t),r(t)})}catch(t){e.fillErrorMessage(t),r(t)}})},e.prototype.resolveDirectoryUrl=function(t){return this.resolveLocalFilesystemUrl(t).then(function(t){if(t.isDirectory)return t;var e=new FileError(13);return e.message="input is not a directory",Promise.reject(e)})},e.prototype.getDirectory=function(t,e,n){var r=this;return new Promise(function(i,o){try{t.getDirectory(e,n,function(t){i(t)},function(t){r.fillErrorMessage(t),o(t)})}catch(t){r.fillErrorMessage(t),o(t)}})},e.prototype.getFile=function(t,e,n){var r=this;return new Promise(function(i,o){try{t.getFile(e,n,i,function(t){r.fillErrorMessage(t),o(t)})}catch(t){r.fillErrorMessage(t),o(t)}})},e.prototype.remove=function(t){var e=this;return new Promise(function(n,r){t.remove(function(){n({success:!0,fileRemoved:t})},function(t){e.fillErrorMessage(t),r(t)})})},e.prototype.move=function(t,e,n){var r=this;return new Promise(function(i,o){t.moveTo(e,n,function(t){i(t)},function(t){r.fillErrorMessage(t),o(t)})})},e.prototype.copy=function(t,e,n){var r=this;return new Promise(function(i,o){t.copyTo(e,n,function(t){i(t)},function(t){r.fillErrorMessage(t),o(t)})})},e.prototype.readEntries=function(t){var e=this;return new Promise(function(n,r){t.readEntries(function(t){n(t)},function(t){e.fillErrorMessage(t),r(t)})})},e.prototype.rimraf=function(t){var e=this;return new Promise(function(n,r){t.removeRecursively(function(){n({success:!0,fileRemoved:t})},function(t){e.fillErrorMessage(t),r(t)})})},e.prototype.createWriter=function(t){var e=this;return new Promise(function(n,r){t.createWriter(function(t){n(t)},function(t){e.fillErrorMessage(t),r(t)})})},e.prototype.write=function(t,e){return e instanceof Blob?this.writeFileInChunks(t,e):new Promise(function(n,r){t.onwriteend=function(e){t.error?r(t.error):n(e)},t.write(e)})},e.prototype.writeFileInChunks=function(t,e){function n(){var n=Math.min(r,e.size-i),o=e.slice(i,i+n);i+=n,t.write(o)}var r=1048576,i=0;return new Promise(function(r,o){t.onerror=o,t.onwrite=function(){i<e.size?n():r()},n()})},e}(i.a);u.decorators=[{type:r.C}],u.ctorParameters=function(){return[]},l([i.b,a("design:type",String)],u.prototype,"applicationDirectory",void 0),l([i.b,a("design:type",String)],u.prototype,"applicationStorageDirectory",void 0),l([i.b,a("design:type",String)],u.prototype,"dataDirectory",void 0),l([i.b,a("design:type",String)],u.prototype,"cacheDirectory",void 0),l([i.b,a("design:type",String)],u.prototype,"externalApplicationStorageDirectory",void 0),l([i.b,a("design:type",String)],u.prototype,"externalDataDirectory",void 0),l([i.b,a("design:type",String)],u.prototype,"externalCacheDirectory",void 0),l([i.b,a("design:type",String)],u.prototype,"externalRootDirectory",void 0),l([i.b,a("design:type",String)],u.prototype,"tempDirectory",void 0),l([i.b,a("design:type",String)],u.prototype,"syncedDataDirectory",void 0),l([i.b,a("design:type",String)],u.prototype,"documentsDirectory",void 0),l([i.b,a("design:type",String)],u.prototype,"sharedDirectory",void 0),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[]),a("design:returntype",Promise)],u.prototype,"getFreeDiskSpace",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String]),a("design:returntype",Promise)],u.prototype,"checkDir",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String,Boolean]),a("design:returntype",Promise)],u.prototype,"createDir",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String]),a("design:returntype",Promise)],u.prototype,"removeDir",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String,String,String]),a("design:returntype",Promise)],u.prototype,"moveDir",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String,String,String]),a("design:returntype",Promise)],u.prototype,"copyDir",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String]),a("design:returntype",Promise)],u.prototype,"listDir",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String]),a("design:returntype",Promise)],u.prototype,"removeRecursively",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String]),a("design:returntype",Promise)],u.prototype,"checkFile",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String,Boolean]),a("design:returntype",Promise)],u.prototype,"createFile",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String]),a("design:returntype",Promise)],u.prototype,"removeFile",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String,Object,Object]),a("design:returntype",Promise)],u.prototype,"writeFile",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String,Object]),a("design:returntype",Promise)],u.prototype,"writeExistingFile",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String]),a("design:returntype",Promise)],u.prototype,"readAsText",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String]),a("design:returntype",Promise)],u.prototype,"readAsDataURL",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String]),a("design:returntype",Promise)],u.prototype,"readAsBinaryString",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String]),a("design:returntype",Promise)],u.prototype,"readAsArrayBuffer",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String,String,String]),a("design:returntype",Promise)],u.prototype,"moveFile",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String,String,String,String]),a("design:returntype",Promise)],u.prototype,"copyFile",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String]),a("design:returntype",Promise)],u.prototype,"resolveLocalFilesystemUrl",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[String]),a("design:returntype",Promise)],u.prototype,"resolveDirectoryUrl",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[Object,String,Object]),a("design:returntype",Promise)],u.prototype,"getDirectory",null),l([n.i(i.c)(),a("design:type",Function),a("design:paramtypes",[Object,String,Object]),a("design:returntype",Promise)],u.prototype,"getFile",null),u=l([n.i(i.d)({pluginName:"File",plugin:"cordova-plugin-file",pluginRef:"cordova.file",repo:"https://github.com/apache/cordova-plugin-file",platforms:["Android","BlackBerry 10","Browser","Firefox OS","iOS","macOS","Ubuntu","Windows","Windows Phone"]})],u)},384:function(t,e,n){"use strict";function r(t){return u._14(0,[(t()(),u._16(0,null,null,1,"ion-icon",[["class","tab-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),u._17(147456,null,0,s.a,[c.c,u.H,u.I],{name:[0,"name"],isActive:[1,"isActive"]},null)],function(t,e){var n=e.component;t(e,1,0,n.tab.tabIcon,n.tab.isSelected)},function(t,e){t(e,0,0,u._18(e,1)._hidden)})}function i(t){return u._14(0,[(t()(),u._16(0,null,null,1,"span",[["class","tab-button-text"]],null,null,null,null,null)),(t()(),u._15(null,["",""]))],null,function(t,e){t(e,1,0,e.component.tab.tabTitle)})}function o(t){return u._14(0,[(t()(),u._16(0,null,null,2,"ion-badge",[["class","tab-badge"]],null,null,null,null,null)),u._17(16384,null,0,p.a,[c.c,u.H,u.I],{color:[0,"color"]},null),(t()(),u._15(null,["",""]))],function(t,e){t(e,1,0,e.component.tab.tabBadgeStyle)},function(t,e){t(e,2,0,e.component.tab.tabBadge)})}function l(t){return u._14(0,[(t()(),u._24(16777216,null,null,1,null,r)),u._17(16384,null,0,f.m,[u.L,u.N],{ngIf:[0,"ngIf"]},null),(t()(),u._24(16777216,null,null,1,null,i)),u._17(16384,null,0,f.m,[u.L,u.N],{ngIf:[0,"ngIf"]},null),(t()(),u._24(16777216,null,null,1,null,o)),u._17(16384,null,0,f.m,[u.L,u.N],{ngIf:[0,"ngIf"]},null),(t()(),u._16(0,null,null,0,"div",[["class","button-effect"]],null,null,null,null,null))],function(t,e){var n=e.component;t(e,1,0,n.tab.tabIcon),t(e,3,0,n.tab.tabTitle),t(e,5,0,n.tab.tabBadge)},null)}function a(t){return u._14(0,[(t()(),u._16(0,null,null,1,"div",[["class","tab-button"]],[[1,"id",0],[1,"aria-controls",0],[1,"aria-selected",0],[2,"has-title",null],[2,"has-icon",null],[2,"has-title-only",null],[2,"icon-only",null],[2,"has-badge",null],[2,"disable-hover",null],[2,"tab-disabled",null],[2,"tab-hidden",null]],[[null,"click"]],function(t,e,n){var r=!0;if("click"===e){r=!1!==u._18(t,1).onClick()&&r}return r},l,y)),u._17(114688,null,0,d.a,[c.c,u.H,u.I],null,null)],function(t,e){t(e,1,0)},function(t,e){t(e,0,1,[u._18(e,1).tab._btnId,u._18(e,1).tab._tabId,u._18(e,1).tab.isSelected,u._18(e,1).hasTitle,u._18(e,1).hasIcon,u._18(e,1).hasTitleOnly,u._18(e,1).hasIconOnly,u._18(e,1).hasBadge,u._18(e,1).disHover,!u._18(e,1).tab.enabled,!u._18(e,1).tab.show])})}n.d(e,"b",function(){return y}),e.a=l;var u=n(0),s=n(36),c=n(1),p=n(98),f=n(19),d=n(109),_=[],y=u._13({encapsulation:2,styles:_,data:{}});u._19(".tab-button",d.a,a,{color:"color",mode:"mode",tab:"tab"},{ionSelect:"ionSelect"},[])},385:function(t,e,n){"use strict";function r(t){return o._14(0,[o._20(402653184,1,{_vp:0}),(t()(),o._16(16777216,[[1,3],["viewport",1]],null,0,"div",[],null,null,null,null,null)),(t()(),o._16(0,null,null,0,"div",[["class","nav-decor"]],null,null,null,null,null))],null,null)}function i(t){return o._14(0,[(t()(),o._16(0,null,null,1,"ion-tab",[["role","tabpanel"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,r,g)),o._17(245760,null,0,l.a,[a.a,u.a,s.c,c.b,o.H,o.g,o.I,o.K,o.T,p.a,f.a,[2,d.b],_.a,o.p],null,null)],function(t,e){t(e,1,0)},function(t,e){t(e,0,0,o._18(e,1)._tabId,o._18(e,1)._btnId)})}n.d(e,"b",function(){return g}),e.a=r;var o=n(0),l=n(110),a=n(57),u=n(6),s=n(1),c=n(3),p=n(9),f=n(17),d=n(11),_=n(8),y=[],g=o._13({encapsulation:2,styles:y,data:{}});o._19("ion-tab",l.a,i,{color:"color",mode:"mode",swipeBackEnabled:"swipeBackEnabled",root:"root",rootParams:"rootParams",tabUrlPath:"tabUrlPath",tabTitle:"tabTitle",tabIcon:"tabIcon",tabBadge:"tabBadge",tabBadgeStyle:"tabBadgeStyle",enabled:"enabled",show:"show",tabsHideOnSubPages:"tabsHideOnSubPages"},{ionSelect:"ionSelect"},[])},386:function(t,e,n){"use strict";function r(t){return l._14(0,[(t()(),l._16(0,null,null,1,"a",[["class","tab-button"],["href","#"],["role","tab"]],[[1,"id",0],[1,"aria-controls",0],[1,"aria-selected",0],[2,"has-title",null],[2,"has-icon",null],[2,"has-title-only",null],[2,"icon-only",null],[2,"has-badge",null],[2,"disable-hover",null],[2,"tab-disabled",null],[2,"tab-hidden",null]],[[null,"ionSelect"],[null,"click"]],function(t,e,n){var r=!0,i=t.component;if("click"===e){r=!1!==l._18(t,1).onClick()&&r}if("ionSelect"===e){r=!1!==i.select(t.context.$implicit)&&r}return r},a.a,a.b)),l._17(114688,null,0,u.a,[s.c,l.H,l.I],{tab:[0,"tab"]},{ionSelect:"ionSelect"})],function(t,e){t(e,1,0,e.context.$implicit)},function(t,e){t(e,0,1,[l._18(e,1).tab._btnId,l._18(e,1).tab._tabId,l._18(e,1).tab.isSelected,l._18(e,1).hasTitle,l._18(e,1).hasIcon,l._18(e,1).hasTitleOnly,l._18(e,1).hasIconOnly,l._18(e,1).hasBadge,l._18(e,1).disHover,!l._18(e,1).tab.enabled,!l._18(e,1).tab.show])})}function i(t){return l._14(0,[l._20(402653184,1,{_highlight:0}),l._20(402653184,2,{_tabbar:0}),l._20(402653184,3,{portal:0}),(t()(),l._16(0,[[2,0],["tabbar",1]],null,4,"div",[["class","tabbar"],["role","tablist"]],null,null,null,null,null)),(t()(),l._24(16777216,null,null,1,null,r)),l._17(802816,null,0,c.l,[l.L,l.N,l.t],{ngForOf:[0,"ngForOf"]},null),(t()(),l._16(0,null,null,1,"div",[["class","tab-highlight"]],null,null,null,null,null)),l._17(16384,[[1,4]],0,p.a,[l.H,f.a],null,null),l._21(null,0),(t()(),l._16(16777216,[[3,3],["portal",1]],null,0,"div",[["tab-portal",""]],null,null,null,null,null))],function(t,e){t(e,5,0,e.component._tabs)},null)}function o(t){return l._14(0,[(t()(),l._16(0,null,null,2,"ion-tabs",[],null,null,null,i,P)),l._17(4374528,null,0,d.a,[[2,_.a],[2,y.a],g.a,s.c,l.H,h.b,l.I,b.b,m.a],null,null),l._23(6144,null,v.a,null,[d.a])],null,null)}n.d(e,"b",function(){return P}),e.a=i;var l=n(0),a=n(384),u=n(109),s=n(1),c=n(19),p=n(59),f=n(8),d=n(57),_=n(15),y=n(5),g=n(6),h=n(3),b=n(11),m=n(26),v=n(21),F=[],P=l._13({encapsulation:2,styles:F,data:{}});l._19("ion-tabs",d.a,o,{color:"color",mode:"mode",selectedIndex:"selectedIndex",tabsLayout:"tabsLayout",tabsPlacement:"tabsPlacement",tabsHighlight:"tabsHighlight"},{ionChange:"ionChange"},["*"])},490:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=(n(0),n(82),n(367),n(255),n(101),n(100),n(382),n(264),n(383),this&&this.__decorate,function(){function t(){}return t}())},491:function(t,e,n){"use strict";function r(t){return o._14(0,[o._20(402653184,1,{tabs:0}),(t()(),o._16(0,null,null,18,"ion-tabs",[],null,null,null,l.a,l.b)),o._17(4374528,[[1,4],["myTabs",4]],0,a.a,[[2,u.a],[2,s.a],c.a,p.c,o.H,f.b,o.I,d.b,_.a],null,null),o._23(6144,null,y.a,null,[a.a]),(t()(),o._15(0,["\n    "])),(t()(),o._16(0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","list-box"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,g.a,g.b)),o._17(245760,null,0,h.a,[a.a,c.a,p.c,f.b,o.H,o.g,o.I,o.K,o.T,b.a,m.a,[2,d.b],v.a,o.p],{root:[0,"root"],tabIcon:[1,"tabIcon"]},null),(t()(),o._15(0,["\n    "])),(t()(),o._16(0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","aperture"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,g.a,g.b)),o._17(245760,null,0,h.a,[a.a,c.a,p.c,f.b,o.H,o.g,o.I,o.K,o.T,b.a,m.a,[2,d.b],v.a,o.p],{root:[0,"root"],tabIcon:[1,"tabIcon"]},null),(t()(),o._15(0,["\n    "])),(t()(),o._16(0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","apps"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,g.a,g.b)),o._17(245760,null,0,h.a,[a.a,c.a,p.c,f.b,o.H,o.g,o.I,o.K,o.T,b.a,m.a,[2,d.b],v.a,o.p],{root:[0,"root"],tabIcon:[1,"tabIcon"]},null),(t()(),o._15(0,["\n    "])),(t()(),o._16(0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","notifications"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,g.a,g.b)),o._17(245760,null,0,h.a,[a.a,c.a,p.c,f.b,o.H,o.g,o.I,o.K,o.T,b.a,m.a,[2,d.b],v.a,o.p],{root:[0,"root"],tabIcon:[1,"tabIcon"]},null),(t()(),o._15(0,["\n    "])),(t()(),
o._16(0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","list"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,g.a,g.b)),o._17(245760,null,0,h.a,[a.a,c.a,p.c,f.b,o.H,o.g,o.I,o.K,o.T,b.a,m.a,[2,d.b],v.a,o.p],{root:[0,"root"],tabIcon:[1,"tabIcon"]},null),(t()(),o._15(0,["\n"]))],function(t,e){var n=e.component;t(e,6,0,n.tabHome,"list-box");t(e,9,0,n.tabFound,"aperture");t(e,12,0,n.tabClass,"apps");t(e,15,0,n.tabNotice,"notifications");t(e,18,0,n.tabMore,"list")},function(t,e){t(e,5,0,o._18(e,6)._tabId,o._18(e,6)._btnId),t(e,8,0,o._18(e,9)._tabId,o._18(e,9)._btnId),t(e,11,0,o._18(e,12)._tabId,o._18(e,12)._btnId),t(e,14,0,o._18(e,15)._tabId,o._18(e,15)._btnId),t(e,17,0,o._18(e,18)._tabId,o._18(e,18)._btnId)})}function i(t){return o._14(0,[(t()(),o._16(0,null,null,1,"ng-component",[],null,null,null,r,R)),o._17(49152,null,0,F.a,[P.a,w.a,S.a,f.b,u.a,O.a],null,null)],null,null)}n.d(e,"a",function(){return D});var o=n(0),l=n(386),a=n(57),u=n(15),s=n(5),c=n(6),p=n(1),f=n(3),d=n(11),_=n(26),y=n(21),g=n(385),h=n(110),b=n(9),m=n(17),v=n(8),F=n(367),P=n(100),w=n(83),S=n(101),O=n(60),I=[],R=o._13({encapsulation:2,styles:I,data:{}}),D=o._19("ng-component",F.a,i,{},{},[])}});
//# sourceMappingURL=/Users/apple/Documents/ionic2/3.4/chihu/www/build/17.main.js.map