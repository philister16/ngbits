function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,o){return n&&_defineProperties(t.prototype,n),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{VOzh:function(t,n,o){"use strict";o.r(n);var i,e,b=o("2kYt"),c=o("sEIs"),l=o("EM62"),r=o("nIj0"),a=o("48mq"),s=o("uHuC"),u=o("pdvW"),d=o("S35a"),p=o("Dox6"),g=o("OHkR"),f=o("Ydlj"),h=o("2wQR"),P=o("qlS5"),O=function(){return["html"]},m=[{path:"",component:(i=function(){function t(){_classCallCheck(this,t),this.notch=!1,this.eclipse=!1,this.bottle=!1,this.arrow=!1,this.pulse=!1,this.disk=!1,this.circle=!1,this.config={loader:!1,position:"start",btnClass:"btn btn-primary",btnType:"button",speed:"medium"},this.api=[["Input","Default","Description"],["loader: boolean","false","Shows the loading indicator when true."],['position: "start | "end',"start","Whether to show the loading indicator before or after the button text."],['btnType: "button | "submit"',"button","The type of the button."],['speed: "fast" | "medium" | "slow"',"medium","Speed of the animation of the loading indicator."],["btnClass: string","","One or more css classes to style the button."]]}return _createClass(t,[{key:"example",get:function(){return'\n    <ngbit-notch-indicator-button\n      loader="'.concat(this.config.loader,'"\n      position="').concat(this.config.position,'"\n      btnType="').concat(this.config.btnType,'"\n      speed="').concat(this.config.speed,'"\n      btnClass="').concat(this.config.btnClass,'"\n      (click)="handelClick()">\n      Notch indicator button\n    </ngbit-notch-indicator-button>\n    ')}},{key:"example2",get:function(){return'\n    <ngbit-eclipse-indicator-button [loader]="notch" btnClass="btn btn-primary mr-2" (click)="notch = !notch">\n        Notch button\n    </ngbit-eclipse-indicator-button>\n\n    <ngbit-eclipse-indicator-button [loader]="eclipse" btnClass="btn btn-primary mr-2"\n        (click)="eclipse = !eclipse">Eclipse button\n    </ngbit-eclipse-indicator-button>\n\n    <ngbit-bottle-indicator-button [loader]="bottle" btnClass="btn btn-primary mr-2" (click)="bottle = !bottle">\n        Bottle button\n    </ngbit-bottle-indicator-button>\n\n    <ngbit-arrow-indicator-button [loader]="arrow" btnClass="btn btn-primary mr-2" (click)="arrow = !arrow">\n        Arrow button\n    </ngbit-arrow-indicator-button>\n\n    <ngbit-pulse-indicator-button [loader]="pulse" btnClass="btn btn-primary mr-2" (click)="pulse = !pulse">\n        Pulse button\n    </ngbit-pulse-indicator-button>\n\n    <ngbit-disk-indicator-button [loader]="disk" btnClass="btn btn-primary mr-2" (click)="disk = !disk">\n        Disk button\n    </ngbit-disk-indicator-button>\n\n    <ngbit-circle-indicator-button [loader]="circle" btnClass="btn btn-primary mr-2" (click)="circle = !circle">\n        Circle button\n    </ngbit-circle-indicator-button>\n    '}}]),t}(),i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=l.Fb({type:i,selectors:[["app-indicator-button"]],decls:97,vars:23,consts:[[1,"py-3"],[1,"row"],[1,"col-md-2"],[1,"form-group"],["type","text","readonly","",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-control",3,"ngModel","ngModelChange"],["value","start"],["value","end"],["value","button"],["value","submit"],["value","slow"],["value","medium"],["value","fast"],[1,"col-md-4"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[3,"position","speed","loader","btnClass","btnType","click"],[1,"my-3"],[3,"highlight","languages"],["btnClass","btn btn-primary mr-2 mb-2",3,"loader","click"],[1,"badge","badge-dark"],[1,"badge","badge-info"],[3,"tableValues"]],template:function(t,n){1&t&&(l.Pb(0,"h1"),l.sc(1,"Indicator button"),l.Ob(),l.Pb(2,"p"),l.sc(3," Buttons that can toggle an indicator signalling to the user that something is happening.\n"),l.Ob(),l.Pb(4,"section",0),l.Pb(5,"h3"),l.sc(6,"Examples"),l.Ob(),l.Pb(7,"div",1),l.Pb(8,"div",2),l.Pb(9,"div",3),l.Pb(10,"label"),l.sc(11,"Loader"),l.Ob(),l.Pb(12,"input",4),l.Xb("ngModelChange",(function(t){return n.config.loader=t})),l.Ob(),l.Ob(),l.Ob(),l.Pb(13,"div",2),l.Pb(14,"div",3),l.Pb(15,"label"),l.sc(16,"Position"),l.Ob(),l.Pb(17,"select",5),l.Xb("ngModelChange",(function(t){return n.config.position=t})),l.Pb(18,"option",6),l.sc(19,"Start"),l.Ob(),l.Pb(20,"option",7),l.sc(21,"End"),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Pb(22,"div",2),l.Pb(23,"div",3),l.Pb(24,"label"),l.sc(25,"Button type"),l.Ob(),l.Pb(26,"select",5),l.Xb("ngModelChange",(function(t){return n.config.btnType=t})),l.Pb(27,"option",8),l.sc(28,"Button"),l.Ob(),l.Pb(29,"option",9),l.sc(30,"Submit"),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Pb(31,"div",2),l.Pb(32,"div",3),l.Pb(33,"label"),l.sc(34,"Speed"),l.Ob(),l.Pb(35,"select",5),l.Xb("ngModelChange",(function(t){return n.config.speed=t})),l.Pb(36,"option",10),l.sc(37,"Slow"),l.Ob(),l.Pb(38,"option",11),l.sc(39,"Medium"),l.Ob(),l.Pb(40,"option",12),l.sc(41,"Fast"),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Pb(42,"div",13),l.Pb(43,"div",3),l.Pb(44,"label"),l.sc(45,"Button classes"),l.Ob(),l.Pb(46,"input",14),l.Xb("ngModelChange",(function(t){return n.config.btnClass=t})),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Pb(47,"lib-ngbit-notch-indicator-button",15),l.Xb("click",(function(){return n.config.loader=!n.config.loader})),l.sc(48," Click to show indicator "),l.Ob(),l.Pb(49,"pre",16),l.Mb(50,"code",17),l.Ob(),l.Pb(51,"p"),l.sc(52,"There are 7 different variants of the indicator button you can choose from:"),l.Ob(),l.Pb(53,"ul"),l.Pb(54,"li"),l.sc(55,"Notch"),l.Ob(),l.Pb(56,"li"),l.sc(57,"Eclipse"),l.Ob(),l.Pb(58,"li"),l.sc(59,"Bottle"),l.Ob(),l.Pb(60,"li"),l.sc(61,"Arrow"),l.Ob(),l.Pb(62,"li"),l.sc(63,"Pulse"),l.Ob(),l.Pb(64,"li"),l.sc(65,"Disk"),l.Ob(),l.Pb(66,"li"),l.sc(67,"Circle"),l.Ob(),l.Ob(),l.Pb(68,"lib-ngbit-eclipse-indicator-button",18),l.Xb("click",(function(){return n.eclipse=!n.eclipse})),l.sc(69," Eclipse button "),l.Ob(),l.Pb(70,"lib-ngbit-bottle-indicator-button",18),l.Xb("click",(function(){return n.bottle=!n.bottle})),l.sc(71," Bottle button "),l.Ob(),l.Pb(72,"lib-ngbit-arrow-indicator-button",18),l.Xb("click",(function(){return n.arrow=!n.arrow})),l.sc(73," Arrow button "),l.Ob(),l.Pb(74,"lib-ngbit-pulse-indicator-button",18),l.Xb("click",(function(){return n.pulse=!n.pulse})),l.sc(75," Pulse button "),l.Ob(),l.Pb(76,"lib-ngbit-disk-indicator-button",18),l.Xb("click",(function(){return n.disk=!n.disk})),l.sc(77," Disk button "),l.Ob(),l.Pb(78,"lib-ngbit-circle-indicator-button",18),l.Xb("click",(function(){return n.circle=!n.circle})),l.sc(79," Circle button "),l.Ob(),l.Pb(80,"pre",16),l.Mb(81,"code",17),l.Ob(),l.Ob(),l.Pb(82,"section",0),l.Pb(83,"h3"),l.sc(84,"API"),l.Ob(),l.Pb(85,"h5"),l.sc(86,"NgbitIndicatorButtonModule "),l.Pb(87,"span",19),l.sc(88,"Module"),l.Ob(),l.Ob(),l.Mb(89,"hr"),l.Pb(90,"h5"),l.sc(91,"Ngbit[variant]IndicatorButton "),l.Pb(92,"span",20),l.sc(93,"Component"),l.Ob(),l.Ob(),l.Pb(94,"p"),l.sc(95,"Replace [variant] with any of the 7: 'Notch', 'Eclipse', 'Bottle', 'Arrow', 'Pulse', 'Disk' or 'Grid'."),l.Ob(),l.Mb(96,"app-api-table",21),l.Ob()),2&t&&(l.zb(12),l.fc("ngModel",n.config.loader),l.zb(5),l.fc("ngModel",n.config.position),l.zb(9),l.fc("ngModel",n.config.btnType),l.zb(9),l.fc("ngModel",n.config.speed),l.zb(11),l.fc("ngModel",n.config.btnClass),l.zb(1),l.fc("position",n.config.position)("speed",n.config.speed)("loader",n.config.loader)("btnClass",n.config.btnClass)("btnType",n.config.btnType),l.zb(3),l.fc("highlight",n.example)("languages",l.gc(21,O)),l.zb(18),l.fc("loader",n.eclipse),l.zb(2),l.fc("loader",n.bottle),l.zb(2),l.fc("loader",n.arrow),l.zb(2),l.fc("loader",n.pulse),l.zb(2),l.fc("loader",n.disk),l.zb(2),l.fc("loader",n.circle),l.zb(3),l.fc("highlight",n.example2)("languages",l.gc(22,O)),l.zb(15),l.fc("tableValues",n.api))},directives:[r.a,r.c,r.d,r.g,r.e,r.h,a.a,s.a,u.a,d.a,p.a,g.a,f.a,h.a,P.a],styles:[""]}),i)}],k=((e=function t(){_classCallCheck(this,t)}).\u0275mod=l.Jb({type:e}),e.\u0275inj=l.Ib({factory:function(t){return new(t||e)},imports:[[c.d.forChild(m)],c.d]}),e),C=o("bQSs"),y=o("PCNd");o.d(n,"IndicatorButtonModule",(function(){return v}));var w,v=((w=function t(){_classCallCheck(this,t)}).\u0275mod=l.Jb({type:w}),w.\u0275inj=l.Ib({factory:function(t){return new(t||w)},imports:[[b.b,y.a,r.b,s.b,C.d,k]]}),w)}}]);