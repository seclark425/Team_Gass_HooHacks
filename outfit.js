var state ={
    i:0,
    j:0,
    k:0
};

function nextTop(){
    var top=document.getElementById("tops");
    if (state.i===0){
        top.setAttribute("class","top1");
            state.i++;
    }
    else if (state.i===1){
        top.setAttribute("class", "top2");
            state.i++;
    }
    else if (state.i===2){
        top.setAttribute("class", "top3");
            state.i++;
    }
    else if (state.i===3){
        top.setAttribute("class", "top4");
            state.i=0;
    }

}
function previousTop(){
    var top=document.getElementById("tops");
    if (state.i===3){
        top.setAttribute("class","top3");
            state.i--;
    }
    else if (state.i===2){
        top.setAttribute("class", "top2");
            state.i--;
    }
    else if (state.i===1){
        top.setAttribute("class", "top1");
            state.i--;
    }
    else if (state.i===0){
        top.setAttribute("class", "top4");
            state.i=3;
    }

}
function nextPant(){
    var top=document.getElementById("pants");
    if (state.j===0){
        top.setAttribute("class","pant1");
            state.j++;
    }
    else if (state.j===1){
        top.setAttribute("class", "pant2");
            state.j++;
    }
    else if (state.j===2){
        top.setAttribute("class", "pant3");
            state.j++;
    }
    else if (state.j===3){
        top.setAttribute("class", "pant4");
            state.j=0;
    }

}
function previousPant(){
    var top=document.getElementById("pants");
    if (state.j===3){
        top.setAttribute("class","pant3");
            state.j--;
    }
    else if (state.j===2){
        top.setAttribute("class", "pant2");
            state.j--;
    }
    else if (state.j===1){
        top.setAttribute("class", "pant1");
            state.j--;
    }
    else if (state.j===0){
        top.setAttribute("class", "pant4");
            state.j=3;
    }

}
function nextShoe(){
    var top=document.getElementById("shoes");
    if (state.k===0){
        top.setAttribute("class","shoe1");
            state.k++;
    }
    else if (state.k===1){
        top.setAttribute("class", "shoe2");
            state.k++;
    }
    else if (state.k===2){
        top.setAttribute("class", "shoe3");
            state.k++;
    }
    else if (state.k===3){
        top.setAttribute("class", "shoe4");
            state.k=0;
    }

}
function previousShoe(){
    var top=document.getElementById("shoes");
    if (state.k===3){
        top.setAttribute("class","shoe3");
            state.k--;
    }
    else if (state.k===2){
        top.setAttribute("class", "shoe2");
            state.k--;
    }
    else if (state.k===1){
        top.setAttribute("class", "shoe1");
            state.k--;
    }
    else if (state.k===0){
        top.setAttribute("class", "shoe4");
            state.k=3;
    }

}
window.onload=defaultvar;
function defaultvar(){
    state.i=0;
    state.j=0;
    state.k=0;
}
