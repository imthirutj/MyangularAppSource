import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  response:any;
  constructor(private route:Router, private service:UserService){

  }
  NavigateToLogin(){
this.route.navigate(['login']);
  }
data:any;
  reactiveform = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
  });
  RegisterProcess(){
   
    if (this.reactiveform.valid) {
      this.data =this.reactiveform.value;
      this.service.RegisterProcess(this.data).subscribe(
        (item) => {
          if (item != null) {
            this.response = item;
            console.log(this.response);
            alert('Registred Success');
            this.route.navigate(['login']);
          } else {
            alert("Not Registered");
          }
        },
        (error) => {
          alert('Some Error Occured');
        }
        )
      }
      else{
        alert('Not a valid Value');
      }
  }
}
