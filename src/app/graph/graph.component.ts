import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as cytoscape from "cytoscape";
import {Layouts, Core, ElementDefinition} from "cytoscape";
import {Stylesheet} from "cytoscape";
import cola from "cytoscape-cola";
import {style} from "./graph.config";
import {GraphService} from "./graph.service";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {

  constructor(public graphService: GraphService) {
  }

  @ViewChild('cy') cy!: ElementRef;
  @Input() set elements(elements: ElementDefinition[]) {
    if (this.graphService.graph) {

      this.graphService.onNodeSelect()

      if (this.graphService.layout) {
        this.graphService.layout.stop();
      }

      this.graphService.graph.add(elements);

      this.graphService.layout = this.graphService.graph.elements().makeLayout({
        name: "cola"
      });

      this.graphService.layout.run();

    }


    if (!this.graphService.graph) {

      cytoscape?.use(cola);

      if(this.cy) {
        this.graphService.graph = cytoscape({
          elements: elements,
          style: style as Stylesheet[],
          maxZoom: 0.5,
          wheelSensitivity: 0.2,
          container: this.cy.nativeElement
        });
      }
    }
  };

  ngOnInit(): void {
  }

}
