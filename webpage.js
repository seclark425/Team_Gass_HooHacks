function toggleBoardGame(){
    var res = document.getElementById('resdiv');  
    res.style.display = 'none';
    var otft = document.getElementById('otftdiv');  
    otft.style.display = 'none';
    var bg = document.getElementById('bgdiv');  
    bg.style.display = 'block';
}

function toggleRestaurant(){
    var otft = document.getElementById('otftdiv');  
    otft.style.display = 'none';
    var bg = document.getElementById('bgdiv');  
    bg.style.display = 'none';
    var res = document.getElementById('resdiv');  
    res.style.display = 'block';
}

function toggleOutfit(){
    var res = document.getElementById('resdiv');  
    res.style.display = 'none';
    var bg = document.getElementById('bgdiv');  
    bg.style.display = 'none';
    var otft = document.getElementById('otftdiv');  
    otft.style.display = 'block';
}
