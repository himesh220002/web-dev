var noOfDrumBtn = document.querySelectorAll(".drum").length;

for(var i=0; i < noOfDrumBtn; i++){
    // ckick events
    //anonamus adding a function.
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var buttonInnerHtml = this.innerHTML[0];
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        
    });
}
// keyboard press 

document.addEventListener("keypress", function(event){
    
    makeSound(event.key);
    buttonAnimation(event.key);
    
});

function makeSound(key){    
    switch(key.toLowerCase()){
        case '1': 
            
            var pianokey1 = new Audio('piano-mp3/C1.mp3');
            pianokey1.play();
             
        break;
        case '2': 
            
            var pianokey2 = new Audio('piano-mp3/D1.mp3');
            pianokey2.play(); 
        break;
        case '3': 
            
            var pianokey3 = new Audio('piano-mp3/E1.mp3');
            pianokey3.play(); 
        break;
        case '4': 
            
            var pianokey4 = new Audio('piano-mp3/F1.mp3');
            pianokey4.play(); 
        break;
        case '5': 
            
            var pianokey5 = new Audio('piano-mp3/G1.mp3');
            pianokey5.play(); 
        break;
        case '6': 
            
            var pianokey6 = new Audio('piano-mp3/A1.mp3');
            pianokey6.play(); 
        break;
        case '7': 
            
            var pianokey7 = new Audio('piano-mp3/B1.mp3');
            pianokey7.play(); 
        break;
       



        case '8': 
            
            var pianokey1 = new Audio('piano-mp3/C2.mp3');
            pianokey1.play(); 
        break;
        case '9': 
            
            var pianokey2 = new Audio('piano-mp3/D2.mp3');
            pianokey2.play(); 
        break;
        case '0': 
            
            var pianokey3 = new Audio('piano-mp3/E2.mp3');
            pianokey3.play(); 
        break;
        case '-': 
            
            var pianokey4 = new Audio('piano-mp3/F2.mp3');
            pianokey4.play(); 
        break;
        case '=': 
            
            var pianokey5 = new Audio('piano-mp3/G2.mp3');
            pianokey5.play(); 
        break;
        case 'q': 
            
            var pianokey6 = new Audio('piano-mp3/A2.mp3');
            pianokey6.play(); 
        break;
        case 'w': 
            
            var pianokey7 = new Audio('piano-mp3/B2.mp3');
            pianokey7.play(); 
        break;




        case 'e': 
            
            var pianokey1 = new Audio('piano-mp3/C3.mp3');
            pianokey1.play(); 
        break;
        case 'r': 
            
            var pianokey2 = new Audio('piano-mp3/D3.mp3');
            pianokey2.play(); 
        break;
        case 't': 
            
            var pianokey3 = new Audio('piano-mp3/E3.mp3');
            pianokey3.play(); 
        break;
        case 'y': 
            
            var pianokey4 = new Audio('piano-mp3/F3.mp3');
            pianokey4.play(); 
        break;
        case 'u': 
            
            var pianokey5 = new Audio('piano-mp3/G3.mp3');
            pianokey5.play(); 
        break;
        case 'i': 
            
            var pianokey6 = new Audio('piano-mp3/A3.mp3');
            pianokey6.play(); 
        break;
        case 'o': 
            
            var pianokey7 = new Audio('piano-mp3/B3.mp3');
            pianokey7.play(); 
        break;


        case 'p': 
            
            var pianokey1 = new Audio('piano-mp3/C4.mp3');
            pianokey1.play(); 
        break;
        case '[': 
            
            var pianokey2 = new Audio('piano-mp3/D4.mp3');
            pianokey2.play(); 
        break;
        case ']': 
            
            var pianokey3 = new Audio('piano-mp3/E4.mp3');
            pianokey3.play(); 
        break;
        case 'a': 
            
            var pianokey4 = new Audio('piano-mp3/F4.mp3');
            pianokey4.play(); 
        break;
        case 's': 
            
            var pianokey5 = new Audio('piano-mp3/G4.mp3');
            pianokey5.play(); 
        break;
        case 'd': 
            
            var pianokey6 = new Audio('piano-mp3/A4.mp3');
            pianokey6.play(); 
        break;
        case 'f': 
            
            var pianokey7 = new Audio('piano-mp3/B4.mp3');
            pianokey7.play(); 
        break;


        case 'g': 
            
            var pianokey1 = new Audio('piano-mp3/C5.mp3');
            pianokey1.play(); 
        break;
        case 'h': 
            
            var pianokey2 = new Audio('piano-mp3/D5.mp3');
            pianokey2.play(); 
        break;
        case 'j': 
            
            var pianokey3 = new Audio('piano-mp3/E5.mp3');
            pianokey3.play(); 
        break;
        case 'k': 
            
            var pianokey4 = new Audio('piano-mp3/F5.mp3');
            pianokey4.play(); 
        break;
        case 'l': 
            
            var pianokey5 = new Audio('piano-mp3/G5.mp3');
            pianokey5.play(); 
        break;
        case ';': 
            
            var pianokey6 = new Audio('piano-mp3/A5.mp3');
            pianokey6.play(); 
        break;
        case 'z': 
            
            var pianokey7 = new Audio('piano-mp3/B5.mp3');
            pianokey7.play(); 
        break;


        case 'x': 
            
            var pianokey1 = new Audio('piano-mp3/C6.mp3');
            pianokey1.play(); 
        break;
        case 'c': 
            
            var pianokey2 = new Audio('piano-mp3/D6.mp3');
            pianokey2.play(); 
        break;
        case 'v': 
            
            var pianokey3 = new Audio('piano-mp3/E6.mp3');
            pianokey3.play(); 
        break;
        case 'b': 
            
            var pianokey4 = new Audio('piano-mp3/F6.mp3');
            pianokey4.play(); 
        break;
        case 'n': 
            
            var pianokey5 = new Audio('piano-mp3/G6.mp3');
            pianokey5.play(); 
        break;
        case 'm': 
            
            var pianokey6 = new Audio('piano-mp3/A6.mp3');
            pianokey6.play(); 
        break;
        case ',': 
    
            var pianokey7 = new Audio('piano-mp3/C7.mp3');
            pianokey7.play(); 
        break;
        case '.': 
            
            var pianokey6 = new Audio('piano-mp3/D7.mp3');
            pianokey6.play(); 
        break;
        case '/': 
    
            var pianokey7 = new Audio('piano-mp3/B6.mp3');
            pianokey7.play(); 
        break;

        default: console.log(key);
    }
}    

