import { Component, OnInit, signal } from '@angular/core';
import { ServiceEcriture } from '../../services/service-ecriture';
import { ApiService } from '../../services/api-service';
import { firstValueFrom } from 'rxjs';
import { LoginComposant } from '../login-composant/login-composant';
import { LoginModel } from '../../Models/login-model';
import { UsersModel } from '../../Models/users-model';

@Component({
  selector: 'app-espace-membre',
  imports: [],
  templateUrl: './espace-membre.html',
  styleUrl: './espace-membre.scss',
})
export class EspaceMembre implements OnInit{

   UserIsBeenLogin!:boolean;
messageUserConnected= signal("");
recupTabUser=signal<LoginModel[]>([]);
recupTabAllUser=signal<UsersModel[]>([]);
indexId :number=0;


toCountUserWhitId=signal<number>(0);


  constructor(private apiservice : ApiService, private injectService : ServiceEcriture){}


async ngOnInit(){

this.UserIsBeenLogin= this.injectService.getUserLoginStatus();
  this.messageUserConnected.set(this.injectService.getValueMatched());
   this.recupTabAllUser.set(this.injectService.getTabData().filter(a => a));


// console.log(this.recupTabUser());


  try{

 this.toCountUserWhitId.set(this.injectService.getId());
 this.indexId=this.injectService.getId();
 
 console.log('l id dans try catch ',this.toCountUserWhitId());
 this.recupTabUser.set(this.injectService.getAllUserTab());



//  this.recupTabAllUser.set(this.injectService.getAllUsersData());
 console.log('recups !! ',this.recupTabUser());


 console.log('wesh !',this.recupTabAllUser());
//  const x=await firstValueFrom(this.apiservice.getUser(this.injectService.toGetLogin()));

// this.injectService.addId(x);

 console.log('l api renvoi :',this.injectService.getId());

// this.injectService.countId();


}catch(error){

console.error('ne marche pas');

}

}


// countUser(){




// }






}
