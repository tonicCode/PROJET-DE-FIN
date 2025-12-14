import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersModel } from '../Models/users-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {



constructor(private http :HttpClient){}


private apiUrl='https://localhost:7286/api/Users';



//poster 

createPost(post:UsersModel){


  return this.http.post(this.apiUrl,post)


  
}




  
}
