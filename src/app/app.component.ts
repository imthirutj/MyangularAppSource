import { Component, DoCheck } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements DoCheck{

  title = 'MyApp';

  isMenuVisible=true;

constructor(private route:Router){

}
  ngDoCheck(): void {
    const currentRoute = this.route.url;
    console.log(currentRoute);
    if(currentRoute == '/login'){
      this.isMenuVisible=false;
    }
    else{
      this.isMenuVisible=true;
    }
  }
}
