import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GenerateObjectComponent } from './generate-object/generate-object.component';
import { LettersRoutingModule } from './letters-routing.module';


@NgModule({
  declarations: [
    GenerateObjectComponent
  ],
  imports: [
    CommonModule,
    LettersRoutingModule,
    ClipboardModule
  ]
})
export class LettersModule { }
