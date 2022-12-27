import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";

const MaterialComponents = [

  MatButtonToggleModule,
  MatSliderModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MaterialComponents
  ]
})

export class MaterialModule { }

