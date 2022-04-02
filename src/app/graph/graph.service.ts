import {Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {Layouts, Core, NodeSingular} from "cytoscape";
import {StepperService} from "../widgets /stepper/stepper.service";

@Injectable()
export class GraphService {

  public graph!: Core;
  public layout!: Layouts;

  public threshold = 0.5;

  constructor(public stepperService: StepperService) {
  }

  public onNodeSelect() {

    if (this.graph) {
      this.graph.on('select', 'node', (event) => {
        this.graph.$('node:selected').addClass('infected');
        this.graph.$('node:selected').addClass('infected');
        this.graph.$('node:selected').addClass(`infected-in-${this.stepperService.currentStep}`);
        this.graph.$('node:selected').style('background-color', 'red');

        console.log('selected:', this.graph.$('node:selected'))

        this.graph.$('node:selected').neighborhood().nodes().each(it => {
          // this.infectFurther(it);
        });
      });
    }
  }

  infectFurther(it: NodeSingular) {

    let impact = 0;

    it.neighborhood().nodes().each(it => {
      if (it.hasClass('infected')) {
        impact = impact + 1
      }
    });

    if (impact / (it.neighborhood().length / 2) > this.threshold) {
      it.addClass('infected');
      it.addClass(`infected-in-${this.stepperService.currentStep}`);
      it.style('background-color', 'red');
    }

  }


  infectOnNextStep() {

    this.graph.nodes().each(it => {
      console.log('this.stepperService.currentStep', this.stepperService.currentStep, it);
      if (it.hasClass('infected')) {
        if (it.hasClass(`infected-in-${this.stepperService.currentStep-1}`)) {
          this.infectFurther(it);
        }
      }
    });



  }



}
