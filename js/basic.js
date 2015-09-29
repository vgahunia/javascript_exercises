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

var c = 10;
function hallo(){   
    if(true){     
        var c = 2;  
    }   
    console.log(c);
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
