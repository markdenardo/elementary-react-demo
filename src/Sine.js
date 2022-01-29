import { ElementaryNodeRenderer as core, el } from "@elemaudio/core-lite";

function Sine() {
  core.on("load", function () {
    core.render(el.cycle(440), el.cycle(441));
  });

  core.initialize();
}

export default Sine;
