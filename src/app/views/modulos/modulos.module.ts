import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosRoutingModule } from './modulos-routing.module';
import { ConsoleModule } from './console/console.module';
import { TerraformModule } from './terraform/terraform.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConsoleModule,
    TerraformModule,
    ModulosRoutingModule
  ]
})
export class ModulosModule { }
