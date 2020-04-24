'use strict'
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
ctx.fillRect(0, 0, canvas.width, canvas.height)
let backgroundPicture = new Image()
backgroundPicture.src = canvas.toDataURL()
$('.te-form').hide()


let clearForm = () => {
  $('#textWP').val('')
  $('#widthTextPos').val(50)
  $('#heightTextPos').val(50)
}


let draw = () => {
  ctx.drawImage(backgroundPicture, 0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#FFF'
  ctx.font = '72pt Impact'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText($('#textWP').val(), $('#widthTextPos').val() / 100 * 1080,
    (100 - $('#heightTextPos').val()) / 100 * 1920)
}

let newText = () => {
  $('.te-button').hide()
  $('.te-form').show()
}

let saveText = () => {
  $('.te-button').show()
  $('.te-form').hide()
  backgroundPicture.src = canvas.toDataURL()
  clearForm()
}

let deleteText = () => {
  $('.te-button').show()
  $('.te-form').hide()
  clearForm()
}

setInterval(draw, 10)
