var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var w = canvas.parentNode.offsetWidth;
var h = canvas.parentNode.offsetHeight;
canvas.width = w;
canvas.height = h;
/*灰色背景*/
context.fillStyle = "#aaa";
context.fillRect(0, 0, w, h);
/*外框*/
context.strokeStyle = "#fff";
context.lineWidth = 8;
context.strokeRect(0, 0, w, h);
/*脸*/
context.strokeStyle = "#b3b3b3";
context.fillStyle = "#b3b3b3";
context.lineWidth = 8;
context.beginPath();
context.arc(145, 68, 50, 0, Math.PI * 2, true);
context.stroke();
context.closePath();
/*嘴巴*/
context.beginPath();
context.arc(145, 78, 25, 0, Math.PI, false);
context.fill();
context.closePath();
/*左眼*/
context.beginPath();
context.arc(125, 48, 8, 0, Math.PI * 2, true);
context.fill();
context.closePath();
/*右眼*/
context.beginPath();
context.arc(165, 48, 8, 0, Math.PI * 2, true);
context.fill();
context.closePath();
/*写字*/
context.fillStyle = "#828282";
context.font = "700 37px microsoft yahei"
context.textAlign = "center";
context.fillText("Raspa aquí", w / 2, (h + 20) / 2);
context.globalCompositeOperation = "destination-out";
var offsetX = canvas.parentNode.offsetLeft;
var offsetY = canvas.parentNode.offsetTop;
var mousedown = false;

canvas.addEventListener("touchstart", function(e) {
  e.preventDefault();
  mousedown = true;
});

canvas.addEventListener("touchmove", function(e) {
  e.preventDefault();

  if (mousedown) {
    if (e.changedTouches) {
      e = e.changedTouches[e.changedTouches.length - 1];
    }
    var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0;
    var y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
    context.beginPath()
    context.arc(x, y, 10, 0, Math.PI * 2);
    context.fill();
  }
});

canvas.addEventListener("touchend", function(e) {
  e.preventDefault();
  mousedown = false;
  var num = 0;
  var datas = context.getImageData(50, 25, w - 110, h - 50);
  for (var i = 0; i < datas.data.length; i++) {
    if (datas.data[i] == 0) {
      num++;
    };
  };
  if (num >= datas.data.length * 0.75) {
    // 达到面积要求时执行的内容    
    alert("Cuvântul îl găsești pe Telegram. Trimite cuvântul corect pentru a merge mai departe.");   
  }
});

canvas.addEventListener("mousedown", function(e) {
  e.preventDefault();
  mousedown = true;
});

canvas.addEventListener("mousemove", function(e) {
  e.preventDefault();

  if (mousedown) {
    if (e.changedTouches) {
      e = e.changedTouches[e.changedTouches.length - 1];
    }
    var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0;
    var y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
    context.beginPath()
    context.arc(x, y, 10, 0, Math.PI * 2);
    context.fill();
  }
});

canvas.addEventListener("mouseup", function(e) {
  e.preventDefault();
  mousedown = false;
  var num = 0;
  var datas = context.getImageData(50, 25, w - 110, h - 50);
  for (var i = 0; i < datas.data.length; i++) {
    if (datas.data[i] == 0) {
      num++;
    };
  };
  if (num >= datas.data.length * 0.75) {
    // 达到面积要求时执行的内容    
    alert("Cuvântul îl găsești pe Telegram. Trimite cuvântul corect pentru a merge mai departe.");   
  }
});

var shuzi = document.getElementsByClassName("shuzi");
shuzi[0].style.display = "block";