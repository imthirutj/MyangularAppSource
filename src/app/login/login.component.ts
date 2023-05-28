import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/mat-module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  
  constructor(private service: UserService,private route:Router) { }
 
 
  response:any;
  LoginProcess(data: any) {
    if (data) {
      this.service.LoginProcess(data).subscribe(
        (item) => {
          if (item != null) {
            this.response = item;
            console.log(this.response);
            localStorage.setItem('token',this.response.token);
            this.route.navigate(['home']);
          } else {
            alert("Not found");
          }
        },
        (error) => {
          if (error.status === 404) {
            alert("Not found");
          } else {
            // Handle other errors
            console.error("An error occurred:", error);
          }
        }
      );
    }
  }

  NavigateToRegister(){
    this.route.navigate(['access/register']);
  }
  
  ngOnInit(): void {
    localStorage.removeItem('token');
  }
}
