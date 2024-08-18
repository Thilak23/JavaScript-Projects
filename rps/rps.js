let score = {
  wins : 0,
  losses : 0,
  tie : 0
}

let isAutoPlaying = false;
let interValID;
const play = document.querySelector('.auto-play');

function autoPlay(){
  if(!isAutoPlaying){
    interValID = setInterval(function(){
      // const playerChoice = computer();
      rps(computer()); 
    },1000);
    isAutoPlaying = true;
    play.innerHTML = 'Stop Play';
  }
  else{
    clearInterval(interValID);
    isAutoPlaying = false;
    play.innerHTML = 'Auto Play';
  }
}

function rps(playerMove){

  let computermove = computer();
  let result = '';

  if(playerMove === 'Rock'){
      if(computermove === 'Rock'){
          result = 'Tie';
      }
      else if (computermove === 'Paper'){
          result = 'Lose';
      }
      else if(computermove === 'Scissors'){
          result = 'Won';
      }
  }
  else if(playerMove === 'Paper'){
      if(computermove === 'Rock'){
          result = 'Won';
      }
      else if (computermove === 'Paper'){
          result = 'Tie';
      }
      else if(computermove === 'Scissors'){
          result = 'Lose';
      }
  }
  else if(playerMove === 'Scissors'){
      if(computermove === 'Rock'){
          result = 'Lose';
      }
      else if (computermove === 'Paper'){
          result = 'Won'
      }
      else if(computermove === 'Scissors'){
          result = 'Tie'
      }
  }

  if(result === 'Won'){
      score.wins = score.wins += 1;
  }
  else if(result === 'Lose'){
      score.losses = score.losses += 1;
  }
  else if(result === 'Tie'){
      score.tie = score.tie += 1;
  }

  document.querySelector('.res').innerHTML = `You ${result}`
  document.querySelector('.pick').innerHTML = `<span class="txt">You</span> <img src="assets/${playerMove}-emoji.png" alt="" class="resimg"> <span class="dash">-</span> <span class="txt">Computer</span> <img src="assets/${computermove}-emoji.png" alt="" class="resimg">`
  updatescore();
  

//     alert(`You picked ${playerMove}. Computer picked ${computermove}. You ${result}
//   wins : ${score.wins}, lose : ${score.losses}, tie : ${score.tie}`);

}

function computer(){
  let computermove = '';
  let rand = Math.random();
  if(rand >= 0 && rand < 1/3){
      computermove = 'Rock';
  }
  else if(rand >= 1/3 && rand < 2/3){
      computermove = 'Paper';
  }
  else if(rand >= 2/3 && rand < 1){
      computermove = 'Scissors'
  }
  return computermove;
}

function reboot(){
  score.wins = 0;
  score.losses = 0;
  score.tie = 0;
}


function updatescore(){
  document.querySelector('.scores').innerHTML = `wins : ${score.wins}, lose : ${score.losses}, tie : ${score.tie}`
}

function reset(){
  reboot();
  updatescore();
}