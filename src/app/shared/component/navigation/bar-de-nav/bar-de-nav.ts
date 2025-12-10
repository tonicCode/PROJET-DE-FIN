import { Component } from '@angular/core';
//import { NgIf } from "../../../node_modules/@angular/common/types/_common_module-chunk";
//import { MenuDerouleDirect } from "../../../directives/menu-deroule-direct";
//import { NgIf } from "../../../../../../node_modules/@angular/common/types/_common_module-chunk";
import { MenuDerouleDirect } from '../../../directives/menu-deroule-direct';
import { ExoLink } from "../../../directives/exo-difficult";
import { RouterLink,Router } from "@angular/router";
import { ContactComposant } from '../../contact-composant/contact-composant';
import { ServiceEcriture } from '../../../services/service-ecriture';
import { ExoComponent } from '../../exo-component/exo-component';


@Component({
  selector: 'app-bar-de-nav',
   standalone:true,
  imports: [MenuDerouleDirect],
 templateUrl: './bar-de-nav.html',
  styleUrl: './bar-de-nav.scss',
})
export class BarDeNav {

_injectService: ServiceEcriture;




isHoverExoOnglet : boolean=false;

constructor(private injecterService: ServiceEcriture , private router : Router){

this._injectService=injecterService;

}



onMouseEnter(ev :MouseEvent) :void {

  this.isHoverExoOnglet=this._injectService.setIsHover();
let elem=ev.target as HTMLInputElement;

  elem.setAttribute('style', 'background-color: white');

// this.newIsHover2=this._injectService.setIsHover();

}

onMouseLeave(ev: MouseEvent):void{

this.isHoverExoOnglet=false;
 let elem=ev.target as HTMLInputElement;
elem.style.backgroundColor="";




}

launchExo() :void{

this.router.navigate(['home/exo']);
console.log("this clic !!!!");

}



// login 

launchLogin():void{


// const eleClick=ev.target as HTMLInputElement;
this.router.navigate(['home/login']);

}


// inscription 

launchInscription():void{

this.router.navigate(['home/inscription']);


}






// constructor(private service: ServiceEcriture){

// this.Exo1=service.getExoName();
// this._servic// case 1 : this.isExo1=true;
//           break;

// case 2 : this.isExo2=true;
//           break;

// case 3 : this.isExo3=true;
//          break;




// }




// const elem=(event.target as HTMLInputElement);


// this.selecteurExo=elem.innerHTML;

// if(this.selecteurExo=="exo1"){
//   //this.service;


// }else if(this.selecteurExo=="Exo2"){
//   this.isExo2=true;
// }else if(this.selecteurExo=="exo3"){
//   this.isExo3=true;
// }


// // console.log(elem.innerHTML);

// }




}

