var arr = [
  {
    dp: "https://plus.unsplash.com/premium_photo-1674069720020-41e6dea32366?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    img: "https://plus.unsplash.com/premium_photo-1668895511243-1696733f4fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
];

var clutter = "";
arr.forEach(function (elem, index) {
  clutter += `<div class="story">
            <img id="${index}"
              src="${elem.dp}"
              alt=""
            />
          </div>`;
});

document.querySelector("#stories").innerHTML = clutter;

var grow = 0;
document.querySelector("#stories").addEventListener("click", function (dets) {
  // console.log();
  document.querySelector("#full-scr").style.display = "block";
  document.querySelector("#full-scr").style.backgroundImage = `url(${
    arr[dets.target.id].img
  })`;

  setTimeout(function () {
    document.querySelector("#full-scr").style.display = "none";
  }, 3000);
  if (grow < 100) {
    setInterval(function () {
      document.querySelector("#growth").style.width = `${grow}%`;
      grow++;
    }, 30);
  } else {
    grow = 0;
  }
});
