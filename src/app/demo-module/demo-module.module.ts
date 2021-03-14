import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoModuleComponent } from './demo-module.component';


@NgModule({
  declarations: [DemoModuleComponent],
  imports: [
    CommonModule
  ],
  exports: [DemoModuleComponent]
})
export class DemoModuleModule { }
