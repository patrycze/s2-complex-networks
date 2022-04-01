import {ElementDefinition} from "cytoscape";

export class ElementDefinitionBuilder implements ElementDefinition {
  classes: string | undefined;
  css: cytoscape.Css.Node | cytoscape.Css.Edge | undefined;
  data!: cytoscape.NodeDataDefinition | cytoscape.EdgeDataDefinition;
  grabbable: boolean | undefined;
  group: cytoscape.ElementGroup | undefined;
  locked: boolean | undefined;
  position: cytoscape.Position | undefined;
  renderedPosition: cytoscape.Position | undefined;
  scratch: cytoscape.Scratchpad | undefined;
  selectable: boolean | undefined;
  selected: boolean | undefined;
  style: cytoscape.CssStyleDeclaration | undefined;

  withData(data: cytoscape.NodeDataDefinition | cytoscape.EdgeDataDefinition) {
    this.data = data;
    return this;
  }
}
