import { PagesRoutingModule } from './../../pages/pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ]
})
export class ComponentsModule { }
