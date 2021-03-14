import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { BaiTap1Component } from './bai-tap1/bai-tap1.component';
import { HeaderComponent } from './bai-tap1/header/header.component';
import { ContentsComponent } from './bai-tap1/contents/contents.component';
import { SidebarComponent } from './bai-tap1/sidebar/sidebar.component';
import { FooterComponent } from './bai-tap1/footer/footer.component';
import { DemoModuleModule } from './demo-module/demo-module.module';
import { TestModuleModule } from './test-module/test-module.module';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module';
import { AttributeDirectiveModule } from './attribute-directive/attribute-directive.module';
import { HighLightDirective } from './high-light.directive';
import { InteractionModule } from './interaction/interaction.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuParentComponent } from './menu-parent/menu-parent.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    BaiTap1Component,
    HeaderComponent,
    ContentsComponent,
    SidebarComponent,
    FooterComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    HighLightDirective,
    PageNotFoundComponent,
    MenuParentComponent,
  ],
  imports: [
    BrowserModule,
    InteractionModule,
    DemoModuleModule,
    TestModuleModule,
    FormsModule,
    StructuralDirectiveModule,
    AttributeDirectiveModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
