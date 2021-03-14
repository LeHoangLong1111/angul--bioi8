import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgForComponent } from './ng-for/ng-for.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuralRoutingModule { }
