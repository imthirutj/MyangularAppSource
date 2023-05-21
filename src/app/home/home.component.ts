import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string;
  txt:any='hi';
  nameToAdd:string ='DefaultName';
  inputMod:any;

  colorName:string="red";

  nameList: string[] = ['Thiru', 'Jag', 'Ron'];
  constructor() {
    this.name = "Thiru";
    this.inputMod = "Defgault input"
  }
  checkboxValues: boolean[] = [false, false]; // Array to hold checkbox values
  ngOnInit():void{
  
  }

  AddNameTolist(){
    this.nameList.push(this.nameToAdd)
  }
  showStatus(){
    alert(`We are good! ${this.name} ${this.txt}`)
  }

  changeinput(val:any){
    alert(`This is your text: ${val}`);
  }
}
