import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { StructuralRoutingModule } from './structural-routing.module';

// const routes: Routes = [
//   {
//     path: 'structural',
//     component: StructuralDirectiveComponent
//   }
// ];

@NgModule({
  declarations: [StructuralDirectiveComponent, NgIfComponent, NgForComponent, NgSwitchComponent],
  imports: [
    CommonModule,
    StructuralRoutingModule
    // RouterModule.forChild(routes),
  ],
  exports: [StructuralDirectiveComponent]
})
export class StructuralDirectiveModule { }
