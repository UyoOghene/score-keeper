const p1span = document.querySelector('#p1score');
const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const p2span = document.querySelector('#p2score');
const resetBtn = document.querySelector('#resetbtn');
const winningScoreselect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;
 p1btn.addEventListener('click',function(){
    if(!isGameOver){
        p1Score +=1;
    if(p1Score == winningScore){
        isGameOver = true;
        console.log('win')
        p1span.classList.add('win');
        p2span.classList.add('lose');

    }
        p1span.textContent = p1Score;
}
 } )

 p2btn.addEventListener('click',function(){
    if(!isGameOver){
        p2Score +=1;
    if(p2Score == winningScore){
        isGameOver = true;
        p2span.classList.add('win');
        p1span.classList.add('lose');
    }
        p2span.textContent = p2Score;
}
 } )

 winningScoreselect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
 })

 resetBtn.addEventListener('click', reset);

 function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1span.textContent = 0;
    p2span.textContent = 0;
    p2span.classList.remove('win','lose');
    p1span.classList.remove('lose', 'win');

 }




