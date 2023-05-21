import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <b>
     404 Error! The page You are Requested is not found
</b>
  `,
  styles: [
    `b{
      color:red;font-size:50px;
    }`
  ]
})
export class StatusComponent {

}
