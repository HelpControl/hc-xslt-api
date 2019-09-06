import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatDividerModule,
  MatIconModule,
} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatDividerModule,
  MatIconModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class SharedModule {}
