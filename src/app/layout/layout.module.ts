import { PagesRoutingModule } from './../pages/pages-routing.module';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateComponent } from './template/template.component';


@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule
  ],
  exports: [
    TemplateComponent
  ]
})
export class LayoutModule { }
