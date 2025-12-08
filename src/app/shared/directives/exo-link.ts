import { Directive, HostListener,ElementRef,Input} from '@angular/core';
import { Router } from '@angular/router';




@Directive({
  selector: '[appExoLink]'
  //exportAs:'appExoLink'
})
export class ExoLink {


//isHoverLink : boolean=false;
 isLinkExoClicked =false;
//  @Input('appExoLink') navig! : string;



  constructor(private el: ElementRef,private router : Router) { }


@HostListener('mouseenter') mouseEnter(){

// this.el.nativeElement.style.color="green";


}

@HostListener('mouseleave') mouseleave(){

  // this.el.nativeElement.style.color="blue";


}









// @HostListener('click',['$event']) onClick(event :MouseEvent){

// //this.isHoverLink=true;
// event.preventDefault();


// this.router.navigate([this.navig])



// const test=event.target as HTMLElement
// let valeur=test.innerHTML.trim();

// if(valeur==="exo1"){

// this.isLinkExoClicked=!this.isLinkExoClicked;


// }


// console.log("texte recu", this.isLinkExoClicked);







//}









}