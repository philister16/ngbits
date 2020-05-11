(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{P6yV:function(e,n,t){"use strict";t.r(n);var o=t("2kYt"),i=t("sEIs"),a=t("EM62"),r=t("mrFd");let c=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a.Fb({type:e,selectors:[["app-custom-test"]],decls:7,vars:1,consts:[[1,"wrapper","text-center"],[1,"inner","bg-primary"]],template:function(e,n){1&e&&(a.Ob(0,"div",0),a.Ob(1,"div",1),a.Ob(2,"div"),a.Ob(3,"p"),a.Mb(4,"ngbit-eclipse-indicator"),a.Nb(),a.Ob(5,"p"),a.rc(6),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&e&&(a.zb(6),a.sc(n.message))},directives:[r.a],styles:[".wrapper[_ngcontent-%COMP%] {\n            height: 100%;\n            width: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 2em;\n            color: white;\n        }\n        .inner[_ngcontent-%COMP%] {\n            width: 270px;\n            height: 270px;\n            border: 1px solid grey;\n            border-radius: 8px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }"]}),e})(),s=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a.Fb({type:e,selectors:[["app-custom-test-full"]],decls:6,vars:1,consts:[[1,"wrapper","text-center"]],template:function(e,n){1&e&&(a.Ob(0,"div",0),a.Ob(1,"div"),a.Ob(2,"p"),a.Mb(3,"ngbit-eclipse-indicator"),a.Nb(),a.Ob(4,"p"),a.rc(5),a.Nb(),a.Nb(),a.Nb()),2&e&&(a.zb(5),a.sc(n.message))},directives:[r.a],styles:[".wrapper[_ngcontent-%COMP%] {\n            height: 100%;\n            width: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 2em;\n            background-color: rgba(255, 255, 255, 0.8);\n        }"]}),e})();var b=t("bQSs"),l=t("nIj0"),d=t("uHuC"),g=t("qlS5");const p=function(){return["typescript"]},h=[{path:"",component:(()=>{class e{constructor(e){this.blocknload=e,this.config={message:"Hang tight!",position:"top",background:"lightgrey",color:"dodgerblue",height:"4px",bootstrap:null},this.api=[["Method","Parameters","Description"],["overlay(): NgbitOverlayBlocknloadComponent","component: Component, data?: object","Inserts a page overlay onto which a component can be displayed."],["bar(): NgbitBarBlocknloadComponent","options?: NgbitBlocknloadOptions","Inserts an indeterminate bar at the top or bottom of page."]],this.interfaceApi=[["Property","Default","Description"],["position: 'top' | 'bottom","'top'","Position of the bar."],["backgroundColor: string","lightgrey","A CSS color string."],["color: string","dodgerblue","A css color string."],["height: string","4px","A css height string. Determines the height of the bar."],["bsStyle: 'primary' | 'secondary' | 'info' | 'danger' | 'warning' | 'success'","","Any of bootstrap's contextual classes to style the bar. This will override any other color settings."]]}bar(){const e=this.blocknload.bar({position:this.config.position,backgroundColor:this.config.background,color:this.config.color,height:this.config.height,bsStyle:this.config.bootstrap});setTimeout(()=>{e.done()},3e3)}overlay(){const e=this.blocknload.overlay(c,{message:this.config.message});setTimeout(()=>{e.done()},3e3)}overlayFull(){const e=this.blocknload.overlay(s,{message:this.config.message});setTimeout(()=>{e.done()},3e3)}get example(){return`\n    // Component from where blocknload is triggered\n\n    constructor(private blocknload: NgbitBlocknloadService) { }\n\n    const data = {\n      message: ${this.config.message}\n    }\n\n    // Here we pass a custom component that has a centered, fixed width template\n    overlayWithMessage() {\n      const instance = this.blocknload.overlay(OverlayCenterComponent, data);\n      setTimeout(() => {\n        instance.done();\n      }, 3000);\n    }\n\n    // Here we pass a custom component that is full width and height\n    fullscreenWithMessage() {\n      this.blocknload.overlay(OverlayFullscreenComponent, data);\n      setTimeout(() => {\n        instance.done();\n      }, 3000);\n    }\n\n    // Implementation of OverlayFullscreenComponent for illustration\n    @Component({\n      selector: 'overlay-fullscreen',\n      template: \`\n        <div class="wrapper">\n          <div>\n            <p>\n              <ngbit-eclipse-indicator></ngbit-eclipse-indicator>\n            </p>\n            <p>{{ message }}</p>\n          </div>\n        </div>\n        \`,\n      styles: [\`\n        .wrapper {\n          height: 100%;\n          width: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          font-size: 2em;\n          text-align: center;\n          background-color: rgba(255, 255, 255, 0.8);\n        }\n      \`]\n  })\n  export class OverlayFullscreenComponent {\n      message: string;\n  }\n    `}get example2(){return`\n    bar() {\n      const config: NgbitBlocknloadOptions = {\n        position: "${this.config.position}",\n        backgroundColor: "${this.config.background}",\n        color: "${this.config.color}",\n        height: "${this.config.height}",\n        bsStyle: "${this.config.bootstrap}"\n      };\n      const instance = this.blocknload.bar(config);\n      setTimeout(() => {\n        instance.done();\n      }, 3000);\n    }\n      `}}return e.\u0275fac=function(n){return new(n||e)(a.Lb(b.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-blocknload"]],decls:100,vars:15,consts:[[1,"lead"],[1,"py-3"],[1,"row"],[1,"col-md-12"],[1,"form-group"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn","btn-primary","mr-2",3,"click"],[1,"my-3"],[3,"highlight","languages"],[1,"col-md-3"],[1,"custom-select",3,"ngModel","ngModelChange"],["value","top"],["value","bottom"],[1,"col-md-2"],[3,"ngValue"],["value","primary"],["value","secondary"],["value","info"],["value","success"],["value","warning"],["value","danger"],[1,"badge","badge-dark"],[1,"badge","badge-primary"],[3,"tableValues"],[1,"badge","badge-secondary"]],template:function(e,n){1&e&&(a.Ob(0,"h1"),a.rc(1,"Block'n'Load"),a.Nb(),a.Ob(2,"p",0),a.rc(3,'A service that dynamically shows and hides blocking loading components. This is useful for examle if loading routes takes time and the user has to wait (is "blocked") before continue to use the app.'),a.Nb(),a.Ob(4,"section",1),a.Ob(5,"h3"),a.rc(6,"Example"),a.Nb(),a.Ob(7,"p"),a.rc(8,"The "),a.Ob(9,"code"),a.rc(10,"overlay"),a.Nb(),a.rc(11," method takes a component and a data object as parameters. The component can contain any template and will have access to all properties on the data object."),a.Nb(),a.Ob(12,"p"),a.rc(13,"The method returns an instance of the overlay component. It contains a "),a.Ob(14,"code"),a.rc(15,"done"),a.Nb(),a.rc(16," method to destroy the overlay once the loading is done."),a.Nb(),a.Ob(17,"div",2),a.Ob(18,"div",3),a.Ob(19,"div",4),a.Ob(20,"label"),a.rc(21,"Message (passed via data object)"),a.Nb(),a.Ob(22,"input",5),a.Wb("ngModelChange",(function(e){return n.config.message=e})),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(23,"button",6),a.Wb("click",(function(){return n.overlay()})),a.rc(24,"Overlay with message"),a.Nb(),a.Ob(25,"button",6),a.Wb("click",(function(){return n.overlayFull()})),a.rc(26,"Fullscreen overlay with message"),a.Nb(),a.Ob(27,"pre",7),a.Mb(28,"code",8),a.Nb(),a.Ob(29,"p"),a.rc(30,"The "),a.Ob(31,"code"),a.rc(32,"bar"),a.Nb(),a.rc(33," method displays a material style indeterminate bar at the top or bottom of the screen instead of an overlay. The method takes a configuration object which accepts a number of properties to define the bar's appearance."),a.Nb(),a.Ob(34,"div",2),a.Ob(35,"div",9),a.Ob(36,"div",4),a.Ob(37,"label"),a.rc(38,"Position"),a.Nb(),a.Ob(39,"select",10),a.Wb("ngModelChange",(function(e){return n.config.position=e})),a.Ob(40,"option",11),a.rc(41,"Top"),a.Nb(),a.Ob(42,"option",12),a.rc(43,"Bottom"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(44,"div",13),a.Ob(45,"div",4),a.Ob(46,"label"),a.rc(47,"Background"),a.Nb(),a.Ob(48,"input",5),a.Wb("ngModelChange",(function(e){return n.config.background=e})),a.Nb(),a.Nb(),a.Nb(),a.Ob(49,"div",13),a.Ob(50,"div",4),a.Ob(51,"label"),a.rc(52,"Color"),a.Nb(),a.Ob(53,"input",5),a.Wb("ngModelChange",(function(e){return n.config.color=e})),a.Nb(),a.Nb(),a.Nb(),a.Ob(54,"div",13),a.Ob(55,"div",4),a.Ob(56,"label"),a.rc(57,"Height"),a.Nb(),a.Ob(58,"input",5),a.Wb("ngModelChange",(function(e){return n.config.height=e})),a.Nb(),a.Nb(),a.Nb(),a.Ob(59,"div",9),a.Ob(60,"div",4),a.Ob(61,"label"),a.rc(62,"Bootstrap style"),a.Nb(),a.Ob(63,"select",10),a.Wb("ngModelChange",(function(e){return n.config.bootstrap=e})),a.Ob(64,"option",14),a.rc(65,"None"),a.Nb(),a.Ob(66,"option",15),a.rc(67,"Primary"),a.Nb(),a.Ob(68,"option",16),a.rc(69,"Secondary"),a.Nb(),a.Ob(70,"option",17),a.rc(71,"Info"),a.Nb(),a.Ob(72,"option",18),a.rc(73,"Success"),a.Nb(),a.Ob(74,"option",19),a.rc(75,"Warning"),a.Nb(),a.Ob(76,"option",20),a.rc(77,"Danger"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(78,"button",6),a.Wb("click",(function(){return n.bar()})),a.rc(79,"Blocknload with bar"),a.Nb(),a.Ob(80,"pre",7),a.Mb(81,"code",8),a.Nb(),a.Nb(),a.Ob(82,"section",1),a.Ob(83,"h3"),a.rc(84,"API"),a.Nb(),a.Ob(85,"h5"),a.rc(86,"NgbitBlocknloadModule "),a.Ob(87,"span",21),a.rc(88,"Module"),a.Nb(),a.Nb(),a.Mb(89,"hr"),a.Ob(90,"h5"),a.rc(91,"NgbitBlocknloadService "),a.Ob(92,"span",22),a.rc(93,"Service"),a.Nb(),a.Nb(),a.Mb(94,"app-api-table",23),a.Ob(95,"h5"),a.rc(96,"NgbitBlocknloadOptions "),a.Ob(97,"span",24),a.rc(98,"Interface"),a.Nb(),a.Nb(),a.Mb(99,"app-api-table",23),a.Nb()),2&e&&(a.zb(22),a.ec("ngModel",n.config.message),a.zb(6),a.ec("highlight",n.example)("languages",a.fc(13,p)),a.zb(11),a.ec("ngModel",n.config.position),a.zb(9),a.ec("ngModel",n.config.background),a.zb(5),a.ec("ngModel",n.config.color),a.zb(5),a.ec("ngModel",n.config.height),a.zb(5),a.ec("ngModel",n.config.bootstrap),a.zb(1),a.ec("ngValue",null),a.zb(17),a.ec("highlight",n.example2)("languages",a.fc(14,p)),a.zb(13),a.ec("tableValues",n.api),a.zb(5),a.ec("tableValues",n.interfaceApi))},directives:[l.a,l.c,l.d,d.a,l.h,l.e,l.i,g.a],styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(n){return new(n||e)},imports:[[i.d.forChild(h)],i.d]}),e})();var m=t("PCNd");t.d(n,"BlocknloadModule",(function(){return f}));let f=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(n){return new(n||e)},imports:[[o.b,l.b,m.a,d.b,b.g,u]]}),e})()}}]);