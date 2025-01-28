<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistratePage } from './registrate.page';

const routes: Routes = [
  {
    path: '',
    component: RegistratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistratePageRoutingModule {}
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistratePage } from './registrate.page';

const routes: Routes = [
  {
    path: '',
    component: RegistratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistratePageRoutingModule {}
>>>>>>> e661251456290024d464fef68e7566109b9d4cc4
