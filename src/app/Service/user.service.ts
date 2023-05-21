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
    const params = new HttpParams()
    .set('username', inputData.username)
    .set('password', inputData.password);
    
    return this.http.get('https://localhost:7101/api/employees/loginReturnTok',{params})
  }
}
