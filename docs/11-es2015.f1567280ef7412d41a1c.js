(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{hOw7:function(e,s,n){"use strict";n.r(s);var a=n("2kYt"),t=n("nIj0"),i=n("sEIs"),o=n("EM62"),l=n("bQSs"),c=n("uHuC"),r=n("qlS5");const b=function(){return["typescript"]},g=[{path:"",component:(()=>{class e{constructor(e){this.ngbitFlash=e,this.flashConfig={vertical:"top",horizontal:"right",delay:3e3,offset:"32px",className:"ngbit-flash-default"},this.serviceAPI=[["Method","Parameters","Description"],["custom()","message: string, config?: NgbitFlashConfig","Launches a flash message."],["success()","message: string, config?: NgbitFlashConfig","Launches a contextually styled success flash message."],["danger()","message: string, config?: NgbitFlashConfig","Launches a contextually styled error flash message."],["warning()","message: string, config?: NgbitFlashConfig","Launches a contextually styled warning flash message."],["info()","message: string, config?: NgbitFlashConfig","Launches a contextually styled info flash message."]],this.configAPI=[["Property","Default","Description"],['vertical: "top" | "bottom"',"top","Vertical position of flash."],['horizontal: "left", "right", "center"',"right","Horizontal position of flash."],["delay: number",3e3,"How long until the flash disappears in ms."],["offset: string","32px","The margin from edge of viewport."],["className: string","ngbit-default-flash","CSS classes to style the flash. The default value is different depending on which of the 5 methods is used."]]}launchFlash(e){switch(e){case"custom":this.ngbitFlash.custom("Some message styled by custom css classes.",this.flashConfig);break;case"success":this.ngbitFlash.success("A success message");break;case"danger":this.ngbitFlash.danger("An error message.");break;case"warning":this.ngbitFlash.warning("A warning message");break;case"info":this.ngbitFlash.info("A simple info message.")}}get flashExample1(){return`\n    import { NgbitFlashService, NgbitFlashConfig } from 'ngbits';\n\n    constructor(private ngbitFlash: NgbitFlashService) {}\n\n    const config: NgbitFlashConfig = {\n    vertical: '${this.flashConfig.vertical}',\n    horizontal: '${this.flashConfig.horizontal}',\n    delay: ${this.flashConfig.delay},\n    offset: '${this.flashConfig.offset}',\n    className: '${this.flashConfig.className}'\n    };\n\n    this.ngbitFlash.custom('Some message styled by custom css classes.', config);\n    `}get flashExample2(){return"\n    this.ngbitFlash.success('A success message');\n    this.ngbitFlash.danger('An error message.');\n    this.ngbitFlash.warning('A warning message');\n    this.ngbitFlash.info('A simple info message.');\n    "}}return e.\u0275fac=function(s){return new(s||e)(o.Lb(l.d))},e.\u0275cmp=o.Fb({type:e,selectors:[["app-flash"]],decls:82,vars:13,consts:[[1,"lead"],[1,"alert","alert-info"],[1,"py-3"],[1,"row"],[1,"col-md-2"],[1,"form-group"],[1,"form-control",3,"ngModel","ngModelChange"],["value","top"],["value","bottom"],["value","left"],["value","center"],["value","right"],["type","number",1,"form-control",3,"ngModel","ngModelChange"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-md-4"],[1,"btn","btn-primary","mr-2",3,"click"],[1,"my-3"],[3,"highlight","languages"],[1,"btn","btn-success","mr-2",3,"click"],[1,"btn","btn-danger","mr-2",3,"click"],[1,"btn","btn-warning","mr-2",3,"click"],[1,"btn","btn-info","mr-2",3,"click"],[1,"badge","badge-dark"],[1,"badge","badge-primary"],[3,"tableValues"],[1,"badge","badge-secondary"]],template:function(e,s){1&e&&(o.Ob(0,"h1"),o.rc(1,"Flash"),o.Nb(),o.Ob(2,"p",0),o.rc(3,"This bit displays flash messages (also called snackbars or toasts) from only a service. There is no need to place a component in your views.\n"),o.Nb(),o.Ob(4,"div",1),o.rc(5,"You need to import "),o.Ob(6,"code"),o.rc(7,"BrowserAnimationsModule"),o.Nb(),o.rc(8," in your root module!"),o.Nb(),o.Ob(9,"section",2),o.Ob(10,"h3"),o.rc(11,"Examples"),o.Nb(),o.Ob(12,"div",3),o.Ob(13,"div",4),o.Ob(14,"div",5),o.Ob(15,"label"),o.rc(16,"Vertical"),o.Nb(),o.Ob(17,"select",6),o.Wb("ngModelChange",(function(e){return s.flashConfig.vertical=e})),o.Ob(18,"option",7),o.rc(19,"Top"),o.Nb(),o.Ob(20,"option",8),o.rc(21,"Bottom"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(22,"div",4),o.Ob(23,"div",5),o.Ob(24,"label"),o.rc(25,"Horizontal"),o.Nb(),o.Ob(26,"select",6),o.Wb("ngModelChange",(function(e){return s.flashConfig.horizontal=e})),o.Ob(27,"option",9),o.rc(28,"Left"),o.Nb(),o.Ob(29,"option",10),o.rc(30,"Center"),o.Nb(),o.Ob(31,"option",11),o.rc(32,"Right"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(33,"div",4),o.Ob(34,"div",5),o.Ob(35,"label"),o.rc(36,"Delay"),o.Nb(),o.Ob(37,"input",12),o.Wb("ngModelChange",(function(e){return s.flashConfig.delay=e})),o.Nb(),o.Nb(),o.Nb(),o.Ob(38,"div",4),o.Ob(39,"div",5),o.Ob(40,"label"),o.rc(41,"Offset"),o.Nb(),o.Ob(42,"input",13),o.Wb("ngModelChange",(function(e){return s.flashConfig.offset=e})),o.Nb(),o.Nb(),o.Nb(),o.Ob(43,"div",14),o.Ob(44,"div",5),o.Ob(45,"label"),o.rc(46,"CSS classes"),o.Nb(),o.Ob(47,"input",13),o.Wb("ngModelChange",(function(e){return s.flashConfig.className=e})),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(48,"button",15),o.Wb("click",(function(){return s.launchFlash("custom")})),o.rc(49,"Launch flash message"),o.Nb(),o.Ob(50,"pre",16),o.Mb(51,"code",17),o.Nb(),o.Ob(52,"p"),o.rc(53,"For convenience the service also provides contextual methods which by default are styled with bootstrap's alert classes. The css classes can be overriden just like with custom flash messages, however."),o.Nb(),o.Ob(54,"button",18),o.Wb("click",(function(){return s.launchFlash("success")})),o.rc(55,"Success"),o.Nb(),o.Ob(56,"button",19),o.Wb("click",(function(){return s.launchFlash("danger")})),o.rc(57,"Error"),o.Nb(),o.Ob(58,"button",20),o.Wb("click",(function(){return s.launchFlash("warning")})),o.rc(59,"Warning"),o.Nb(),o.Ob(60,"button",21),o.Wb("click",(function(){return s.launchFlash("info")})),o.rc(61,"Info"),o.Nb(),o.Ob(62,"pre",16),o.Mb(63,"code",17),o.Nb(),o.Nb(),o.Ob(64,"section",2),o.Ob(65,"h3"),o.rc(66,"API"),o.Nb(),o.Ob(67,"h5"),o.rc(68,"NgbitFlashModule "),o.Ob(69,"span",22),o.rc(70,"Module"),o.Nb(),o.Nb(),o.Mb(71,"hr"),o.Ob(72,"h5"),o.rc(73,"NgbitFlashService "),o.Ob(74,"span",23),o.rc(75,"Service"),o.Nb(),o.Nb(),o.Mb(76,"app-api-table",24),o.Ob(77,"h5"),o.rc(78,"NgbitFlashConfig "),o.Ob(79,"span",25),o.rc(80,"Interface"),o.Nb(),o.Nb(),o.Mb(81,"app-api-table",24),o.Nb()),2&e&&(o.zb(17),o.ec("ngModel",s.flashConfig.vertical),o.zb(9),o.ec("ngModel",s.flashConfig.horizontal),o.zb(11),o.ec("ngModel",s.flashConfig.delay),o.zb(5),o.ec("ngModel",s.flashConfig.offset),o.zb(5),o.ec("ngModel",s.flashConfig.className),o.zb(4),o.ec("highlight",s.flashExample1)("languages",o.fc(11,b)),o.zb(12),o.ec("highlight",s.flashExample2)("languages",o.fc(12,b)),o.zb(13),o.ec("tableValues",s.serviceAPI),o.zb(5),o.ec("tableValues",s.configAPI))},directives:[t.h,t.c,t.d,t.e,t.i,t.f,t.a,c.a,r.a],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(s){return new(s||e)},imports:[[i.d.forChild(g)],i.d]}),e})();var f=n("PCNd");n.d(s,"FlashModule",(function(){return u}));let u=(()=>{class e{}return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(s){return new(s||e)},imports:[[a.b,f.a,t.b,l.c,c.b,h]]}),e})()}}]);