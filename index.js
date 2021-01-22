// 📚 MODAL
// document.querySelector("#click").addEventListener("click", function () {
//   $("#taskModal").modal("show");
// });

// $(".close-btn").click(function () {
//   $("#taskModal").modal("hide");
// });

$("#submit-task").keyup(function (e) {
  if (e.keyCode === 13) {
    const task = $(this).val();
    console.log(task);
    // Add task to the list
    $(".list-group").append(
      '<li class="list-group-item my-2 border-top">' + task + "</li>"
    );
    $(this).val("");
  }
});

// 📚 Clear Input
// function Clear() {
//   $("#submit-task").each(function () {
//     $(this).val("");
//     // x = 1;
//   });
//   //   $(".#submit-task").focus();
// }
