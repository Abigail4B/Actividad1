<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementoPage } from './elemento.page';

const routes: Routes = [
  {
    path: '',
    component: ElementoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementoPageRoutingModule {}
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementoPage } from './elemento.page';

const routes: Routes = [
  {
    path: '',
    component: ElementoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementoPageRoutingModule {}
>>>>>>> e661251456290024d464fef68e7566109b9d4cc4
