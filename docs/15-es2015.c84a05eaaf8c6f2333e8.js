(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{nEAQ:function(e,n,o){"use strict";o.r(n);var t=o("2kYt"),i=o("sEIs"),r=o("EM62"),a=o("nIj0"),b=o("tmbM"),l=o("uHuC"),d=o("eTWo"),c=o("hTEv"),g=o("KmMC"),u=o("Xs6n"),s=o("njv4"),p=o("Qwsl"),h=o("VDns"),L=o("gy4K"),f=o("kB5K"),N=o("qlS5");const O=function(){return["html"]},m=[{path:"",component:(()=>{class e{constructor(){this.config={loader:!1,btnClass:"btn btn-primary",btnType:"button",speed:"medium"},this.notchLoader=!1,this.eclipseLoader=!1,this.bottleLoader=!1,this.arrowLoader=!1,this.pulseLoader=!1,this.circleLoader=!1,this.rippleLoader=!1,this.cubeLoader=!1,this.gridLoader=!1,this.api=[["Input","Default","Description"],["loader: boolean","false","Shows loader if true."],["btnClass: string","","A string of CSS classes to style the button."],['btnType: "button" | "submit"',"button","If the button is a submit type or not."],['speed: "slow" | "medium" | "fast"',"medium","The speed of the indicator animation."]]}ngOnInit(){}get example(){return`\n    // Use the button components in a component template\n    <ngbit-dots-loading-button\n      loader=${this.config.loader}\n      btnClass="${this.config.btnClass}"\n      btnType="${this.config.btnType}"\n      speed="${this.config.speed}"\n      (click)="handleClick()">\n        Click to load\n    </ngbit-dots-loading-button>\n    `}get example2(){return'\n    <ngbit-notch-loading-button [loader]="notchLoader"\n        (click)="notchLoader = !notchLoader">\n        Notch loading\n    </ngbit-notch-loading-button>\n    <ngbit-eclipse-loading-button [loader]="eclipseLoader"\n        (click)="eclipseLoader = !eclipseLoader">\n        Eclipse loading\n    </ngbit-eclipse-loading-button>\n    <ngbit-bottle-loading-button [loader]="bottleLoader"\n        (click)="bottleLoader = !bottleLoader">\n        Bottle loading\n    </ngbit-bottle-loading-button>\n    <ngbit-arrow-loading-button [loader]="arrowLoader"\n        (click)="arrowLoader = !arrowLoader">\n        Arrow loading\n    </ngbit-arrow-loading-button>\n    <ngbit-pulse-loading-button [loader]="pulseLoader"\n        (click)="pulseLoader = !pulseLoader">\n        Pulse loading\n    </ngbit-pulse-loading-button>\n    <ngbit-circle-loading-button [loader]="circleLoader"\n        (click)="circleLoader = !circleLoader">\n        Circle loading\n    </ngbit-circle-loading-button>\n    <ngbit-ripple-loading-button [loader]="rippleLoader"\n        (click)="rippleLoader = !rippleLoader">\n        Ripple loading\n    </ngbit-ripple-loading-button>\n    <ngbit-cube-loading-button [loader]="cubeLoader"\n        (click)="cubeLoader = !cubeLoader">\n        Cube loading\n    </ngbit-cube-loading-button>\n    <ngbit-grid-loading-button [loader]="gridLoader"\n        (click)="gridLoader = !gridLoader">\n        Load with grid\n    </ngbit-grid-loading-button>\n    '}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Fb({type:e,selectors:[["app-loading-button"]],decls:79,vars:24,consts:[[1,"lead"],[1,"py-3"],[1,"row"],[1,"col-md-3"],[1,"form-group"],["type","text","readonly","",1,"form-control",3,"ngModel","ngModelChange"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"custom-select",3,"ngModel","ngModelChange"],["value","button"],["value","submit"],["value","medium"],["value","slow"],["value","fast"],[3,"loader","btnClass","btnType","speed","click"],[1,"my-3"],[3,"highlight","languages"],[1,"mt-3"],["btnClass","btn btn-primary mr-2 mb-2",3,"loader","click"],[1,"badge","badge-dark"],[1,"badge","badge-info"],[3,"tableValues"]],template:function(e,n){1&e&&(r.Ob(0,"h1"),r.rc(1,"Loading button"),r.Nb(),r.Ob(2,"p",0),r.rc(3,"Button components that can change between text and a loading indicator while preserving the initial size."),r.Nb(),r.Ob(4,"section",1),r.Ob(5,"h3"),r.rc(6,"Examples"),r.Nb(),r.Ob(7,"div",2),r.Ob(8,"div",3),r.Ob(9,"div",4),r.Ob(10,"label"),r.rc(11,"Loader"),r.Nb(),r.Ob(12,"input",5),r.Wb("ngModelChange",(function(e){return n.config.loader=e})),r.Nb(),r.Nb(),r.Nb(),r.Ob(13,"div",3),r.Ob(14,"div",4),r.Ob(15,"label"),r.rc(16,"Button class"),r.Nb(),r.Ob(17,"input",6),r.Wb("ngModelChange",(function(e){return n.config.btnClass=e})),r.Nb(),r.Nb(),r.Nb(),r.Ob(18,"div",3),r.Ob(19,"div",4),r.Ob(20,"label"),r.rc(21,"Button type"),r.Nb(),r.Ob(22,"select",7),r.Wb("ngModelChange",(function(e){return n.config.btnType=e})),r.Ob(23,"option",8),r.rc(24,"Button"),r.Nb(),r.Ob(25,"option",9),r.rc(26,"Submit"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(27,"div",3),r.Ob(28,"div",4),r.Ob(29,"label"),r.rc(30,"Speed"),r.Nb(),r.Ob(31,"select",7),r.Wb("ngModelChange",(function(e){return n.config.speed=e})),r.Ob(32,"option",10),r.rc(33,"Medium"),r.Nb(),r.Ob(34,"option",11),r.rc(35,"Slow"),r.Nb(),r.Ob(36,"option",12),r.rc(37,"Fast"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(38,"ngbit-dots-loading-button",13),r.Wb("click",(function(){return n.config.loader=!n.config.loader})),r.rc(39," Click to load "),r.Nb(),r.Ob(40,"pre",14),r.Mb(41,"code",15),r.Nb(),r.Ob(42,"p",16),r.rc(43,"There are 10 variants of the button corresponding with the 10 different Ngbits indicators. All loading indicators are in pure inlined SVG. You do not need any icon or font libraries. "),r.Nb(),r.Ob(44,"ngbit-notch-loading-button",17),r.Wb("click",(function(){return n.notchLoader=!n.notchLoader})),r.rc(45," Notch loading "),r.Nb(),r.Ob(46,"ngbit-eclipse-loading-button",17),r.Wb("click",(function(){return n.eclipseLoader=!n.eclipseLoader})),r.rc(47," Eclipse loading "),r.Nb(),r.Ob(48,"ngbit-bottle-loading-button",17),r.Wb("click",(function(){return n.bottleLoader=!n.bottleLoader})),r.rc(49," Bottle loading "),r.Nb(),r.Ob(50,"ngbit-arrow-loading-button",17),r.Wb("click",(function(){return n.arrowLoader=!n.arrowLoader})),r.rc(51," Arrow loading "),r.Nb(),r.Ob(52,"ngbit-pulse-loading-button",17),r.Wb("click",(function(){return n.pulseLoader=!n.pulseLoader})),r.rc(53," Pulse loading "),r.Nb(),r.Ob(54,"ngbit-circle-loading-button",17),r.Wb("click",(function(){return n.circleLoader=!n.circleLoader})),r.rc(55," Circle loading "),r.Nb(),r.Ob(56,"ngbit-ripple-loading-button",17),r.Wb("click",(function(){return n.rippleLoader=!n.rippleLoader})),r.rc(57," Ripple loading "),r.Nb(),r.Ob(58,"ngbit-cube-loading-button",17),r.Wb("click",(function(){return n.cubeLoader=!n.cubeLoader})),r.rc(59," Cube loading "),r.Nb(),r.Ob(60,"ngbit-grid-loading-button",17),r.Wb("click",(function(){return n.gridLoader=!n.gridLoader})),r.rc(61," Load with grid"),r.Nb(),r.Ob(62,"pre",14),r.Mb(63,"code",15),r.Nb(),r.Nb(),r.Ob(64,"section",1),r.Ob(65,"h3"),r.rc(66,"API"),r.Nb(),r.Ob(67,"h5"),r.rc(68,"NgbitLoadingButtonModule "),r.Ob(69,"span",18),r.rc(70,"Module"),r.Nb(),r.Nb(),r.Mb(71,"hr"),r.Ob(72,"h5"),r.rc(73,"Ngbit[variant]LoadingButton "),r.Ob(74,"span",19),r.rc(75,"Component"),r.Nb(),r.Nb(),r.Ob(76,"p"),r.rc(77,"Replace [variant] with any of the 10: 'Dots', 'Notch', 'Eclipse', 'Bottle', 'Arrow', 'Pulse', 'Circle', 'Ripple', 'Cube' or 'Grid'."),r.Nb(),r.Mb(78,"app-api-table",20),r.Nb()),2&e&&(r.zb(12),r.ec("ngModel",n.config.loader),r.zb(5),r.ec("ngModel",n.config.btnClass),r.zb(5),r.ec("ngModel",n.config.btnType),r.zb(9),r.ec("ngModel",n.config.speed),r.zb(7),r.ec("loader",n.config.loader)("btnClass",n.config.btnClass)("btnType",n.config.btnType)("speed",n.config.speed),r.zb(3),r.ec("highlight",n.example)("languages",r.fc(22,O)),r.zb(3),r.ec("loader",n.notchLoader),r.zb(2),r.ec("loader",n.eclipseLoader),r.zb(2),r.ec("loader",n.bottleLoader),r.zb(2),r.ec("loader",n.arrowLoader),r.zb(2),r.ec("loader",n.pulseLoader),r.zb(2),r.ec("loader",n.circleLoader),r.zb(2),r.ec("loader",n.rippleLoader),r.zb(2),r.ec("loader",n.cubeLoader),r.zb(2),r.ec("loader",n.gridLoader),r.zb(3),r.ec("highlight",n.example2)("languages",r.fc(23,O)),r.zb(15),r.ec("tableValues",n.api))},directives:[a.a,a.c,a.d,a.h,a.e,a.i,b.a,l.a,d.a,c.a,g.a,u.a,s.a,p.a,h.a,L.a,f.a,N.a],styles:[""]}),e})()}];let w=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(n){return new(n||e)},imports:[[i.d.forChild(m)],i.d]}),e})();var C=o("bQSs"),k=o("PCNd");o.d(n,"LoadingButtonModule",(function(){return y}));let y=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(n){return new(n||e)},imports:[[t.b,k.a,a.b,l.b,C.h,w]]}),e})()}}]);