function show_hide_exp() {  
    var click = document.getElementById("experience").getElementsByClassName("section-experience");  
    if(click[0].style.display ==="none") {  
    click[0].style.display ="block";  
    } else {  
    click[0].style.display ="none";  
    }   
}  

function show_hide_edu() {  
    var click = document.getElementById("education").getElementsByClassName("section-education");  
    if(click[0].style.display ==="none") {  
        click[0].style.display ="block";  
        } else {  
        click[0].style.display ="none";  
        }   
}  

function show_hide_cert() {  
    var click = document.getElementById("certificates").getElementsByClassName("section-certificates");  
    if(click[0].style.display ==="none") {  
        click[0].style.display ="block";  
        } else {  
        click[0].style.display ="none";  
        }    
}  

function show_hide_ref() {  
    var click = document.getElementById("references").getElementsByClassName("section-references");  
    if(click[0].style.display ==="none") {  
        click[0].style.display ="block";  
        } else {  
        click[0].style.display ="none";  
        }    
}  

function random_color(){
    var o = Math.round, r = Math.random, s = 255;
    var click = document.getElementsByClassName("logo");
    click = Array.from(click);
    var color = "rgba(" + o(r()*s) + "," + o(r()*s) + "," + o(r()*s) + "," + r().toFixed(1) + ")"; 
    click.forEach(element => {
        element.style.backgroundColor = color;
    });
}
