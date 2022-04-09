import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphContainerComponent } from './graph-container/graph-container.component';
import { GraphComponent } from './graph/graph.component';
import {NetworkTxtInputComponent} from "./inputs/network-txt-input/network-txt-input.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {StepperComponent} from "./widgets/stepper/stepper.component";
import {StepperService} from "./widgets/stepper/stepper.service";
import {GraphService} from "./graph/graph.service";
import {GraphContainerService} from "./graph-container/graph-container.service";

@NgModule({
    declarations: [
        AppComponent,
        GraphContainerComponent,
        GraphComponent,
        NetworkTxtInputComponent,
        StepperComponent
    ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StepperService, GraphService, GraphContainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
