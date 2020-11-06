console.log("Content script is running");
let aggregateArray = new Array();

// Converts search array data to objects to be stored in local storage
function storeData()
{
  console.log("storeData function was successfully called.");
  
}

function parse(alpha) { // Used to extract the authors from the 'h3' header
  var position = alpha.indexOf("-");
  adjustedString = alpha.slice(0, position);
  return adjustedString;
}

// The function to capture search results
function captureSearchResults() {
  console.log("The capture function was successfully called.");

  //let temppaperUrls = document.querySelectorAll(".gs_rt a");
  //let paperUrls = temppaperUrls.getAttribute('href');

  //var docTitle = document.title;
  //console.log(docTitle);

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

      //output = parse(paperAuthors[i].textContent);

      let newPaper = {
        url: paperSummaries[i].getAttribute("href"),
        title: paperTitles[i].textContent,
        author: paperAuthors[i].textContent,
        summary: paperSummaries[i].textContent
      }
      
      //var link = paperSummaries.getAttribute("href");
     
      console.log(output);
      //console.log(paperAuthors[i].textContent + ": " + paperTitles[i].textContent);
      aggregateArray[i] = newPaper;
    }
}

function send_info(alpha){
  

  let xhr = new XMLHttpRequest();
  let url = "THIS NEEDS TO BE ADDED";

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  let json = JSON.stringify({
    paperURL = alpha.url,
    paperTitle = alpha.title,
    paperAuthor = alpha.author,
    paperSummary = alpha.summary
  });

  xhr.send(json);
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState === 4 && xhr.status === 200) {
      
  //   }
  // }
}

browser.runtime.onMessage.addListener(captureSearchResults); // Checks for messages from the background script
