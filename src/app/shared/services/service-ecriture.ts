import { Injectable } from '@angular/core';
import { routes } from '../../app.routes';
import { ActivatedRoute } from '@angular/router';
import { Subscription,Observable,of, map } from 'rxjs';
import { UsersModel } from '../Models/users-model';



@Injectable({
  providedIn: 'root',
})
export class ServiceEcriture {

private isHover : boolean=true;
private userNameService : string ="";
private passWordService :string="";
private emailService: string ="";
private birthDateService:string="";
private isRegistered : boolean=false;


private getUsersModel? : UsersModel;


  // private exoId: number=0;


// constructor(){}

// constructeur du formulaire d inscription

addDataForm(UserName : string , passWord : string,email:string, birthDate : string ){

this.userNameService=UserName;
this.passWordService=passWord;
this.emailService=email;
this.birthDateService=birthDate;





}




setIsHover() : boolean{




  return this.isHover;
}



getAllUsersData(): UsersModel{
  
this.getUsersModel={userName:this.userNameService,passWord:this.passWordService,email:this.emailService,birthDate:this.birthDateService}

console.log('l objet du formulaire',this.getUsersModel);
// console.log(`bienvenu ${this.userNameService} vous etes inscrit(e)`);





 return this.getUsersModel;
}


registerSucces(): boolean{

return  this.isRegistered=true;

}



//   private Exo : boolean=false;


// getExoName() : boolean{



// return this.Exo=false;
// }



  
}
