import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 


  }

  LoginProcess(inputData:any){
    var payload = {
      email: inputData.username,
      password: inputData.password
    };
    
    return this.http.post('https://node-management.onrender.com/login',payload)
  }

  RegisterProcess(inputData:any){
   
    return this.http.post('https://node-management.onrender.com/register',inputData)
  }

  isLoggedIn(){
    return localStorage.getItem('token') !=null;
  }

  GetToken(): string {
    return localStorage.getItem('token') || '';
  }
  
}
