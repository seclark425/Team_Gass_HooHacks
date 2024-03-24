function toggleBoardGame(){
    var res = document.getElementById('resdiv');  
    res.style.display = 'none';
    var otft = document.getElementById('otftdiv');  
    otft.style.display = 'none';
    var bg = document.getElementById('bgdiv');  
    bg.style.display = 'block';

    document.getElementById("olive-garden").style.display = "none";
    document.getElementById('choose-error').style.display = "none";
}

function toggleRestaurant(){
    var otft = document.getElementById('otftdiv');  
    otft.style.display = 'none';
    var bg = document.getElementById('bgdiv');  
    bg.style.display = 'none';
    var res = document.getElementById('resdiv');  
    res.style.display = 'block';
    document.getElementById('wingspan').style.display = "none";
    document.getElementById('choose-error').style.display = "none";
}

function toggleOutfit(){
    var res = document.getElementById('resdiv');  
    res.style.display = 'none';
    var bg = document.getElementById('bgdiv');  
    bg.style.display = 'none';
    var otft = document.getElementById('otftdiv');  
    otft.style.display = 'block';
    document.getElementById('wingspan').style.display = "none";
    document.getElementById("olive-garden").style.display = "none";
    document.getElementById('choose-error').style.display = "none";
}

function toggleBoardGameOption(){
    var res = document.getElementById('resop');  
    res.style.display = 'none';
    var otft = document.getElementById('otftop');  
    otft.style.display = 'none';
    var bg = document.getElementById('bgop');  
    bg.style.display = 'block';
}

function toggleRestaurantOption(){
    var otft = document.getElementById('otftop');  
    otft.style.display = 'none';
    var bg = document.getElementById('bgop');  
    bg.style.display = 'none';
    var res = document.getElementById('resop');  
    res.style.display = 'block';
    
}

function toggleOutfitOption(){
    var res = document.getElementById('resop');  
    res.style.display = 'none';
    var bg = document.getElementById('bgop');  
    bg.style.display = 'none';
    var otft = document.getElementById('otftop');  
    otft.style.display = 'block';
}






