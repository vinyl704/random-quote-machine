document.addEventListener('DOMContentLoaded', () => {
  let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
  let quoteText = document.getElementById('text');

  let newQuote = document.getElementById('new-quote');
  let author = document.getElementById('author');

  var xmlhttp = new XMLHttpRequest();

  //Main Functionality


  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      //Quote gist from camperbot represented as an object
      var myObj = JSON.parse(this.responseText);

      //Randomizing
      var randNum = Math.round(Math.random() * myObj.quotes.length);
      var randQuote = JSON.stringify(myObj['quotes'][randNum].quote);
      var randAuthor = JSON.stringify(myObj['quotes'][randNum].author);

      //New Quote Button Functionality
      newQuote.addEventListener('click', function newRand() {

        //updating variables and DOM objects
        randNum = Math.round(Math.random() * myObj.quotes.length);
        randQuote = JSON.stringify(myObj['quotes'][randNum].quote);
        randAuthor = JSON.stringify(myObj['quotes'][randNum].author);

        //updating view
        quoteText.textContent = randQuote;
        author.textContent = "-" + randAuthor.substr(1, randAuthor.length - 2);
      });
      quoteText.textContent = randQuote;
      author.textContent = "-" + randAuthor.substr(1, randAuthor.length - 2);
    }

    let stub = "https://www.twitter.com/intent/tweet?text=" + randQuote + author.textContent;
    document.getElementById('tweet-quote').setAttribute('href', stub);

  };


  //running request and getting json file 
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  









});