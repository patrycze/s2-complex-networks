export const COLORS = {
    purp: "#43447a"
  };

const nodeStyles = [
    {
      selector: "node",
      style: {
        "transition-property": "background-color border-color",
        "transition-duration": "0.3s",
        "transition-timing-function": "ease-in-sine",
        "background-color": COLORS.purp
      }
    }
  ];

export const edgeStyles = [
    {
      selector: "edge",
      css: {
        "curve-style": "bezier",
        "target-arrow-shape": "triangle",
        "target-arrow-color": COLORS.purp,
        "line-color": COLORS.purp
      }
    }
  ];

export const style = [...nodeStyles, ...edgeStyles];
