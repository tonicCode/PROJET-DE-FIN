import { Injectable } from '@angular/core';
import { routes } from '../../app.routes';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription,Observable,of, map } from 'rxjs';
import { UsersModel } from '../Models/users-model';
import { LoginModel } from '../Models/login-model';



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


private getAllUsersModel!: UsersModel;
private getLogin! : LoginModel;
private recupValUser:any;
private UserIsBeenLogin!:boolean;

private counter:number =1;
private recId!: number;
private allUserDataTab:UsersModel[]=[];
private UsersTab:LoginModel[]=[];


  // private exoId: number=0;


 constructor(private router : Router){}

// constructeur du formulaire d inscription




addDataForm(data:UsersModel){

this.userNameService=data.userName;
this.passWordService=data.passWord;
this.emailService=data.email ;
this.birthDateService=data.birthDate ;

this.getAllUsersModel=data;

}



addDataLoginFormu(data : LoginModel){


this.userNameService=data.userName;
this.passWordService=data.passWord;


this.getLogin=data;


// console.log('??? what ?? ', this.getLogin);

}






setIsHover() : boolean{




  return this.isHover;
}




getAllUserTab() {




return this.UsersTab;
}



getAllUsersData( ): UsersModel{


// Object.entries(this.getAllUsersModel).forEach(([Key,values]) => {


// console.log('key', Key);

// this.allUserDataTab[values.user_id]=values;



// });




return this.getAllUsersModel;

}









toGetLogin() {



return this.getLogin;
}


//verifie que la valeur du form login match bien


toLoginIsMatch(valDb : object) {


Object.entries(valDb).forEach(([Key,values]) => {

// console.log('12 test' ,values.userName);
// console.log('logilogin' , this.getLogin.userName);

 this.allUserDataTab[(values.user_id)-1]=values;
 console.log('quedsqui', this.allUserDataTab);


if(values.userName === this.getLogin.userName && values.passWord == this.getLogin.passWord){



//  console.log('ca matchè!!! bienvenu '+ values.username);

 this.router.navigate(['home/espaceMembre']);

this.recupValUser=values.userName;
this.recId=values.user_id;
 this.UsersTab[values.user_id]=values;


// console.log('voici le tab d obj' ,this.UsersTab);




this.UserIsBeenLogin=true;

}


});

}



//insere dans un tab tous les users 

getTabData(){


  return this.allUserDataTab;
}



getValueMatched() : string{



return this.recupValUser;
}



getUserLoginStatus() :boolean{


return this.UserIsBeenLogin;
}




//  addId(db : object) {

// //   console.log('ca fonction');

//    Object.entries(db).forEach(([Key,Values]) => {


// // console.log( 'id?????', Key);
// this.recId= Values.user_id;
//  console.log( 'id?', this.recId);

//   });




// //  return this.recId;

//  }



getId() : number{



return this.recId;
}






// countId(id :LoginModel) {

// console.log('l id est :' , id.User_id);



//  return id;

// }




// createContain() {





// }


// toCountUser(getVal : object){

// // si id 5 boucle compte jusque 5

// // selon le login detecter l ' id correspondant

// Object.entries(getVal).forEach(([Key,values]) => {

// this.recId=parseInt(Key)+1;


// if(this.getLogin.userName === values.userName){
// console.log('cest l id en question ', this.recId);

// }




// });




//}








}
