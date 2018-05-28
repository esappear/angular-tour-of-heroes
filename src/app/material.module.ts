import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  declarations: []
})
export class MaterialModule { }
