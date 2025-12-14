import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { ServiceEcriture } from '../../services/service-ecriture';
import { CommonModule } from '@angular/common';
import { FormsModule,FormBuilder, FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';
import { UsersModel } from '../../Models/users-model';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-inscription-composant',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './inscription-composant.html',
  styleUrl: './inscription-composant.scss',
})
export class InscriptionComposant {

  posts : any[]=[];
  elementFormu! : HTMLInputElement;
 nameValue : string="";
 passWordValue:string="";
emailValue:string="";
birthDateValue:string="";
 form!: FormGroup;
 isRegister:boolean=false;
 UserActuallyRegistered:string="";





constructor(private apiService : ApiService,private injectServiceEcriture : ServiceEcriture,private fb:FormBuilder){}


//initialisation du formulaire d 'inscription 

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required]
    });
  }







async submitData(){

if(this.form.valid){

 this.injectServiceEcriture.addDataForm(this.form.get('username')?.value,this.form.get('password')?.value,this.form.get('email')?.value,this.form.get('birthDate')?.value);



}else{
  console.log("formu invalide");
}



try{


 
  const send=await firstValueFrom( this.apiService.createPost(this.injectServiceEcriture.getAllUsersData()));
  console.log('les data sont ',send);

this.isRegister=this.injectServiceEcriture.registerSucces();

this.UserActuallyRegistered=this.form.get('username')?.value;


}catch(error){

console.log('post failed !',error);

}



}






}







