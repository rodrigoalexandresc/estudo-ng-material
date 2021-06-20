import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

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
    MatTableModule   
  ]
})
export class MaterialModule { }
