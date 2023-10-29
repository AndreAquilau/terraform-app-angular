import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './console/console.component';
import { TerraformComponent } from './terraform/terraform.component';

const routes: Routes = [
  {
    path: 'console',
    component: ConsoleComponent,
  },
  {
    path: 'terraform',
    component: TerraformComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
