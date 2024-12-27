let num=prompt("enter the maximum number :");
let n=Math.floor(Math.random()*num)+1;
let guess= prompt("enter your guess :");
while(true){
    
    if(guess=="quit"){
        console.log("quit the game");
        break;
    }
   if(guess==n){
        console.log("Congrats!Your guess is correct");
        break;
      }
   else if(guess<n){
        guess= prompt(" Your guess was too small, please try again");
       
      }
   else{
        guess= prompt(" Your guess was too large, please try again");
    }
    }
