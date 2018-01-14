import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule,
  MatButtonModule,
  MatFormField,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule
  ],
})
export class MaterialModule { }
