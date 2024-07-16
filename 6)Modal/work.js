document.getElementById('open').addEventListener('click',function(){
  document.getElementById('modal').style.display='block';
  document.body.style.background='linear-gradient(rgba(135, 206, 250, 0.3),rgba(135, 206, 250, 0.3)),url("background-clouds.jpg")';
  document.body.style.backgroundSize='cover';
});

document.getElementById('close').addEventListener("click",function(){
  document.getElementById('modal').style.display='none';
  document.body.style.backgroundImage='url("background-clouds.jpg")';
});