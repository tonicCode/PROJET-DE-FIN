import { Directive, HostListener,ElementRef,Input} from '@angular/core';
import { Router } from '@angular/router';




@Directive({
  selector: '[appExoDifficult]',
  exportAs:'appExoDifficult'
})
export class ExoLink {


//isHoverLink : boolean=false;
 isLinkExoClicked =false;
//  @Input('appExoLink') navig! : string;



  constructor(private el: ElementRef,private router : Router) { }






  

// @HostListener('mouseenter') mouseEnter(){

// // this.el.nativeElement.style.color="green";


// }

// @HostListener('mouseleave') mouseleave(){

//   // this.el.nativeElement.style.color="blue";


// }





















}