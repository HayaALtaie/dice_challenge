let randomimg1 = Math.floor(Math.random()*6)+1
let image1 = '/images/dice'+randomimg1+'.png'
document.querySelector('.img1').setAttribute('src' ,image1)

let randomimg2 = Math.floor(Math.random()*6)+1
let image2 = '/images/dice'+randomimg2+'.png'
document.querySelector('.img2').setAttribute('src' ,image2)

if(randomimg1 > randomimg2){
  document.querySelector('h1').innerHTML='player 1 wins'
}
else if(randomimg2 > randomimg1){
  document.querySelector('h1').innerHTML='player 2 wins'
}
else{
  document.querySelector('h1').innerHTML='متعادلين'
}