import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersModel } from '../Models/users-model';
import { LoginModel } from '../Models/login-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private valueId!:UsersModel;



constructor(private http :HttpClient){}


private apiUrl='https://localhost:7286/api/Users';





//get 
getUser(get : LoginModel) {


return this.http.get(this.apiUrl);
}



getUserId(id : LoginModel) {


  return this.http.get(`${this.apiUrl}/${id}`);


console.log('cest la val');

}






//poster 

createPost(post:UsersModel){


  return this.http.post(this.apiUrl,post)
  
}




  
}
