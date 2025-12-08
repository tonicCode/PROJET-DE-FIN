import { Component, NgModule, OnInit } from '@angular/core';
import { ExoLink } from '../../directives/exo-link';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { MenuDerouleDirect } from '../../directives/menu-deroule-direct';
import { ServiceEcriture } from '../../services/service-ecriture';



@Component({
  selector: 'app-exo-component',
  imports: [],
  templateUrl: './exo-component.html',
  styleUrl: './exo-component.scss',
})
export class ExoComponent{

private enonce1: string="";
private enonce2: string="";
private enonce3: string="";



private dial: string="";
selectedValue: string="";

private selecteurExo : number=0;

exoId: number|undefined=0;
//isExo1: boolean=true;
//isExo2: any;




// on injecte le service pour chercher les query params 
constructor(private injectService: ServiceEcriture){}
// au chargement de la page on cherche la(les) valeur(s) des query params
//ngOnInit() :void {
  //pas le choix c'est la ou les chercher .snapshot.paramMap.get
  
  // injectQuery(){
  



  // }


writeExo() : string{

 
  switch(this.exoId){

    case 1:
this.enonce1="EXERCICE 1 : Ecrire un texte sans articles définis (le , la , des)";
return this.enonce1;
break;

    case 2:
this.enonce2="EXERCICE 2 : ecrire un texte sans la lettre qui est ennoncée";  
return this.enonce2;
break;

    case 3:
this.enonce3="EXERCICE 3 : faire une phrase qui contient au moin une rime dans le texte";
return this.enonce3;
break;

default: return "choisir un exercice";


  }




//return this.enonce1;
}







dialogue() : string {

this.dial="Veuillez choisir un niveau de difficulté";

if(this.selectedValue !== ""){

this.dial="tres bien valider lorsque vous avez terminer"

}


//const niv=document.getElementById('niveau') as HTMLElement;


//console.log(niv.innerText);



return this.dial;
}



onChange(ev : Event){

const val=(ev.target as HTMLInputElement).value;


console.log('la selection intel', val);

this.selectedValue=val;









} 











}
