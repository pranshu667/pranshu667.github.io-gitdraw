const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const drawShapes = (nativeEvent) => {
  const { offsetX, offsetY } = nativeEvent;
  console.log(offsetX, offsetY);
  ctx.fillStyle = "green";
  ctx.fillRect(offsetX, offsetY, 100, 100);
};

canvas.addEventListener("click", (event) => {
  drawShapes(event);
});
