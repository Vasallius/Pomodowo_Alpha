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

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add_task_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
