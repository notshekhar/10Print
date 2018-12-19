let canvas = document.querySelector('#canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let ctx = canvas.getContext('2d')
let arr = [{x:0, y:0}, {x:canvas.width/20, y:canvas.height/20}]
let x = 0, y=0


let interval = setInterval(function(){
  let i=0
  let lx = x+canvas.width/50, ly = y+canvas.height/50
  ctx.beginPath();
  ctx.strokeStyle = "white"
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.lineWidth = 5
  if(Math.random()>0.5){
    ctx.moveTo(x, y)
    ctx.lineTo(lx, ly)
  }else{
    ctx.moveTo(lx, y)
    ctx.lineTo(x, ly)
  }
  ctx.stroke()
  x+=canvas.width/50
  i++
  if(x>canvas.width){
    console.log('next line')
    i=0
    x=0
    y+=canvas.height/50
  }
  if(y>canvas.height){
    console.log('over')
    clearInterval(interval)
  }
}, 100)
