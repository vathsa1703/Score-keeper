
const p1button = document.querySelector('#button1');
const p2button = document.querySelector('#button2');
const p1display = document.querySelector('#p1Display');
const p2display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#button3');
const WinningScoreSelect = document.querySelector('#playupto');
 let p1Score = 0;
 let p2Score = 0;
 let WinningScore=5;
 let isGameOver=false;

 
p1button.addEventListener('click',function(){
    if(isGameOver==false){
         p1Score=p1Score+1;
    if(WinningScore==p1Score){
        isGameOver=true;
        
 }
    p1display.textContent=p1Score
}
})

p2button.addEventListener('click',function(){
    if(isGameOver==false){
         p2Score=p2Score+1;
    if(WinningScore==p2Score){
        isGameOver=true;
 }
    p2display.textContent=p2Score
}
})
WinningScoreSelect.addEventListener('change',function(){
    WinningScore = parseInt(this.value);
})

resetButton.addEventListener('click',reset)
    function reset () {
        isGameOver = 0;
        p1Score=0;
        p2Score=0;
        p1display.textContent =0;
         p2display.textContent=0;
         
}

    
 
 