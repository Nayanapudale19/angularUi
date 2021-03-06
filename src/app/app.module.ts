import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageContentComponent } from './page-content/page-content.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    PageContentComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
