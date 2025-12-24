import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceEcriture } from '../../services/service-ecriture';
import { firstValueFrom } from 'rxjs';
import { ApiService } from '../../services/api-service';


@Component({
  selector: 'app-login-composant',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login-composant.html',
  styleUrl: './login-composant.scss',
})
export class LoginComposant implements OnInit {


loginFormu!:FormGroup;
isRegister:boolean=false;
isLogin:boolean=false;




constructor(private fb : FormBuilder,private apiService:ApiService, private injectService : ServiceEcriture ){}



ngOnInit() : void{

this.loginFormu=this.fb.group({

  userName:['',Validators.required],
  passWord:['',Validators.required]


});

}

async tologin(){

  if(this.loginFormu.valid){

this.injectService.addDataLoginFormu(this.loginFormu.value);
// console.log('la funct est exec',this.loginFormu.value);
   

}else{
  console.log('formuLogin invalide !');
}


try{


const obtenir=await firstValueFrom(this.apiService.getUser(this.injectService.toGetLogin()));

this.injectService.toLoginIsMatch(obtenir);


//   const recup=await firstValueFrom(this.apiService.getUserId(this.injectService.getId()));
// this.injectService.countId(recup);



  
// console.log('api response',recup);




//  this.injectService.toCountUser(obtenir);



console.log('bien connecter ', obtenir);






}catch(error){

  console.error('le get n a pas marcher' , error);
}




// 

}









}
