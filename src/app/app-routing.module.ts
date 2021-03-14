import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientModule } from './client/client.module';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BaiTap1Component } from './bai-tap1/bai-tap1.component';
// import { InteractionModule } from './interaction/interaction.module';
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => ClientModule
  },
  {
    path: 'one-way-component',
    component: OneWayBindingComponent
  },
  {
    path: 'two-way-component',
    component: TwoWayBindingComponent
  },
  {
    path: 'bai-tap1',
    component: BaiTap1Component
  },
  {
    path: 'structural',
    loadChildren: () => StructuralDirectiveModule
  },
  {
    path: 'client',
    loadChildren: () => ClientModule
  },

  {
    path: 'admin',
    loadChildren: () => AdminModule
  },

  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
