const tasks = [];
let task_segments = [];
var theWheel;

$(document).ready(getTasks);
$(document).ready(loadWheel);

$("#submit-task").keyup(function (e) {
  // After user presses "Enter"

  if (e.keyCode === 13) {
    console.log("===Adding task====");
    const task = $(this).val();

    // Add task to the list with clear button

    $(".list-group").append(
      '<div class="col-xs-2 col-md-6"><li class="list-group-item my-2 border-top d-flex justify-content-between align-items-center">' +
        task +
        '<i class="fas fa-times ml-auto"></i></li></div>'
    );

    storeTaskInLocalStorage(task);

    // Add to wheel
    function addSegment() {
      console.log("===Adding segment to wheel===");
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
    console.log("===Segment has been added===");
    // Remove task button

    $("i").click(function () {
      const task = $(this).parent()[0].innerText;
      removeTaskFromLocalStorage(task);
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

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    $(".list-group").append(
      '<div class="col-xs-2 col-md-6"><li class="list-group-item my-2 border-top d-flex justify-content-between align-items-center">' +
        task +
        '<i class="fas fa-times ml-auto"></i></li></div>'
    );
    let segment = { fillStyle: "#eae56f", text: task };
    task_segments.push(segment);
  });
}

function loadWheel() {
  let segments;
  if (localStorage.getItem("tasks_segments") === null) {
    segments = [];
  } else {
    segments = JSON.parse(localStorage.getItem("tasks_segments"));
  }

  // console.log(JSON.parse(localStorage.getItem("tasks_segments")));
  console.log(segments.length);
  theWheel = new Winwheel({
    numSegments: segments.length,
    // segments: [
    //   { fillStyle: "#eae56f", text: "Task 1" },
    //   { fillStyle: "#89f26e", text: "Task 2" },
    //   { fillStyle: "#7de6ef", text: "Task 3" },
    //   { fillStyle: "#e7706f", text: "Task 4" },
    // ],
    segments: task_segments,
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
      // stopAngle: 45,
      callbackFinished: alertPrize,
    },

    // Turn pointer guide on.
    // pointerGuide: {
    //   display: true,
    //   strokeStyle: "red",
    //   lineWidth: 3,
    // },
  });
}

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  let tasks_segments;
  if (localStorage.getItem("tasks_segments") === null) {
    task_segments = [];
  } else {
    task_segments = JSON.parse(localStorage.getItem("tasks_segments"));
  }

  let segment = { fillStyle: "#eae56f", text: task };
  tasks.push(task);
  task_segments.push(segment);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("tasks_segments", JSON.stringify(task_segments));
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  let tasks_segments;
  if (localStorage.getItem("tasks_segments") === null) {
    task_segments = [];
  } else {
    task_segments = JSON.parse(localStorage.getItem("tasks_segments"));
  }

  let segment = { fillStyle: "#eae56f", text: task };
  tasks.push(task);
  task_segments.push(segment);

  tasks.forEach(function (task, index) {
    if (taskItem === task) {
      tasks.splice(index, 1);
    }
  });

  task_segments.forEach(function (segment, index) {
    if (segment.text === task) {
      task_segments.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Wheel Construction

// task_segments = [];
// let tasks2;
// if (localStorage.getItem("tasks") === null) {
//   tasks2 = [];
// } else {
//   tasks2 = JSON.parse(localStorage.getItem("tasks"));
// }

// tasks2.forEach(function (task) {
//   let segment = { fillStyle: "#eae56f", text: task };
//   task_segments.push(segment);
// });

// let theWheel = new Winwheel({
//   numSegments: 4,
//   // segments: [
//   //   { fillStyle: "#eae56f", text: "Task 1" },
//   //   { fillStyle: "#89f26e", text: "Task 2" },
//   //   { fillStyle: "#7de6ef", text: "Task 3" },
//   //   { fillStyle: "#e7706f", text: "Task 4" },
//   // ],
//   segments: task_segments,
//   fillStyle: "#e7706f",
//   textAlignment: "center",
//   responsive: true,
//   // outerRadius: 150,
//   lineWidth: 3,
//   rotationAngle: 45,
//   // Note animation properties passed in constructor parameters.
//   animation: {
//     type: "spinToStop", // Type of animation.
//     duration: 5, // How long the animation is to take in seconds.
//     spins: 8, // The number of complete 360 degree rotations the wheel is to do.
//     easing: "Power4.easeOut",
//     // stopAngle: 45,
//     callbackFinished: alertPrize,
//   },

//   // Turn pointer guide on.
//   // pointerGuide: {
//   //   display: true,
//   //   strokeStyle: "red",
//   //   lineWidth: 3,
//   // },
// });

function alertPrize() {
  // Call getIndicatedSegment() function to return pointer to the segment pointed to on wheel.
  let winningSegment = theWheel.getIndicatedSegment();

  // Basic alert of the segment text which is the prize name.
  alert("You have won " + winningSegment.text + "!");

  // Reset the wheel

  theWheel.stopAnimation(false); // Stop the animation, false as param so does not call callback function.
  theWheel.rotationAngle = 0; // Re-set the wheel angle to 0 degrees.
  theWheel.draw(); // Call draw to render changes to the wheel.
}

// Starts spinning animation

$("#test-btn").click(function () {
  console.log("i got clicked");
  theWheel.startAnimation();
});
