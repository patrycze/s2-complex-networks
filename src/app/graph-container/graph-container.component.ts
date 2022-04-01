import { Component, OnInit } from '@angular/core';
import {GraphContainerService} from "./graph-container.service";

@Component({
  selector: 'app-graph-container',
  templateUrl: './graph-container.component.html',
  styleUrls: ['./graph-container.component.scss'],
  providers: [GraphContainerService]
})
export class GraphContainerComponent implements OnInit {

  constructor(public graphContainerService: GraphContainerService) { }


  data(data: any[]) {
    this.graphContainerService.originalElements(data);
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.graphContainerService.shouldInputNewElements) {
        this.graphContainerService.pushRandomNodeToOriginalElements()
      }
    },500)
  }

}
