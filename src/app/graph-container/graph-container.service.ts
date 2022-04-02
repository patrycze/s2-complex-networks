import {Injectable} from '@angular/core';
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

  public pushRandomNodeToOriginalElements(): void {
    if(this._originalElements) {
      this.elementsToLoad = [...this.elementsToLoad, this._originalElements[0]];
      this._originalElements.shift();
    }

  }

}
