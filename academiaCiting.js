console.log("ASU Research Tool Deployed");

function captureSearchResults() {
  var paperTitles = document.querySelectorAll('.gs_rt a');
  Array.from(paperTitles).forEach(function(article) {
    try {
      let titles = browser.storage.local.get({[paperTitles]: null});
    browser.storage.local.set({[paperTitles]: titles[paperTitles]})
    } catch (error) {
      console.log(error);
    }

    console.log(article.textContent) // Debugging to show results
  }); // Grabs title info of element

  var paperAuthors = document.querySelectorAll('.gs_a');
  console.log(paperAuthors)
  Array.from(paperAuthors).forEach(function(article) {
    console.log(article.textContent)
  });// Grabs author information

  var paperSummaries = document.querySelectorAll('.gs_rs')
  Array.from(paperSummaries).forEach(function(article) {
    console.log(article.textContent)
  }); // Grabs shortened summary
  console.log("caprtureSearchResults function has run");
}
browser.browserAction.onClicked.addListener(captureSearchResults);
