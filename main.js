const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const spinButton = document.getElementById('spinButton');
const result = document.getElementById('result');

const options = [
  "Movie Night",
  "Dance Party",
  "Sports Game",
  "Food Making",
  "Craft Making",
  "Theme Party",
  "Outdoor",
  "Board Game",
  "Karaoke",
  "BBQ Party",
];

const colors = [
  "#FF5733", "#33FF57", "#5733FF", "#FFC300", "#FF33A6",
  "#33D7FF", "#D733FF", "#A6FF33", "#FF5733", "#33FF57",
];

let startAngle = 0;
const arcSize = (2 * Math.PI) / options.length;
const spinDuration = 1000; 

canvas.width = 300;
canvas.height = 300;
function drawWheel() {
  for (let i = 0; i < options.length; i++) {
    const angle = startAngle + i * arcSize;
    ctx.beginPath();
    ctx.arc(150, 150, 150, angle, angle + arcSize, false);
    ctx.lineTo(150, 150);
    ctx.fillStyle = colors[i];
    ctx.fill();
    ctx.save();
    ctx.translate(150, 150);
    ctx.rotate(angle + arcSize / 2);
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff";
    ctx.font = "bold 14px Arial";
    ctx.fillText(options[i], 100, 10);
    ctx.restore();
  }
}

function spinWheel() {
  const randomSpin = Math.random() * 10000 + 10000; 
  const spinAngle = randomSpin % (2 * Math.PI); 
  const finalAngle = startAngle + spinAngle + Math.PI / 2; 

  const selectedSegment = Math.floor(((2 * Math.PI) - (finalAngle % (2 * Math.PI))) / arcSize) % options.length;

  const animationStart = Date.now();
  function animate() {
    const elapsed = Date.now() - animationStart;
    if (elapsed >= spinDuration) {
      startAngle = finalAngle % (2 * Math.PI); 
      result.textContent = `Result: ${options[selectedSegment]}`;
      return;
    }

    const easedProgress = easeOutCubic(elapsed / spinDuration);
    const currentAngle = startAngle + easedProgress * (finalAngle - startAngle);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(currentAngle);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    drawWheel();
    ctx.restore();
    requestAnimationFrame(animate);
  }
  animate();
}
function easeOutCubic(t) {
  return (--t) * t * t + 1;
}
spinButton.addEventListener("click", spinWheel);

drawWheel();
