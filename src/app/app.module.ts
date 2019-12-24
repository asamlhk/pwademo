import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const appRoutes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },

];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      
      { enableTracing: false,
      useHash: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


