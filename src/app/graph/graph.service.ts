import {Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {Layouts, Core, NodeSingular} from "cytoscape";
import {StepperService} from "../widgets/stepper/stepper.service";

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
        this.graph.$('node:selected').neighborhood().nodes().each(it => {
          // this.infectFurther(it);
        });
      });
    }
  }

  infectFurther(it: NodeSingular) {
    it.neighborhood().nodes().each(item => {

      let impact = 0;

      item.neighborhood().nodes().each(neighbour => {
        if (neighbour.hasClass('infected')) {
          impact = impact + 1
        }
          if (impact / (item.neighborhood().nodes().length) >= this.threshold) {
            item.addClass('infected');
            item.addClass(`infected-in-${this.stepperService.currentStep}`);
            item.style('background-color', 'red');
        }
      })
    });
  }


  infectOnNextStep() {

    this.graph.nodes().each(it => {
      if (it.hasClass('infected')) {
        if (it.hasClass(`infected-in-${this.stepperService.currentStep-1}`)) {
          this.infectFurther(it);
        }
      }
    });



  }



}
