const colors = ["#FF5733", "Tomato", "rgb(255, 87, 51)","#5F9EA0", "CadetBlue", "rgb(95, 158, 160)","#8A2BE2", "BlueViolet", "rgb(138, 43, 226)",
"#2E8B57", "SeaGreen", "rgb(46, 139, 87)",
"#FFD700", "Gold", "rgb(255, 215, 0)",
"#6495ED", "CornflowerBlue", "rgb(100, 149, 237)",
"#FF1493", "DeepPink", "rgb(255, 20, 147)",
"#00FF7F", "SpringGreen", "rgb(0, 255, 127)",
"#8B4513", "SaddleBrown", "rgb(139, 69, 19)",
"#483D8B", "DarkSlateBlue", "rgb(72, 61, 139)"];

const btn = document.getElementById("btnFlipper");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);
  
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }