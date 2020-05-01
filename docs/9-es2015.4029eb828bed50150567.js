(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{FAxj:function(e,n,i){"use strict";i.r(n);var t=i("2kYt"),o=i("sEIs"),r=i("EM62"),s=i("mcHH"),p=i("uHuC"),l=i("qlS5");function c(e,n){1&e&&(r.Pb(0,"p",8),r.sc(1,"Drop files here"),r.Ob())}function b(e,n){if(1&e&&(r.Pb(0,"li"),r.sc(1),r.Ob()),2&e){const e=n.$implicit;r.zb(1),r.tc(e.value.name)}}function d(e,n){if(1&e){const e=r.Qb();r.Pb(0,"div",8),r.Pb(1,"p"),r.sc(2,"You dropped the following files:"),r.Ob(),r.Pb(3,"ul",9),r.qc(4,b,2,1,"li",10),r.bc(5,"keyvalue"),r.Ob(),r.Pb(6,"button",11),r.Xb("click",(function(){return r.mc(e),r.ac().droppedFiles=null})),r.sc(7,"Clear"),r.Ob(),r.Ob()}if(2&e){const e=r.ac();r.zb(4),r.fc("ngForOf",r.cc(5,1,e.droppedFiles))}}const a=function(e,n){return{"bg-secondary":e,"bg-primary":n}},u=function(){return["html"]},g=[{path:"",component:(()=>{class e{constructor(){this.isHovering=!1,this.api=[["Output","Description"],["hovered: boolean","Emits true when a file is dragged over the host element."],["dropped: FileList","Emits an HTML FileList when files are dropped on the host element."]]}ngOnInit(){}get example(){return'\n    <div\n      ngbitDropzone\n      (hovered)="isHovering = $event"\n      [ngClass]="{ \'bg-secondary\': !isHovering, \'bg-primary\': isHovering }"\n      (dropped)="droppedFiles = $event">\n      <p *ngIf="!droppedFiles">Drop a file here</p>\n      <div *ngIf="droppedFiles">\n          <p>You dropped the following files:</p>\n          <ul>\n              <li *ngFor="let file of droppedFiles | keyvalue">{{ file.value.name }}</li>\n          </ul>\n      </div>\n    </div>\n    '}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Fb({type:e,selectors:[["app-dropzone"]],decls:25,vars:10,consts:[[1,"py-3"],["libNgbitDropzone","",1,"wrapper","d-flex","justify-content-center","align-items-center",3,"ngClass","hovered","dropped"],["class","text-light",4,"ngIf"],[1,"my-3"],[3,"highlight","languages"],[1,"badge","badge-dark"],[1,"badge","badge-info"],[3,"tableValues"],[1,"text-light"],[1,"list-unstyled"],[4,"ngFor","ngForOf"],[1,"btn","btn-sm","btn-outline-light","my-2",3,"click"]],template:function(e,n){1&e&&(r.Pb(0,"h1"),r.sc(1,"Dropzone"),r.Ob(),r.Pb(2,"p"),r.sc(3,"A directive to drag & drop files. It emits a dropped event everytime the user drags and drops a file onto the host element. This is useful to handle uploads."),r.Ob(),r.Pb(4,"section",0),r.Pb(5,"h3"),r.sc(6,"Example"),r.Ob(),r.Pb(7,"div",1),r.Xb("hovered",(function(e){return n.isHovering=e}))("dropped",(function(e){return n.droppedFiles=e})),r.qc(8,c,2,0,"p",2),r.qc(9,d,8,3,"div",2),r.Ob(),r.Pb(10,"pre",3),r.Mb(11,"code",4),r.Ob(),r.Ob(),r.Pb(12,"section",0),r.Pb(13,"h3"),r.sc(14,"API"),r.Ob(),r.Pb(15,"h5"),r.sc(16,"NgbitDropzoneModule "),r.Pb(17,"span",5),r.sc(18,"Module"),r.Ob(),r.Ob(),r.Mb(19,"hr"),r.Pb(20,"h5"),r.sc(21,"NgbitDropzoneDirective "),r.Pb(22,"span",6),r.sc(23,"Directive"),r.Ob(),r.Ob(),r.Mb(24,"app-api-table",7),r.Ob()),2&e&&(r.zb(7),r.fc("ngClass",r.ic(6,a,!n.isHovering,n.isHovering)),r.zb(1),r.fc("ngIf",!n.droppedFiles),r.zb(1),r.fc("ngIf",n.droppedFiles),r.zb(2),r.fc("highlight",n.example)("languages",r.gc(9,u)),r.zb(13),r.fc("tableValues",n.api))},directives:[s.a,t.i,t.k,p.a,l.a,t.j],pipes:[t.e],styles:[".wrapper[_ngcontent-%COMP%]{min-height:240px}"]}),e})()}];let f=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(n){return new(n||e)},imports:[[o.d.forChild(g)],o.d]}),e})();var h=i("bQSs"),v=i("PCNd");i.d(n,"DropzoneModule",(function(){return m}));let m=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(n){return new(n||e)},imports:[[t.b,v.a,p.b,h.a,f]]}),e})()}}]);