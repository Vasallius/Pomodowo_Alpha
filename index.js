// $(document).ready(function () {
//   $("#MyModal").modal();
// });

document.querySelector("#click").addEventListener("click", function () {
  $("#taskModal").modal("show");
});

// document.querySelector(".close-btn").addEventListener("click", function () {
//   $("#exampleModal").modal("hide");
// });

$(".close-btn").click(function () {
  $("#taskModal").modal("hide");
});
