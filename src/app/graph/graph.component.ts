import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as cytoscape from "cytoscape";
import {Layouts, Core, ElementDefinition} from "cytoscape";
import {Stylesheet} from "cytoscape";
import cola from "cytoscape-cola";
import {style} from "./graph.config";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  private graph!: Core;
  private layout!: Layouts;

  @ViewChild('cy') cy!: ElementRef;
  @Input() set elements(elements: ElementDefinition[]) {
    if (this.graph) {
      if (this.layout) {
        this.layout.stop();
      }

      this.graph.add(elements);

      this.layout = this.graph.elements().makeLayout({
        name: "cola"
      });

      this.layout.run();

    }


    if (!this.graph) {

      cytoscape?.use(cola);

      if(this.cy) {
        this.graph = cytoscape({
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
