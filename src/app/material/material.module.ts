import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatAutocompleteModule   
  ]
})
export class MaterialModule { }
