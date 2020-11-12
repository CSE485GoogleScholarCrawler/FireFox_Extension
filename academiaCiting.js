console.log("Content script is running");
let aggregateArray = new Array();

// The function to capture search results
function captureSearchResults() {
  console.log("The capture function was successfully called.");

  var paperAuthors = document.querySelectorAll(".gs_a");
  var paperTitles = document.querySelectorAll(".gs_rt a");
  var paperSummaries = document.querySelectorAll(".gs_rs");


  Array.from(paperAuthors).forEach(function(article) {
  }); // Can be used for debugging
  Array.from(paperTitles).forEach(function(article) {
  }); // Can be used for debugging
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

    for (var i = 0; i < authorArray; i++) {
      let newPaper = {
        url: paperSummaries[i].getAttribute("href"),
        title: paperTitles[i].textContent,
        author: paperAuthors[i].textContent,
        summary: paperSummaries[i].textContent,
        citing: null
      }
      send_info(JSON.stringify(newPaper));
      aggregateArray[i] = newPaper;
    }
}

function send_info(alpha){
  let xhr = new XMLHttpRequest();
  let url = "localhost:6161";
  console.log(alpha); // Debug stringify object
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content_Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
       console.log("POST Request Success");
    }
    else {
      console.log("POST Request Failed")
    }
  }
  xhr.send(alpha);
}

browser.runtime.onMessage.addListener(captureSearchResults); // Checks for messages from the background script
