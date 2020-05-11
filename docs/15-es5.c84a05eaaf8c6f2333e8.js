function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,o){return n&&_defineProperties(e.prototype,n),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{nEAQ:function(e,n,o){"use strict";o.r(n);var t,i,a=o("2kYt"),r=o("sEIs"),l=o("EM62"),b=o("nIj0"),c=o("tmbM"),d=o("uHuC"),u=o("eTWo"),g=o("hTEv"),s=o("KmMC"),p=o("Xs6n"),h=o("njv4"),f=o("Qwsl"),L=o("VDns"),N=o("gy4K"),O=o("kB5K"),m=o("qlS5"),C=function(){return["html"]},k=[{path:"",component:(t=function(){function e(){_classCallCheck(this,e),this.config={loader:!1,btnClass:"btn btn-primary",btnType:"button",speed:"medium"},this.notchLoader=!1,this.eclipseLoader=!1,this.bottleLoader=!1,this.arrowLoader=!1,this.pulseLoader=!1,this.circleLoader=!1,this.rippleLoader=!1,this.cubeLoader=!1,this.gridLoader=!1,this.api=[["Input","Default","Description"],["loader: boolean","false","Shows loader if true."],["btnClass: string","","A string of CSS classes to style the button."],['btnType: "button" | "submit"',"button","If the button is a submit type or not."],['speed: "slow" | "medium" | "fast"',"medium","The speed of the indicator animation."]]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"example",get:function(){return"\n    // Use the button components in a component template\n    <ngbit-dots-loading-button\n      loader=".concat(this.config.loader,'\n      btnClass="').concat(this.config.btnClass,'"\n      btnType="').concat(this.config.btnType,'"\n      speed="').concat(this.config.speed,'"\n      (click)="handleClick()">\n        Click to load\n    </ngbit-dots-loading-button>\n    ')}},{key:"example2",get:function(){return'\n    <ngbit-notch-loading-button [loader]="notchLoader"\n        (click)="notchLoader = !notchLoader">\n        Notch loading\n    </ngbit-notch-loading-button>\n    <ngbit-eclipse-loading-button [loader]="eclipseLoader"\n        (click)="eclipseLoader = !eclipseLoader">\n        Eclipse loading\n    </ngbit-eclipse-loading-button>\n    <ngbit-bottle-loading-button [loader]="bottleLoader"\n        (click)="bottleLoader = !bottleLoader">\n        Bottle loading\n    </ngbit-bottle-loading-button>\n    <ngbit-arrow-loading-button [loader]="arrowLoader"\n        (click)="arrowLoader = !arrowLoader">\n        Arrow loading\n    </ngbit-arrow-loading-button>\n    <ngbit-pulse-loading-button [loader]="pulseLoader"\n        (click)="pulseLoader = !pulseLoader">\n        Pulse loading\n    </ngbit-pulse-loading-button>\n    <ngbit-circle-loading-button [loader]="circleLoader"\n        (click)="circleLoader = !circleLoader">\n        Circle loading\n    </ngbit-circle-loading-button>\n    <ngbit-ripple-loading-button [loader]="rippleLoader"\n        (click)="rippleLoader = !rippleLoader">\n        Ripple loading\n    </ngbit-ripple-loading-button>\n    <ngbit-cube-loading-button [loader]="cubeLoader"\n        (click)="cubeLoader = !cubeLoader">\n        Cube loading\n    </ngbit-cube-loading-button>\n    <ngbit-grid-loading-button [loader]="gridLoader"\n        (click)="gridLoader = !gridLoader">\n        Load with grid\n    </ngbit-grid-loading-button>\n    '}}]),e}(),t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Fb({type:t,selectors:[["app-loading-button"]],decls:79,vars:24,consts:[[1,"lead"],[1,"py-3"],[1,"row"],[1,"col-md-3"],[1,"form-group"],["type","text","readonly","",1,"form-control",3,"ngModel","ngModelChange"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"custom-select",3,"ngModel","ngModelChange"],["value","button"],["value","submit"],["value","medium"],["value","slow"],["value","fast"],[3,"loader","btnClass","btnType","speed","click"],[1,"my-3"],[3,"highlight","languages"],[1,"mt-3"],["btnClass","btn btn-primary mr-2 mb-2",3,"loader","click"],[1,"badge","badge-dark"],[1,"badge","badge-info"],[3,"tableValues"]],template:function(e,n){1&e&&(l.Ob(0,"h1"),l.rc(1,"Loading button"),l.Nb(),l.Ob(2,"p",0),l.rc(3,"Button components that can change between text and a loading indicator while preserving the initial size."),l.Nb(),l.Ob(4,"section",1),l.Ob(5,"h3"),l.rc(6,"Examples"),l.Nb(),l.Ob(7,"div",2),l.Ob(8,"div",3),l.Ob(9,"div",4),l.Ob(10,"label"),l.rc(11,"Loader"),l.Nb(),l.Ob(12,"input",5),l.Wb("ngModelChange",(function(e){return n.config.loader=e})),l.Nb(),l.Nb(),l.Nb(),l.Ob(13,"div",3),l.Ob(14,"div",4),l.Ob(15,"label"),l.rc(16,"Button class"),l.Nb(),l.Ob(17,"input",6),l.Wb("ngModelChange",(function(e){return n.config.btnClass=e})),l.Nb(),l.Nb(),l.Nb(),l.Ob(18,"div",3),l.Ob(19,"div",4),l.Ob(20,"label"),l.rc(21,"Button type"),l.Nb(),l.Ob(22,"select",7),l.Wb("ngModelChange",(function(e){return n.config.btnType=e})),l.Ob(23,"option",8),l.rc(24,"Button"),l.Nb(),l.Ob(25,"option",9),l.rc(26,"Submit"),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(27,"div",3),l.Ob(28,"div",4),l.Ob(29,"label"),l.rc(30,"Speed"),l.Nb(),l.Ob(31,"select",7),l.Wb("ngModelChange",(function(e){return n.config.speed=e})),l.Ob(32,"option",10),l.rc(33,"Medium"),l.Nb(),l.Ob(34,"option",11),l.rc(35,"Slow"),l.Nb(),l.Ob(36,"option",12),l.rc(37,"Fast"),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(38,"ngbit-dots-loading-button",13),l.Wb("click",(function(){return n.config.loader=!n.config.loader})),l.rc(39," Click to load "),l.Nb(),l.Ob(40,"pre",14),l.Mb(41,"code",15),l.Nb(),l.Ob(42,"p",16),l.rc(43,"There are 10 variants of the button corresponding with the 10 different Ngbits indicators. All loading indicators are in pure inlined SVG. You do not need any icon or font libraries. "),l.Nb(),l.Ob(44,"ngbit-notch-loading-button",17),l.Wb("click",(function(){return n.notchLoader=!n.notchLoader})),l.rc(45," Notch loading "),l.Nb(),l.Ob(46,"ngbit-eclipse-loading-button",17),l.Wb("click",(function(){return n.eclipseLoader=!n.eclipseLoader})),l.rc(47," Eclipse loading "),l.Nb(),l.Ob(48,"ngbit-bottle-loading-button",17),l.Wb("click",(function(){return n.bottleLoader=!n.bottleLoader})),l.rc(49," Bottle loading "),l.Nb(),l.Ob(50,"ngbit-arrow-loading-button",17),l.Wb("click",(function(){return n.arrowLoader=!n.arrowLoader})),l.rc(51," Arrow loading "),l.Nb(),l.Ob(52,"ngbit-pulse-loading-button",17),l.Wb("click",(function(){return n.pulseLoader=!n.pulseLoader})),l.rc(53," Pulse loading "),l.Nb(),l.Ob(54,"ngbit-circle-loading-button",17),l.Wb("click",(function(){return n.circleLoader=!n.circleLoader})),l.rc(55," Circle loading "),l.Nb(),l.Ob(56,"ngbit-ripple-loading-button",17),l.Wb("click",(function(){return n.rippleLoader=!n.rippleLoader})),l.rc(57," Ripple loading "),l.Nb(),l.Ob(58,"ngbit-cube-loading-button",17),l.Wb("click",(function(){return n.cubeLoader=!n.cubeLoader})),l.rc(59," Cube loading "),l.Nb(),l.Ob(60,"ngbit-grid-loading-button",17),l.Wb("click",(function(){return n.gridLoader=!n.gridLoader})),l.rc(61," Load with grid"),l.Nb(),l.Ob(62,"pre",14),l.Mb(63,"code",15),l.Nb(),l.Nb(),l.Ob(64,"section",1),l.Ob(65,"h3"),l.rc(66,"API"),l.Nb(),l.Ob(67,"h5"),l.rc(68,"NgbitLoadingButtonModule "),l.Ob(69,"span",18),l.rc(70,"Module"),l.Nb(),l.Nb(),l.Mb(71,"hr"),l.Ob(72,"h5"),l.rc(73,"Ngbit[variant]LoadingButton "),l.Ob(74,"span",19),l.rc(75,"Component"),l.Nb(),l.Nb(),l.Ob(76,"p"),l.rc(77,"Replace [variant] with any of the 10: 'Dots', 'Notch', 'Eclipse', 'Bottle', 'Arrow', 'Pulse', 'Circle', 'Ripple', 'Cube' or 'Grid'."),l.Nb(),l.Mb(78,"app-api-table",20),l.Nb()),2&e&&(l.zb(12),l.ec("ngModel",n.config.loader),l.zb(5),l.ec("ngModel",n.config.btnClass),l.zb(5),l.ec("ngModel",n.config.btnType),l.zb(9),l.ec("ngModel",n.config.speed),l.zb(7),l.ec("loader",n.config.loader)("btnClass",n.config.btnClass)("btnType",n.config.btnType)("speed",n.config.speed),l.zb(3),l.ec("highlight",n.example)("languages",l.fc(22,C)),l.zb(3),l.ec("loader",n.notchLoader),l.zb(2),l.ec("loader",n.eclipseLoader),l.zb(2),l.ec("loader",n.bottleLoader),l.zb(2),l.ec("loader",n.arrowLoader),l.zb(2),l.ec("loader",n.pulseLoader),l.zb(2),l.ec("loader",n.circleLoader),l.zb(2),l.ec("loader",n.rippleLoader),l.zb(2),l.ec("loader",n.cubeLoader),l.zb(2),l.ec("loader",n.gridLoader),l.zb(3),l.ec("highlight",n.example2)("languages",l.fc(23,C)),l.zb(15),l.ec("tableValues",n.api))},directives:[b.a,b.c,b.d,b.h,b.e,b.i,c.a,d.a,u.a,g.a,s.a,p.a,h.a,f.a,L.a,N.a,O.a,m.a],styles:[""]}),t)}],w=((i=function e(){_classCallCheck(this,e)}).\u0275mod=l.Jb({type:i}),i.\u0275inj=l.Ib({factory:function(e){return new(e||i)},imports:[[r.d.forChild(k)],r.d]}),i),y=o("bQSs"),v=o("PCNd");o.d(n,"LoadingButtonModule",(function(){return z}));var M,z=((M=function e(){_classCallCheck(this,e)}).\u0275mod=l.Jb({type:M}),M.\u0275inj=l.Ib({factory:function(e){return new(e||M)},imports:[[a.b,v.a,b.b,d.b,y.h,w]]}),M)}}]);