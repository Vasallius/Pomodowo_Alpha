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
    // Add task to the list with clear button
    $(".list-group").append(
      '<div class="col-xs-2 col-md-6"><li class="list-group-item my-2 border-top d-flex justify-content-between align-items-center">' +
        task +
        '<a href="#"><i class="fas fa-times ml-auto"></i></li></a></div>'
    );

    // $(".list-group").append(
    //   '<li class="list-group-item my-2 border-top d-flex justify-content-between align-items-center">' +
    //     task +
    //     '<i class="fas fa-times ml-auto"></i></li>'
    // );
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
