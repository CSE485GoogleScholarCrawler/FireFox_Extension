function captureSearchResults() {
  var paperTitles = document.querySelectorAll('.gs_rt a');
  Array.from(paperTitles).forEach(function(article) {
    console.log(article.textContent) // Debugging to show results
  }); // Grabs title info of element

  var paperTitles = document.querySelectorAll('.gs_a');
  console.log(paperTitles)
  Array.from(paperTitles).forEach(function(article) {
    console.log(article.textContent)
  });// Grabs author information

  var paperTitles = document.querySelectorAll('.gs_rs')
  Array.from(paperTitles).forEach(function(article) {
    console.log(article.textContent)
  }); // Grabs shortened summary
  console.log("caprtureSearchResults function has run");
}

console.log("academiaCiting.js has run");
browser.browserAction.onClicked.addListener(captureSearchResults);
