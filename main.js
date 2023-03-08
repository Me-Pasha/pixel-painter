var dimension = 55;
var selectedColor = "black";
const container = document.querySelector('.container');
const div = document.createElement("div");
const div2 = document.createElement("div");
const eraser = document.querySelector('.eraser');
const pinky = document.querySelector(".pink");
const tealy = document.querySelector(".teal");
const brown = document.querySelector(".brown");
const skyblue = document.querySelector(".sky-blue");
const blue = document.querySelector(".blue");
const black = document.querySelector(".black");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const orange = document.querySelector(".orange");

//create canvas
for (let i = 0; i <dimension; i++) {
  const div = document.createElement("div");
  div.classList.add("item");
  container.appendChild(div);
    for(let j = 0; j <dimension+45; j++){
      const div2 = document.createElement("div");
      div2.classList.add("item-under")
      div.appendChild(div2);
      console.log(div2);
    }
}

//paint
const pixels = document.querySelectorAll(".item-under");

    pixels.forEach(pixel => {
        pixel.addEventListener("mousedown", (event) => {
          event.preventDefault();
          pixel.style.backgroundColor = selectedColor;
      });


        pixel.addEventListener("mouseover", (event) => {
          event.preventDefault();
          if (event.buttons === 1) {
           pixel.style.backgroundColor = selectedColor;
          }
      });
    });

    //select colours
    pinky.addEventListener("click", ()=>{
      selectedColor = "pink";
    });

    tealy.addEventListener("click", ()=>{
      selectedColor = "teal";
    });

    eraser.addEventListener("click", ()=>{
      selectedColor = "white";
    });

    brown.addEventListener("click", ()=>{
      selectedColor = "rgb(252, 103, 73)";
    });

    skyblue.addEventListener("click", ()=>{
      selectedColor = "skyblue";
    });

    blue.addEventListener("click", ()=>{
      selectedColor = "blue";
    });

    black.addEventListener("click", ()=>{
      selectedColor = "black";
    });

    yellow.addEventListener("click", ()=>{
      selectedColor = "yellow";
    })

    red.addEventListener("click", ()=>{
      selectedColor = "red";
    })

    orange.addEventListener("click", ()=>{
      selectedColor = "orange";
    })
