import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StepperService} from "./stepper.service";
import {GraphService} from "../../graph/graph.service";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor(public stepperService: StepperService, public graphService: GraphService) {}

  ngOnInit(): void {

  }

  next() {
    this.stepperService.currentStep = this.stepperService.currentStep + 1;
    this.graphService.infectOnNextStep();
  }

}
