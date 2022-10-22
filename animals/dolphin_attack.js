function attack(){
    var jumpscare = document.getElementById("jumpscare"); 
    jumpscare.style.visibility="visible"; 
    var audio = document.getElementById("screech"); 
    audio.play(); 
    document.body.scrollTop= document.documentElement.scrollTop =0; 

}



