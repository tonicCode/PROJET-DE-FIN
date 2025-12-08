import { Directive,HostListener,Input,ElementRef,OnInit, Attribute } from '@angular/core';
import { ServiceEcriture } from '../services/service-ecriture';



@Directive({
 selector:'[menuTag]',
exportAs:'menuTag'
})
export class MenuDerouleDirect {

  exoId : number=0;

 newIsHover:boolean =false;
 newIsHover2:boolean=false;
  _injectService : ServiceEcriture;

 nginit() {
  // this.injecterService.getQuery().subscribe((exoId) => {
  //     this.exoId = exoId;
  //     console.log('exoId récupéré :', this.exoId);
  //   });


 }





  constructor(private el : ElementRef,private injecterService : ServiceEcriture) { 

    this._injectService=injecterService;
   

}

// //ngOnInit(): void {
 @HostListener('mouseenter',['$event']) onmouseEnter(ev : Event){


this.newIsHover=this._injectService.setIsHover();
this.el.nativeElement.style.backgroundColor="white";


// ev.preventDefault();
// ev.stopPropagation();

 }


@HostListener('mouseleave',['$event']) onleave(ev : Event){

 this.newIsHover=false;
 this.el.nativeElement.style.backgroundColor="";


}
 



}




