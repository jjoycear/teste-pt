import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenerateObjectComponent } from './generate-object/generate-object.component';


const routes: Routes = [
  { path: '', component: GenerateObjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LettersRoutingModule { }
