import { ElementaryNodeRenderer as core, el } from "@nick-thompson/elementary";

function Sine() {
  core.on("load", function () {
    core.render(el.cycle(440), el.cycle(441));
  });

  (async function main() {
    let node = await core.initialize(ctx, {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      outputChannelCount: [2],
    });

    node.connect(ctx.destination);
  })();
}

export default Sine;
