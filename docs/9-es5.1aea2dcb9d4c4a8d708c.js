function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{P6yV:function(e,n,t){"use strict";t.r(n);var o,a,i,c,r=t("2kYt"),s=t("sEIs"),l=t("EM62"),b=t("mrFd"),d=((a=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=l.Fb({type:a,selectors:[["app-custom-test"]],decls:7,vars:1,consts:[[1,"wrapper","text-center"],[1,"inner","bg-primary"]],template:function(e,n){1&e&&(l.Ob(0,"div",0),l.Ob(1,"div",1),l.Ob(2,"div"),l.Ob(3,"p"),l.Mb(4,"ngbit-eclipse-indicator"),l.Nb(),l.Ob(5,"p"),l.rc(6),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&e&&(l.zb(6),l.sc(n.message))},directives:[b.a],styles:[".wrapper[_ngcontent-%COMP%] {\n            height: 100%;\n            width: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 2em;\n            color: white;\n        }\n        .inner[_ngcontent-%COMP%] {\n            width: 270px;\n            height: 270px;\n            border: 1px solid grey;\n            border-radius: 8px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }"]}),a),p=((o=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=l.Fb({type:o,selectors:[["app-custom-test-full"]],decls:6,vars:1,consts:[[1,"wrapper","text-center"]],template:function(e,n){1&e&&(l.Ob(0,"div",0),l.Ob(1,"div"),l.Ob(2,"p"),l.Mb(3,"ngbit-eclipse-indicator"),l.Nb(),l.Ob(4,"p"),l.rc(5),l.Nb(),l.Nb(),l.Nb()),2&e&&(l.zb(5),l.sc(n.message))},directives:[b.a],styles:[".wrapper[_ngcontent-%COMP%] {\n            height: 100%;\n            width: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 2em;\n            background-color: rgba(255, 255, 255, 0.8);\n        }"]}),o),g=t("bQSs"),u=t("nIj0"),h=t("uHuC"),f=t("qlS5"),m=function(){return["typescript"]},y=[{path:"",component:(i=function(){function e(n){_classCallCheck(this,e),this.blocknload=n,this.config={message:"Hang tight!",position:"top",background:"lightgrey",color:"dodgerblue",height:"4px",bootstrap:null},this.api=[["Method","Parameters","Description"],["overlay(): NgbitOverlayBlocknloadComponent","component: Component, data?: object","Inserts a page overlay onto which a component can be displayed."],["bar(): NgbitBarBlocknloadComponent","options?: NgbitBlocknloadOptions","Inserts an indeterminate bar at the top or bottom of page."]],this.interfaceApi=[["Property","Default","Description"],["position: 'top' | 'bottom","'top'","Position of the bar."],["backgroundColor: string","lightgrey","A CSS color string."],["color: string","dodgerblue","A css color string."],["height: string","4px","A css height string. Determines the height of the bar."],["bsStyle: 'primary' | 'secondary' | 'info' | 'danger' | 'warning' | 'success'","","Any of bootstrap's contextual classes to style the bar. This will override any other color settings."]]}return _createClass(e,[{key:"bar",value:function(){var e=this.blocknload.bar({position:this.config.position,backgroundColor:this.config.background,color:this.config.color,height:this.config.height,bsStyle:this.config.bootstrap});setTimeout((function(){e.done()}),3e3)}},{key:"overlay",value:function(){var e=this.blocknload.overlay(d,{message:this.config.message});setTimeout((function(){e.done()}),3e3)}},{key:"overlayFull",value:function(){var e=this.blocknload.overlay(p,{message:this.config.message});setTimeout((function(){e.done()}),3e3)}},{key:"example",get:function(){return"\n    // Component from where blocknload is triggered\n\n    constructor(private blocknload: NgbitBlocknloadService) { }\n\n    const data = {\n      message: ".concat(this.config.message,"\n    }\n\n    // Here we pass a custom component that has a centered, fixed width template\n    overlayWithMessage() {\n      const instance = this.blocknload.overlay(OverlayCenterComponent, data);\n      setTimeout(() => {\n        instance.done();\n      }, 3000);\n    }\n\n    // Here we pass a custom component that is full width and height\n    fullscreenWithMessage() {\n      this.blocknload.overlay(OverlayFullscreenComponent, data);\n      setTimeout(() => {\n        instance.done();\n      }, 3000);\n    }\n\n    // Implementation of OverlayFullscreenComponent for illustration\n    @Component({\n      selector: 'overlay-fullscreen',\n      template: `\n        <div class=\"wrapper\">\n          <div>\n            <p>\n              <ngbit-eclipse-indicator></ngbit-eclipse-indicator>\n            </p>\n            <p>{{ message }}</p>\n          </div>\n        </div>\n        `,\n      styles: [`\n        .wrapper {\n          height: 100%;\n          width: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          font-size: 2em;\n          text-align: center;\n          background-color: rgba(255, 255, 255, 0.8);\n        }\n      `]\n  })\n  export class OverlayFullscreenComponent {\n      message: string;\n  }\n    ")}},{key:"example2",get:function(){return'\n    bar() {\n      const config: NgbitBlocknloadOptions = {\n        position: "'.concat(this.config.position,'",\n        backgroundColor: "').concat(this.config.background,'",\n        color: "').concat(this.config.color,'",\n        height: "').concat(this.config.height,'",\n        bsStyle: "').concat(this.config.bootstrap,'"\n      };\n      const instance = this.blocknload.bar(config);\n      setTimeout(() => {\n        instance.done();\n      }, 3000);\n    }\n      ')}}]),e}(),i.\u0275fac=function(e){return new(e||i)(l.Lb(g.a))},i.\u0275cmp=l.Fb({type:i,selectors:[["app-blocknload"]],decls:100,vars:15,consts:[[1,"lead"],[1,"py-3"],[1,"row"],[1,"col-md-12"],[1,"form-group"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn","btn-primary","mr-2",3,"click"],[1,"my-3"],[3,"highlight","languages"],[1,"col-md-3"],[1,"custom-select",3,"ngModel","ngModelChange"],["value","top"],["value","bottom"],[1,"col-md-2"],[3,"ngValue"],["value","primary"],["value","secondary"],["value","info"],["value","success"],["value","warning"],["value","danger"],[1,"badge","badge-dark"],[1,"badge","badge-primary"],[3,"tableValues"],[1,"badge","badge-secondary"]],template:function(e,n){1&e&&(l.Ob(0,"h1"),l.rc(1,"Block'n'Load"),l.Nb(),l.Ob(2,"p",0),l.rc(3,'A service that dynamically shows and hides blocking loading components. This is useful for examle if loading routes takes time and the user has to wait (is "blocked") before continue to use the app.'),l.Nb(),l.Ob(4,"section",1),l.Ob(5,"h3"),l.rc(6,"Example"),l.Nb(),l.Ob(7,"p"),l.rc(8,"The "),l.Ob(9,"code"),l.rc(10,"overlay"),l.Nb(),l.rc(11," method takes a component and a data object as parameters. The component can contain any template and will have access to all properties on the data object."),l.Nb(),l.Ob(12,"p"),l.rc(13,"The method returns an instance of the overlay component. It contains a "),l.Ob(14,"code"),l.rc(15,"done"),l.Nb(),l.rc(16," method to destroy the overlay once the loading is done."),l.Nb(),l.Ob(17,"div",2),l.Ob(18,"div",3),l.Ob(19,"div",4),l.Ob(20,"label"),l.rc(21,"Message (passed via data object)"),l.Nb(),l.Ob(22,"input",5),l.Wb("ngModelChange",(function(e){return n.config.message=e})),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(23,"button",6),l.Wb("click",(function(){return n.overlay()})),l.rc(24,"Overlay with message"),l.Nb(),l.Ob(25,"button",6),l.Wb("click",(function(){return n.overlayFull()})),l.rc(26,"Fullscreen overlay with message"),l.Nb(),l.Ob(27,"pre",7),l.Mb(28,"code",8),l.Nb(),l.Ob(29,"p"),l.rc(30,"The "),l.Ob(31,"code"),l.rc(32,"bar"),l.Nb(),l.rc(33," method displays a material style indeterminate bar at the top or bottom of the screen instead of an overlay. The method takes a configuration object which accepts a number of properties to define the bar's appearance."),l.Nb(),l.Ob(34,"div",2),l.Ob(35,"div",9),l.Ob(36,"div",4),l.Ob(37,"label"),l.rc(38,"Position"),l.Nb(),l.Ob(39,"select",10),l.Wb("ngModelChange",(function(e){return n.config.position=e})),l.Ob(40,"option",11),l.rc(41,"Top"),l.Nb(),l.Ob(42,"option",12),l.rc(43,"Bottom"),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(44,"div",13),l.Ob(45,"div",4),l.Ob(46,"label"),l.rc(47,"Background"),l.Nb(),l.Ob(48,"input",5),l.Wb("ngModelChange",(function(e){return n.config.background=e})),l.Nb(),l.Nb(),l.Nb(),l.Ob(49,"div",13),l.Ob(50,"div",4),l.Ob(51,"label"),l.rc(52,"Color"),l.Nb(),l.Ob(53,"input",5),l.Wb("ngModelChange",(function(e){return n.config.color=e})),l.Nb(),l.Nb(),l.Nb(),l.Ob(54,"div",13),l.Ob(55,"div",4),l.Ob(56,"label"),l.rc(57,"Height"),l.Nb(),l.Ob(58,"input",5),l.Wb("ngModelChange",(function(e){return n.config.height=e})),l.Nb(),l.Nb(),l.Nb(),l.Ob(59,"div",9),l.Ob(60,"div",4),l.Ob(61,"label"),l.rc(62,"Bootstrap style"),l.Nb(),l.Ob(63,"select",10),l.Wb("ngModelChange",(function(e){return n.config.bootstrap=e})),l.Ob(64,"option",14),l.rc(65,"None"),l.Nb(),l.Ob(66,"option",15),l.rc(67,"Primary"),l.Nb(),l.Ob(68,"option",16),l.rc(69,"Secondary"),l.Nb(),l.Ob(70,"option",17),l.rc(71,"Info"),l.Nb(),l.Ob(72,"option",18),l.rc(73,"Success"),l.Nb(),l.Ob(74,"option",19),l.rc(75,"Warning"),l.Nb(),l.Ob(76,"option",20),l.rc(77,"Danger"),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(78,"button",6),l.Wb("click",(function(){return n.bar()})),l.rc(79,"Blocknload with bar"),l.Nb(),l.Ob(80,"pre",7),l.Mb(81,"code",8),l.Nb(),l.Nb(),l.Ob(82,"section",1),l.Ob(83,"h3"),l.rc(84,"API"),l.Nb(),l.Ob(85,"h5"),l.rc(86,"NgbitBlocknloadModule "),l.Ob(87,"span",21),l.rc(88,"Module"),l.Nb(),l.Nb(),l.Mb(89,"hr"),l.Ob(90,"h5"),l.rc(91,"NgbitBlocknloadService "),l.Ob(92,"span",22),l.rc(93,"Service"),l.Nb(),l.Nb(),l.Mb(94,"app-api-table",23),l.Ob(95,"h5"),l.rc(96,"NgbitBlocknloadOptions "),l.Ob(97,"span",24),l.rc(98,"Interface"),l.Nb(),l.Nb(),l.Mb(99,"app-api-table",23),l.Nb()),2&e&&(l.zb(22),l.ec("ngModel",n.config.message),l.zb(6),l.ec("highlight",n.example)("languages",l.fc(13,m)),l.zb(11),l.ec("ngModel",n.config.position),l.zb(9),l.ec("ngModel",n.config.background),l.zb(5),l.ec("ngModel",n.config.color),l.zb(5),l.ec("ngModel",n.config.height),l.zb(5),l.ec("ngModel",n.config.bootstrap),l.zb(1),l.ec("ngValue",null),l.zb(17),l.ec("highlight",n.example2)("languages",l.fc(14,m)),l.zb(13),l.ec("tableValues",n.api),l.zb(5),l.ec("tableValues",n.interfaceApi))},directives:[u.a,u.c,u.d,h.a,u.h,u.e,u.i,f.a],styles:[""]}),i)}],O=((c=function e(){_classCallCheck(this,e)}).\u0275mod=l.Jb({type:c}),c.\u0275inj=l.Ib({factory:function(e){return new(e||c)},imports:[[s.d.forChild(y)],s.d]}),c),v=t("PCNd");t.d(n,"BlocknloadModule",(function(){return k}));var N,k=((N=function e(){_classCallCheck(this,e)}).\u0275mod=l.Jb({type:N}),N.\u0275inj=l.Ib({factory:function(e){return new(e||N)},imports:[[r.b,u.b,v.a,h.b,g.g,O]]}),N)}}]);