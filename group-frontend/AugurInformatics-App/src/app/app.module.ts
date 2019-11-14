import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { ReposComponent } from './repos/repos.component';
import { DetailPageComponent } from './detail-page/detail-page.component'; 

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContributorsComponent } from './detail-page/info/contributors/contributors.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReposComponent,
    DetailPageComponent,
    ContributorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