function buttonAnimation(currentKey){
    if(currentKey ==  1){
        currentKey = "a1";
    }
    else if(currentKey ==  2){
        currentKey = "a2";
    }
    else if(currentKey ==  3){
        currentKey = "a3";
    }
    else if(currentKey ==  4){
        currentKey = "a4";
    }
    else if(currentKey ==  5){
        currentKey = "a5";
    }
    else if(currentKey ==  6){
        currentKey = "a6";
    }
    else if(currentKey ==  7){
        currentKey = "a7";
    }
    else if(currentKey ==  8){
        currentKey = "a8";
    }
    else if(currentKey ==  9){
        currentKey = "a9";
    }
    else if(currentKey ==  0){
        currentKey = "a0";
    }
    else if(currentKey ==  '-'){
        currentKey = "a-";
    }
    else if(currentKey ===  '='){
        currentKey = "aa";
    }
    else if(currentKey ===  '['){
        currentKey = "ab";
    }
    else if(currentKey ===  ']'){
        currentKey = "ac";
    }
    else if(currentKey ===  ';'){
        currentKey = "ad";
    }
    else if(currentKey ===  ','){
        currentKey = "ae";
    }
    else if(currentKey ===  '.'){
        currentKey = "af";
    }
    else if(currentKey ===  '/'){
        currentKey = "ag";
    }
    else{
        currentKey = currentKey;
    }
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");  

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
