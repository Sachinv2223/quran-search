import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { TemplateComponent } from './template/template.component';


@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ComponentsModule
  ],
  exports:[
    TemplateComponent
  ]
})
export class LayoutModule { }
