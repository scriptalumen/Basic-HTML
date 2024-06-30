const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

// Draw a colorful gradient rectangle
const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "#ff6699");
gradient.addColorStop(1, "#66ccff");
context.fillStyle = gradient;
context.fillRect(50, 50, 200, 150);

// Draw a circle
context.beginPath();
context.arc(150, 125, 40, 0, 2 * Math.PI);
context.fillStyle = "#ffcc00";
context.fill();

// Add some text
context.font = "24px Arial";
context.fillStyle = "#333";
context.fillText("Canvas Art", 80, 30);

// Create a line
context.strokeStyle = "#009933";
context.lineWidth = 3;
context.beginPath();
context.moveTo(50, 200);
context.lineTo(250, 200);
context.stroke();
