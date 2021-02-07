let dragDistance = 80;
let dragger = $(".task");
let initial_position = dragger.position().left;
let final_position = initial_position + dragDistance;
Draggable.create(dragger, {
  type: "x",
  edgeResistance: 0.65,
  bounds: { minX: 0, maxX: dragDistance },
  lockAxis: true,
  throwProps: true,

  onRelease: function () {
    if ($(this.target).position().left < initial_position + dragDistance) {
      console.log("Going back");
      gsap.to(this.target, 0.5, { x: 0, ease: Elastic.easeOut.config(2.5, 1) });
    } else {
      // TODO: implement better drag animation
      // gsap.to(dragger, 0.2, { x: dragDistance, ease: Back.easeIn.config(1) })
    }
  },
});
