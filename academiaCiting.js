console.log("Content script is running");
let aggregateArray = new Array();

// Converts search array data to objects to be stored in local storage
function storeData()
{
  console.log("storeData function was successfully called.");
  
}


// The function to capture search results
function captureSearchResults() {
  console.log("The capture function was successfully called.");

  var docTitle = document.title;
  console.log(docTitle);

  var paperAuthors = document.querySelectorAll(".gs_a");

  Array.from(paperAuthors).forEach(function(article) {
  }); // Can be used for debugging

  var paperTitles = document.querySelectorAll(".gs_rt a");

  Array.from(paperTitles).forEach(function(article) {
  }); // Can be used for debugging

  var paperSummaries = document.querySelectorAll(".gs_rs");

  Array.from(paperSummaries).forEach(function(article) {
  }); // Can be used for debugging

    console.log("Successful parsing of research results.")

    var authorArray = paperAuthors.length;
    var titleArray = paperTitles.length;
    var summaryArray = paperSummaries.length;

    if (authorArray != summaryArray) {
      console.log("There are an unequal number of authors and paper summaries.");
    }
    if (authorArray != titleArray) {
      console.log("There are an unequal number of authors and titles.");
    }

    //let aggregateArray = new Array();

    for (var i = 0; i < authorArray; i++) {
      let newPaper = {
        title: paperTitles[i].textContent,
        author: paperAuthors[i].textContent,
        summary: paperSummaries[i].textContent
      }
      console.log(paperAuthors[i].textContent);
      aggregateArray[i] = newPaper;
    }
}

browser.runtime.onMessage.addListener(captureSearchResults); // Checks for messages from the background script
