$(document).ready(function() {
   $('#1').hover(function() {
        $('#question').text("A program asks the user for a number n and prints the sum of the numbers 1 to n.")
    })
   $('#1').mouseout(function() {
        $('#question').text("")
    })
   $('#2').hover(function() {
        $('#question').text("Same as previous except only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17.")
    })
   $('#2').mouseout(function() {
        $('#question').text("")
    })
   $('#3').hover(function() {
        $('#question').text("This program asks for any word and returns true if the word is a palindrome and false if not.")
    })
   $('#3').mouseout(function() {
        $('#question').text("")
    })
   $('#4').hover(function() {
        $('#question').text("This program asks the user for a number n and gives a choice between computing the sum and computing the product of 1,…,n.")
    })
   $('#4').mouseout(function() {
        $('#question').text("")
    })
   $('#5').hover(function() {
        $('#question').text("This program prints a multiplication table for numbers up to 12.")
    })
   $('#5').mouseout(function() {
        $('#question').text("")
    })
   $('#6').hover(function() {
        $('#question').text("This program prints all prime numbers.")
    })
   $('#6').mouseout(function() {
        $('#question').text("")
    })
   $('#7').hover(function() {
        $('#question').text("A guessing game where you have to guess a secret number. After every guess the program tells you whether your number was too large or too small. At the end, the number of tries needed is printed.")
    })
   $('#7').mouseout(function() {
        $('#question').text("")
    })
   $('#8').hover(function() {
        $('#question').text("This program checks if a string ends with the given target string and returns with true or false.")
    })
   $('#8').mouseout(function() {
        $('#question').text("")
    })
   $('#9').hover(function() {
        $('#question').text("This link brings up a random quote machine and you can tweet the quote if you'd like.")
    })
   $('#9').mouseout(function() {
        $('#question').text("")
    })
   $('#10').hover(function() {
        $('#question').text("A Javascript calculator - COMING SOON.")
    })
   $('#10').mouseout(function() {
        $('#question').text("")
    })

})


// A program asks the user for a number n and prints the sum of the numbers 1 to n.

function one() {
    var x = prompt("Enter a number, any number.");
    x = parseInt(x);
    var answer = 0;
    for (var i = x; i > 0; i--) {
        answer = answer + i;
        console.log(answer);    
    }
    document.getElementById('answer').innerHTML = "The total sum is " +answer;
}


// Same as previous except only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

function two() {
    var x = prompt("Enter a number, any number.");
    x = parseInt(x);
    var answer = 0;
    for (var i = x; i > 0; i--) {
        if (i % 3 == 0 || i % 5 == 0) {
            answer = answer + i;
        } else {
            answer = answer;
            console.log(answer);
        }    
    }
    document.getElementById('answer').innerHTML = "The total sum is " +answer;
}


//a program asks for any word and returns true if the word is a palindrome and false if not

function three() {
    var x = prompt("Enter a palindrome.");
    var y = x.toLowerCase();
    var b = x.length - 1;
    var answer;
    for (var i = 0; i < y.length; i++) {
        if (y.charAt(i) === y.charAt(b)) {
            answer = true;
            b = b -1;
        } else {
            answer = false;
            break;
    }
    console.log(answer);
    }
    document.getElementById('answer').innerHTML = answer;
}

//Write a program that asks the user for a number n and gives him the possibility to choose between computing the sum and computing the product of 1,…,n.

function four() {
    var num = prompt("Enter a number, any number.");
    num = parseInt(num);
    var x;
    // while (x == false) {
        var choice = prompt("Okay great. Now choose if you'd like to the see the sum or the product of your chosen number.");
        choice = choice.toLowerCase();
    //     if (choice == "sum" || choice == "product") {
    //         x == true;
    //     } else {
    //         x == false;
    //     }
    // }
    var answer;
    if (choice == "sum") {
        answer = 0;
        for (var i = num; i > 0; i--) {
            answer = answer + i;
            console.log(answer);
        }    
    } else if (choice == "product") {
        answer = 1;
        for (var i = num; i > 0; i--) {
            answer = answer * i;
            console.log(answer);
        }
    } else {
        alert("Not working. You have to write in sum or product! Try again!");
    }
    document.getElementById('answer').innerHTML = "Your answer is " +answer;
}

// Write a program that prints a multiplication table for numbers up to 12.

function five() {
    var table = "";
    for (var i = 1; i <= 12; i++) {
        var row = "";
        for (var j = 1; j<= 12; j++) {
            x = j * i;
            x = x.toString();
            row += x + " ";
        }
        console.log(row);
        table += row + "<br>";
        console.log(table);
    }
    document.getElementById('answer').innerHTML = table;
}

//This program prints all prime numbers.

function six() {
    var prime = "2, 3, 5, 7, 9, ";
    for (var i = 3; i < 1000; i++) {
        if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0 || i % 9 == 0) {
            prime = prime;            
        } else {
            i = i.toString();
            prime = prime + i + ", ";
        }   
    }
    document.getElementById('answer').innerHTML = "Since you were wondering, all primes up to 1,000 are " + prime;
}


//A guessing game where you have to guess a secret number. After every guess the program tells you whether your number was too large or too small. At the end, the number of tries needed is printed. It counts only as one try if you input the same number multiple times consecutively.

function seven() {
  document.getElementById('answer').innerHTML = ""
  var answer = Math.floor(Math.random()*(101));
    console.log(answer);
  var guess= prompt("Pick a number, any number from 1  to 100.");
  var count = 1;
  var guesses = "So for you have guessed: " + guess + " ";
  console.log(guesses);
  document.getElementById('answer').innerHTML = guesses;
  for (var i = 0; i < 100; i++) {
    var x = parseInt(guess);
    console.log(x);
    if (x === answer) {
      break;
    } 
    else if (x < answer) {
      guess = prompt("You guessed too low. Guess again.");
      count++;
      guesses += guess + " ";
      console.log(guesses);
    } 
    else if (x > answer) {
      guess = prompt("You guess too high. Guess again.");
      count++;
      guesses += guess + " ";
      console.log(guesses);
    }
    document.getElementById('answer').innerHTML = guesses;
  }
  document.getElementById('answer').innerHTML = "Amazing guess!!! You answered in " + count + " guesses!"
}

//This program checks if a string ends with the given target string and returns with true or false.

function eight() {
  var str = prompt("Provide a sentence");
  var target = prompt("Provide a string that may or may not be inside the first string.")
  var x;
  var x2;
  if (target.length > 1) {
     x = str.split(" ");
     x2 = x.join("");
     //console.log(x2);
     var y = target.length;
     var z = x2.length;
     var a = z - (y-1);
      console.log(y, z, a, x2.slice(a-1, z));
    
     if (x2.slice(a-1, z) == target) {
       document.getElementById('answer').innerHTML = "true";
     } else {
       document.getElementById('answer').innerHTML = "false";;
     }
  } else {
      x = str.length;
      console.log(x);
      if (str[x-1] == target) {
        console.log(str[x-1]);
        document.getElementById('answer').innerHTML = "true";;
      } else {
        document.getElementById('answer').innerHTML = "false";;
      }
    }
}

