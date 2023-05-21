import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  constructor(private route: ActivatedRoute){}

    ngOnInit(): void{
      const routeId = this.route.snapshot.paramMap.get("id");
      console.log(routeId);
    }

  
}
