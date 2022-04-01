import {Injectable} from '@angular/core';
import {generation, originalElements} from "./graph-container.component.config";
import {ElementDefinition} from "cytoscape";

@Injectable()
export class GraphContainerService {

  constructor() { }

  public shouldInputNewElements = true;
  public _originalElements!: Array<any>;
  public elementsToLoad: ElementDefinition[] = new Array<any>();

  originalElements(data: any[]) {
    this._originalElements = data.flatMap((element) => [{data:{id: `node${element.source}`, generation: 0}},
      {data:{id: `node${element.target}`, generation: 0}},
      {data: {
        id: `edge-${element.source}${element.target}`,
        source: `node${element.source}`,
        target: `node${element.target}`,
        generation: 0
      }}]
    );
  }

  public stop(): void {
    this.shouldInputNewElements = false;
  }

  public start(): void {
    this.shouldInputNewElements = true;
  }

  // public pushRandomNodeToOriginalElements(): any[] {
  //   const newGeneration = generation + 1;
  //   // const randomNode = shuffle(this.originalElements).find(
  //   //   element => !element.data.source
  //   // );
  //   //
  //   // const newNode = {
  //   //   data: {
  //   //     id: `node-${uuidv4()}`,
  //   //     generation: newGeneration
  //   //   }
  //   // };
  //   //
  //   // this.originalElements = [
  //   //   ...this.originalElements,
  //   //   newNode,
  //   //   {
  //   //     data: {
  //   //       id: `edge-${uuidv4()}`,
  //   //       source: randomNode!.data.id,
  //   //       target: newNode.data.id,
  //   //       generation: newGeneration
  //   //     }
  //   //   }];
  //
  //   return this._originalElements;
  // }

  public pushRandomNodeToOriginalElements(): void {
    if(this._originalElements) {
      this.elementsToLoad = [...this.elementsToLoad, this._originalElements[0]];
      this._originalElements.shift();
    }

  }

}
