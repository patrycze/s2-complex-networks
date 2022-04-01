import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphContainerComponent } from './graph-container/graph-container.component';
import { GraphComponent } from './graph/graph.component';
import {NetworkTxtInputComponent} from "./inputs/network-txt-input/network-txt-input.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    GraphContainerComponent,
    GraphComponent,
    NetworkTxtInputComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
