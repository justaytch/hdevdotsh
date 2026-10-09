console.log("h");
document.addEventListener("mousemove", function(e) {
  let textElement = document.getElementById("follower");
  let offset = 10;
  let x = e.pageX + offset;
  let y = e.pageY + offset;
  textElement.style.left = x + "px";
  textElement.style.top = y + "px";
  textElement.style.opacity = 1;
});

document.addEventListener('mouseleave', function() {
  let textElement = document.getElementById("follower");
  textElement.style.opacity = 0;
});

const elements = document.querySelectorAll(".bounce");

const objects = [...elements].map((element) => ({
  element,
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  vx: 30 + Math.random() * 30,
  vy: 20 + Math.random() * 30
}));

let lastTime = performance.now();

function bounce(currentTime) {
  const deltaTime = (currentTime - lastTime) / 1000;
  lastTime = currentTime;

  for (const object of objects) {
    const { element } = object;

    const maxX = window.innerWidth - element.offsetWidth;
    const maxY = window.innerHeight - element.offsetHeight;

    object.x += object.vx * deltaTime;
    object.y += object.vy * deltaTime;

    if (object.x <= 0) {
      object.x = 0;
      object.vx = Math.abs(object.vx);
    } else if (object.x >= maxX) {
      object.x = maxX;
      object.vx = -Math.abs(object.vx);
    }

    if (object.y <= 0) {
      object.y = 0;
      object.vy = Math.abs(object.vy);
    } else if (object.y >= maxY) {
      object.y = maxY;
      object.vy = -Math.abs(object.vy);
    }

    element.style.left = `${object.x}px`;
    element.style.top = `${object.y}px`;
  }

  requestAnimationFrame(bounce);
}
requestAnimationFrame(bounce);

function invertrgb(r, g, b) {
    let ir = 255 - r;
    let ig = 255 - g;
    let ib = 255 - b;
    return [ir,ig,ib];
}
function setcolors() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let irgb = invertrgb(r, g, b);
  document.documentElement.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  document.getElementById("big").style.color = "rgb(" + irgb[0] + "," + irgb[1] + "," + irgb[2] + ")";
}
setcolors();
