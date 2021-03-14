import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { AttributeDirectiveRoutingModule } from './attribute-directive-routing.module';


@NgModule({
  declarations: [AttributeDirectiveComponent, NgClassComponent, NgStyleComponent],
  imports: [
    CommonModule,
    AttributeDirectiveRoutingModule
  ],
  exports: [AttributeDirectiveComponent]
})
export class AttributeDirectiveModule { }
