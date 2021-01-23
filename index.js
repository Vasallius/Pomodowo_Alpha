// 📚 MODAL
// document.querySelector("#click").addEventListener("click", function () {
//   $("#taskModal").modal("show");
// });

// $(".close-btn").click(function () {
//   $("#taskModal").modal("hide");
// });
const tasks = [];
$("#submit-task").keyup(function (e) {
  // After user presses "Enter"

  if (e.keyCode === 13) {
    const task = $(this).val();
    console.log(task);

    // Add task to the list with clear button

    $(".list-group").append(
      '<div class="col-xs-2 col-md-6"><li class="list-group-item my-2 border-top d-flex justify-content-between align-items-center">' +
        task +
        '<i class="fas fa-times ml-auto"></i></li></div>'
    );

    // Add to wheel

    tasks.push(task);

    function addSegment() {
      theWheel.addSegment(
        {
          text: task,
          fillStyle: "aqua",
        },
        1
      );
      theWheel.draw();
    }

    addSegment();

    // Remove task button

    $("i").click(function () {
      console.log($(this).parent().hasClass("list-group-item"));
      $(this).parent().remove();
      deleteSegment();
    });

    function deleteSegment() {
      // Call function to remove a segment from the wheel, by default the last one will be
      // removed; you can pass in the number of the segment to delete if desired.
      theWheel.deleteSegment(tasks.indexOf(task) + 1);

      // The draw method of the wheel object must be called to render the changes.
      theWheel.draw();
    }

    // Clear input but placeholder remains

    $(this).val("");
  }
});

// Wheel Construction

let theWheel = new Winwheel({
  numSegments: 4,
  segments: [
    { fillStyle: "#eae56f", text: "Task 1" },
    { fillStyle: "#89f26e", text: "Task 2" },
    { fillStyle: "#7de6ef", text: "Task 3" },
    { fillStyle: "#e7706f", text: "Task 4" },
  ],
  fillStyle: "#e7706f",
  textAlignment: "center",
  responsive: true,
  // outerRadius: 150,
  lineWidth: 3,
  rotationAngle: 45,
  // Note animation properties passed in constructor parameters.
  animation: {
    type: "spinToStop", // Type of animation.
    duration: 5, // How long the animation is to take in seconds.
    spins: 8, // The number of complete 360 degree rotations the wheel is to do.
    easing: "Power4.easeOut",
    stopAngle: 45,
    callbackFinished: alertPrize,
  },

  // Turn pointer guide on.
  // pointerGuide: {
  //   display: true,
  //   strokeStyle: "red",
  //   lineWidth: 3,
  // },
});

function alertPrize() {
  // Call getIndicatedSegment() function to return pointer to the segment pointed to on wheel.
  let winningSegment = theWheel.getIndicatedSegment();

  // Basic alert of the segment text which is the prize name.
  alert("You have won " + winningSegment.text + "!");
  // theWheel.draw();
  // theWheel.startAnimation();
}

function resetWheel() {
  theWheel.stopAnimation(false); // Stop the animation, false as param so does not call callback function.
  theWheel.rotationAngle = 0; // Re-set the wheel angle to 0 degrees.
  theWheel.draw(); // Call draw to render changes to the wheel.
}

// Starts spinning animation

$("#test-btn").click(function () {
  console.log("i got clicked");
  theWheel.startAnimation();
});

// Resets wheel so it can be spun again

$("#reset").click(resetWheel);
