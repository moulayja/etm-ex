let g = document.querySelectorAll("p");  
 
for(var i=0;  i< g.length; i++){
    if( i % 3 === 0){
        g[i].classList.add("bgGreen")
    }else{
        g[i].classList.add("bgYellow")
    }
}

