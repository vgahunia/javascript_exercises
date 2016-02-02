$(document).ready(function() {

    var quotes = [
    {quote: "Do not take life too seriously. You will never get out of it alive.",
     author: "Elbert Hubbard"},
    {quote: "Always remember that you are absolutely unique. Just like everyone else.",
     author: "Margaret Mead"},
    {quote: "Don't cry because it's over, smile because it happened.",
     author: "Dr. Suess"},
    {quote: "Be yourself; everyone else is already taken.",
     author: "Oscar Wilde"},
    {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
     author: "Albert Einstein"},
    {quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
     author: "Mahatma Gandhi"},
    {quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
     author: "Mark Twain"},
    {quote: "We are all in the gutter, but some of us are looking at the stars.",
     author: "Oscar Wilde"},
    {quote: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
     author: "Friedrich Nietzsche"},
    {quote: "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
     author: "Groucho Marx"},
    {quote: "A day without sunshine is like, you know, night.",
     author: "Steve Martin"},
    {quote: "For every minute you are angry you lose sixty seconds of happiness.",
     author: "Ralph Waldo Emerson"},
    {quote: "I'm not afraid of death; I just don't want to be there when it happens.",
     author: "Woody Allen"},
    {quote: "If I had a flower for every time I thought of you...I could walk through my garden forever.",
     author: "Alfred Lord Tennyson"},
    {quote: "Not knowing when the dawn will come I open every door.",
     author: "Emily Dickinson"},
    {quote: "If you're lonely when you're alone, you're in bad company.",
     author: "Jean-Paul Sartre"},
    {quote: "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
     author: "Bill Watterson"},
    {quote: "'I'm always happy,' Sasha said. 'Sometimes I just forget.'",
     author: "Jenniger Egan"},
    {quote: "I haven't been everywhere, but it's on my list.",
     author: "Susan Sontag"},
    {quote:"Winter is coming.",
     author: "George R.R. Martin"}
  ]

  var max = quotes.length;
  var quote = '';
  var author = '';
  var randomQuote = '';
  getQuote();

  $('#9').click(function() {
    $('#quoteMachine').toggle("slide", 500);
  })

  function getQuote() {
    var place = Math.floor(Math.random() * (max));
    quote = quotes[place].quote;
    author = quotes[place].author;
    $('.quote').text('"' + quote + '"');
    $('.author').text("- " + author);
  }

  $('.header button').click(function() {
    getQuote();
  })
  
  $('.tweet').click(function() {
    var quot = 'https://twitter.com/intent/tweet?text=' + '"' + quote + '"  - ' + author;
    console.log(quot);
    $(".twitter").attr("href", quot);
  })



})