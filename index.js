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
var btn = document.getElementById("add_task_btn");

// When the user clicks the button, open the modal
btn.onclick = function () {
  gsap.fromTo(modal, { top: "-300px", opacity: 0 }, { top: "0", opacity: "1" });
  gsap.to($(".task"), 0.1, { zIndex: 1 });
  modal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Adding tasks
let task_list = document.getElementById("task_list");
let done_btn = document.getElementById("done_btn");
done_btn.onclick = function () {
  console.log("I got clicked!");
  let new_task = this.parentElement.firstElementChild.value;
  let new_task_container = document.createElement("div");
  new_task_container.innerHTML = `<div
                    class=" transform translate-y-delete delete-btn -z-10 absolute top-0 left-0 ml-3 flex-none w-logo h-logo">
                    <div class="w-logo h-logo">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="#F84008" />
                            <g opacity="0.7">
                                <path d="M17.5 19.9331H19.1667H32.5" stroke="white" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M21.6667 19.9332V18.2888C21.6667 17.8527 21.8423 17.4344 22.1548 17.126C22.4674 16.8177 22.8913 16.6444 23.3333 16.6444H26.6667C27.1087 16.6444 27.5326 16.8177 27.8452 17.126C28.1577 17.4344 28.3333 17.8527 28.3333 18.2888V19.9332M30.8333 19.9332V31.4439C30.8333 31.88 30.6577 32.2983 30.3452 32.6067C30.0326 32.915 29.6087 33.0883 29.1667 33.0883H20.8333C20.3913 33.0883 19.9674 32.915 19.6548 32.6067C19.3423 32.2983 19.1667 31.88 19.1667 31.4439V19.9332H30.8333Z"
                                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23.3333 24.0441V28.9772" stroke="white" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M26.6667 24.0441V28.9772" stroke="white" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center">
                    <div
                        class="task flex-none  w-full h-nav bg-white rounded-2xl  flex flex-row items-center space-x-2">
                        <div
                            class=" ml-3 flex-none flex items-center justify-center w-task_id h-task_id rounded-full bg-Main_Orange">
                            <div class="text-Light_Yellow_Accent text-xs ">1</div>
                        </div>

                        <div class="flex-grow font-sans font-normal text-sm text-Black_Substitute truncate">${new_task}
                        </div>
                        <div class=" flex-none mr-3">
                            <img class="mr-3" src="Edit Task.svg" alt="">
                        </div>
                    </div>
                </div>
                `;
  new_task_container.classList.add("relative", "w-full");
  task_list.appendChild(new_task_container);
};
