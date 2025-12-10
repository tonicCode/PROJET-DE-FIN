import { Component, NgModule, OnInit } from '@angular/core';
import { ExoLink } from '../../directives/exo-difficult';
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

private zt!:HTMLInputElement;
private result:string="";
private letter:string="";
private word:string="";

private count:number=-1;
private separation:string[]=[];





private dial: string="";
selectedValue: string="";


  

// when you text valid 

analyse(){

  this.zt=document.getElementById("ZoneDeTexte") as HTMLInputElement;


this.result=this.zt.value;

console.log(this.result);


this.detectWordArticle();

// reset counter
 this.count=-1;
// this.reperageArticle();

}



 detectWordArticle(){

//balayage du text

for(let i=0;i<this.result.length;i++){


//read any characters
this.letter=this.result.charAt(i);

this.separation=this.result.split(" ");


if(this.letter === " "){

this.count++;
this.word=this.separation[this.count] || "";
console.log(this.count);
console.log(this.word);


//controle si un article definis est présent
if(["le","la","l","les"].includes(this.word)){

  this.zt.style.color='red';



}else{
  this.zt.style.color='black';
}



}






}
 }


onchange(ev : Event){
  const ele=ev.target as HTMLInputElement;

console.log('le mode est :', ele);


}








}

// reperageArticle(){
// // this.cutWord();

// // console.log('reper Article' ,this.word);

// // }








// }







  // }


// writeExo() : string{

 
//   switch(this.exoId){

//     case 1:
// this.enonce1="EXERCICE 1 : Ecrire un texte sans articles définis (le , la , des)";
// return this.enonce1;
// break;

//     case 2:
// this.enonce2="EXERCICE 2 : ecrire un texte sans la lettre qui est ennoncée";  
// return this.enonce2;
// break;

//     case 3:
// this.enonce3="EXERCICE 3 : faire une phrase qui contient au moin une rime dans le texte";
// return this.enonce3;
// break;

// default: return "choisir un exercice";


//   }




// //return this.enonce1;
// }







// dialogue() : string {

// this.dial="Veuillez choisir un niveau de difficulté";

// if(this.selectedValue !== ""){

// this.dial="tres bien valider lorsque vous avez terminer"

// }


// //const niv=document.getElementById('niveau') as HTMLElement;


// //console.log(niv.innerText);



// return this.dial;
// }



// onChange(ev : Event){

// const val=(ev.target as HTMLInputElement).value;


// console.log('la selection intel', val);

// this.selectedValue=val;









// } 












