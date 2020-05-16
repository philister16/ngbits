function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"1sRm":function(e,t,n){"use strict";n.r(t);var i,l=n("2kYt"),c=n("sEIs"),r=n("EM62"),o=n("nIj0"),a=["*"],s=((i=function(){function e(){_classCallCheck(this,e),this.multiple=!1,this.files=new r.n}return _createClass(e,[{key:"onChoose",value:function(e){this.files.emit(e.target.files)}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=r.Fb({type:i,selectors:[["ngbit-pretty-file-input"]],inputs:{multiple:"multiple"},outputs:{files:"files"},ngContentSelectors:a,decls:4,vars:1,consts:[[1,"wrapper",3,"click"],["type","file","hidden","",3,"multiple","change"],["fileInput",""]],template:function(e,t){if(1&e){var n=r.Pb();r.dc(),r.Ob(0,"div",0),r.Wb("click",(function(){return r.lc(n),r.kc(3).click()})),r.cc(1),r.Ob(2,"input",1,2),r.Wb("change",(function(e){return t.onChoose(e)})),r.Nb(),r.Nb()}2&e&&(r.zb(2),r.ec("multiple",t.multiple))},styles:[".wrapper[_ngcontent-%COMP%] {\n            display: inline-block;\n        }"]}),i),u=n("uHuC"),b=n("qlS5");function p(e,t){1&e&&(r.Ob(0,"p"),r.rc(1,"You have not yet chosen any files."),r.Nb())}function f(e,t){if(1&e&&(r.Ob(0,"li"),r.rc(1),r.Nb()),2&e){var n=t.$implicit;r.zb(1),r.sc(n.value.name)}}function h(e,t){if(1&e){var n=r.Pb();r.Ob(0,"p"),r.rc(1),r.Nb(),r.Ob(2,"ul",17),r.pc(3,f,2,1,"li",18),r.ac(4,"keyvalue"),r.Nb(),r.Ob(5,"button",19),r.Wb("click",(function(){return r.lc(n),r.Zb().files=null})),r.rc(6,"Clear"),r.Nb()}if(2&e){var i=r.Zb();r.zb(1),r.tc("You have chosen the following file",(null==i.files?null:i.files.length)>1?"s":"",":"),r.zb(2),r.ec("ngForOf",r.bc(4,2,i.files))}}var m,g,d=function(){return["html"]},y=[{path:"",component:(m=function(){function e(){_classCallCheck(this,e),this.multiple=!0,this.apiA=[["Input","Default","Description"],["multiple: boolean","true","If true lets user select more than 1 file at the same time."]],this.apiB=[["Output","Description"],["files: FileList","Fires an event containing the list of the selected files."]]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onFiles",value:function(e){this.files=e}},{key:"example",get:function(){return'\n    <ngbit-pretty-file-input [multiple]="'.concat(this.multiple,'" (files)="renderFileList($event)">\n      <button class="btn btn-primary">Choose file</button>\n    </ngbit-pretty-file-input>\n    ')}},{key:"example2",get:function(){return'\n    <p>\n      You can place any markup to the component. Here for example just a simple link:\n      <ngbit-pretty-file-input>\n          <a class="link" href="#">Chose a file</a>\n      </ngbit-pretty-file-input>\n    </p>\n    '}}]),e}(),m.\u0275fac=function(e){return new(e||m)},m.\u0275cmp=r.Fb({type:m,selectors:[["app-pretty-file-input"]],decls:47,vars:14,consts:[[1,"lead"],[1,"py-3"],[1,"row"],[1,"col-md-3"],[1,"form-group"],[1,"custom-select",3,"ngModel","ngModelChange"],[3,"ngValue"],[3,"multiple","files"],[1,"btn","btn-primary"],[1,"my-3"],[4,"ngIf","ngIfElse"],["list",""],[3,"highlight","languages"],[1,"link"],[1,"badge","badge-dark"],[1,"badge","badge-info"],[3,"tableValues"],[1,"list"],[4,"ngFor","ngForOf"],[1,"btn","btn-sm","btn-outline-secondary",3,"click"]],template:function(e,t){if(1&e&&(r.Ob(0,"h1"),r.rc(1,"Pretty file input"),r.Nb(),r.Ob(2,"p",0),r.rc(3,"A component that you lets you style the file input element easily. It makes use of Angular's templating and does not rely on CSS hacks. The component fires a custom 'files' event that returns an HTML FileList whenever files are selected."),r.Nb(),r.Ob(4,"section",1),r.Ob(5,"h3"),r.rc(6,"Example"),r.Nb(),r.Ob(7,"div",2),r.Ob(8,"div",3),r.Ob(9,"div",4),r.Ob(10,"label"),r.rc(11,"Multiple"),r.Nb(),r.Ob(12,"select",5),r.Wb("ngModelChange",(function(e){return t.multiple=e})),r.Ob(13,"option",6),r.rc(14,"True"),r.Nb(),r.Ob(15,"option",6),r.rc(16,"False"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(17,"ngbit-pretty-file-input",7),r.Wb("files",(function(e){return t.onFiles(e)})),r.Ob(18,"button",8),r.rc(19,"Choose file"),r.Nb(),r.Nb(),r.Ob(20,"div",9),r.pc(21,p,2,0,"p",10),r.pc(22,h,7,4,"ng-template",null,11,r.qc),r.Nb(),r.Ob(24,"pre",9),r.Mb(25,"code",12),r.Nb(),r.Ob(26,"p"),r.rc(27,"You can place any markup to the component. Here for example just a simple link: "),r.Ob(28,"ngbit-pretty-file-input"),r.Ob(29,"span",13),r.rc(30,"Chose a file"),r.Nb(),r.Nb(),r.Nb(),r.Ob(31,"pre",9),r.Mb(32,"code",12),r.Nb(),r.Nb(),r.Ob(33,"section",1),r.Ob(34,"h3"),r.rc(35,"API"),r.Nb(),r.Ob(36,"h5"),r.rc(37,"NgbitPrettyFileInpuModule "),r.Ob(38,"span",14),r.rc(39,"Module"),r.Nb(),r.Nb(),r.Mb(40,"hr"),r.Ob(41,"h5"),r.rc(42,"NgbitPrettyFileInputComponent "),r.Ob(43,"span",15),r.rc(44,"Component"),r.Nb(),r.Nb(),r.Mb(45,"app-api-table",16),r.Mb(46,"app-api-table",16),r.Nb()),2&e){var n=r.kc(23);r.zb(12),r.ec("ngModel",t.multiple),r.zb(1),r.ec("ngValue",!0),r.zb(2),r.ec("ngValue",!1),r.zb(2),r.ec("multiple",t.multiple),r.zb(4),r.ec("ngIf",!t.files)("ngIfElse",n),r.zb(4),r.ec("highlight",t.example)("languages",r.fc(12,d)),r.zb(7),r.ec("highlight",t.example2)("languages",r.fc(13,d)),r.zb(13),r.ec("tableValues",t.apiA),r.zb(1),r.ec("tableValues",t.apiB)}},directives:[o.h,o.c,o.d,o.e,o.i,s,l.k,u.a,b.a,l.j],pipes:[l.e],styles:[".link[_ngcontent-%COMP%]{color:var(--primary);cursor:pointer}.link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),m)}],O=((g=function e(){_classCallCheck(this,e)}).\u0275mod=r.Jb({type:g}),g.\u0275inj=r.Ib({factory:function(e){return new(e||g)},imports:[[c.d.forChild(y)],c.d]}),g),k=n("bQSs"),N=n("PCNd");n.d(t,"PrettyFileInputModule",(function(){return v}));var C,v=((C=function e(){_classCallCheck(this,e)}).\u0275mod=r.Jb({type:C}),C.\u0275inj=r.Ib({factory:function(e){return new(e||C)},imports:[[l.b,N.a,o.b,u.b,k.i,O]]}),C)}}]);