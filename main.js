// 1. computer need to pick the random number
let computerNum = Math.floor(Math.random() * 100) + 1;
let history = []
let chance = 5;
let resultString = ''



let time = 10 // time start from 0
let myTime; // timer will be assign to this variable
function timecounting() {
    myTime = setInterval(() => {
        time -- //  
        document.getElementById('timecount').innerHTML = time
        if(time<=0){
          
          gameOver('time')
          
        }
    }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}
timecounting()

function timeOut() {
  clearInterval(myTime);
}

function gameOver (message) {
  timeOut()
  document.getElementById("guessButton").disabled = true;
  document.getElementById("gameResult").innerHTML=`you are out of ${message}`
}
// 2. when user click the guess, it will fire the function 'guess'
function guess() {
  

  chance--
  if(chance<=0){
    gameOver('chance')
  }
  // 3. grab the value that user typed
  let userNum = document.getElementById("guessNumber").value
  let resultMessage = '' // save the result message 

  // 4. compare with the value computer picked with user value
  // 5. if computer num > user num ,"too low"
  if(computerNum > userNum){
    resultMessage ="too low"
  }// 6. if computer num < user num ,"too high"
  else if (computerNum < userNum){
    resultMessage ="too high"
  }// 7. if computer num === user num , "correct"
  else if(computerNum == userNum){
    resultMessage ="correct"
  }
  
  // keep the history 
  history.push(userNum)// add the userNum into history array
  document.getElementById("guessNumber").value =''
  // 8. show the result to user
  document.getElementById("chanceArea").innerHTML = `remain chance : ${chance}`
  document.getElementById("resultArea").innerHTML = `${resultMessage}`
  //document.getElementById("historyArea").innerHTML= `History: ${history}`// show that array
  for(let i =0 ;i<history.length;i++){
    resultString = resultString + `<div>${history[i]}</div>  `
    console.log("result String",resultString)
  }
  document.getElementById("historyArea").innerHTML = resultString
  resultString = ``

}

function reset() {
  // reset the value 
  time = 10
  chance =  5
  history = []
  computerNum = Math.floor(Math.random() * 100) + 1;

  //reset the UI
  document.getElementById('timecount').innerHTML = time
  document.getElementById("chanceArea").innerHTML = `remain chance : ${chance}`
  document.getElementById("resultArea").innerHTML = ``
  document.getElementById("historyArea").innerHTML= `History: ${history}`
  document.getElementById("gameResult").innerHTML=``
  document.getElementById("guessButton").disabled = false; // not disable,, able 

  // call the timer again
  timecounting()
}




// 1. make the chance feature (only can have 5 chance )
// 2. reset feature (when user click the reset button, it will reset everything)
// 3. if user win, or lose the guess button will be disable (can not click)
// 4. add timer feature (if you can not finish game within 20sec then you lose)

