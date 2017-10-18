// pick a random word
let words = ["Ryu","Daigo","FChamp"];
let guessed = false;
let guess = "";
let word = words[Math.floor(Math.random()*words.length)];
let progress = [];
// a simple comment for github desktop
for(let i = 0; i < word.length; i++){
  progress.push("_");
}
  while(!guessed){
    alert(progress);
    guess = prompt("Guess the word!");

    if(!guess){
      guess = "quit";
      break;
    }else if(guess.toLowerCase() === "quit"){
      break;
    }else if(guess.length < 1){
      alert("Enter a word!");
    }else{
      for(let ltr of guess){
        if(word.toLowerCase().indexOf(ltr.toLowerCase()) > -1){
          progress[word.toLowerCase().indexOf(ltr.toLowerCase())] = ltr;
        }
      }
    }
    // lets try a PR now
    // has the user answered the question
    if(progress.indexOf("_") == -1){
      guessed = false;
      // i just broke the game logic
    }
  }
// one moar thing
  if(guess.toLowerCase() === "quit"){
    alert("You quit.");
  }else{
    alert("You guessed it!\n" + "word: " + word );
    alert("This is the end of the game.");
  }
