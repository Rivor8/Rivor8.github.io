let canvas = document.getElementById('cnv')
let ctx = canvas.getContext('2d')

ctx.fillRect(0, 0, canvas.width, canvas.height);

let draw = () => {

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#FFF";
  ctx.font = "72pt Impact";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText($('#textWP').val(), $('#widthTextPos').val() / 100 * 1080,
              (100 - $('#heightTextPos').val()) / 100 * 1920);
}
setInterval(draw, 10)