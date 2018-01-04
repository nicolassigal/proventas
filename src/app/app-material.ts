import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule,
  MatButtonModule,
  MatFormField,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
})
export class MaterialModule { }
