import { NgModule } from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
    exports:[
        MatCardModule, MatFormFieldModule,MatInputModule,MatButtonModule,MatTableModule
    ]
})
export class MaterialModule{

}