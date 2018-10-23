document.getElementById('bg_color').addEventListener('click', function(){
  if(document.getElementById('bg_color').checked){
  document.getElementById("bgbox").style.backgroundColor = "#0B162A";
  }else{
    document.getElementById("bgbox").style.backgroundColor = "transparent";
  }
});

document.getElementById('bg_image').addEventListener('click', function(){
  if(document.getElementById('bg_image').checked){
    document.getElementById("bgbox").style.backgroundImage = "url(images/cgt/chicago_bears_logo.png)";
  }else{
    document.getElementById("bgbox").style.backgroundImage= "none";
  }
});

document.getElementById('bg_repeat_x').addEventListener('click', function(){
  if(document.getElementById('bg_repeat_x').checked){
    document.getElementById("bgbox").style.backgroundRepeat = "repeat-x";
  }else{
    document.getElementById("bgbox").style.backgroundRepeat= "none";
  }
})
document.getElementById('bg_repeat_y').addEventListener('click', function(){
  if(document.getElementById('bg_repeat_y').checked){
    document.getElementById("bgbox").style.backgroundRepeat = "repeat-y";
  }else{
    document.getElementById("bgbox").style.backgroundRepeat= "none";
  }
});
document.getElementById('bg_position').addEventListener('click', function(){
  if(document.getElementById('bg_position').checked){
    document.getElementById("bgbox").style.backgroundPosition = "center";
  }else{
    document.getElementById("bgbox").style.backgroundPosition= "0% 0%";
  }
});

document.getElementById('bg_size_cover').addEventListener('click', function(){
  if(document.getElementById('bg_size_cover').checked){
    document.getElementById("bgbox").style.backgroundSize = "cover";
  }else{
    document.getElementById("bgbox").style.backgroundSize= "auto";
  }
});
document.getElementById('bg_size_contain').addEventListener('click', function(){
  if(document.getElementById('bg_size_contain').checked){
    document.getElementById("bgbox").style.backgroundSize = "contain";
  }else{
    document.getElementById("bgbox").style.backgroundSize= "auto";
  }
});

