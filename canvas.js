const canvas = document.querySelector("#draw");

const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";

function draw(x, y) {
  const circle = new Path2D();
  circle.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill(circle);
  //   console.log(ctx.fill(circle));
}
let isMousedown = false;
canvas.addEventListener("mousedown", (e) => {
  isMousedown = true;
  console.log("mousedown is me");
  //  const { clientX, ClientY } = e;
  //   console.log(e);
  //   const { clientX, clientY } = e;
  //   const react = canvas.getBoundingClientRect();
  //   console.log(react);
  //   console.log(clientX, clientY);
  //   draw(clientX - react.left, clientY - react.top);
});

canvas.addEventListener("mouseup", (e) => {
  isMousedown = false;
  console.log("mouseup is me!!!");
});

canvas.addEventListener("mousemove", (e) => {
  console.log("mousemove is me !!!");
  if (!isMousedown) {
    return;
  }
  const { clientX, clientY } = e;
  const react = canvas.getBoundingClientRect();
  console.log(react);
  console.log(clientX, clientY);
  draw(clientX - react.left, clientY - react.top);
});
