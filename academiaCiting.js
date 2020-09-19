console.log("ASU Research Tool Deployed");

function setItem() {
  console.log("Items logged successfully");
}

function onError(error) {
  console.log(error);
}

// let test = {
//   name: "title",
//   authors: "No Author",
//   summary: "Here is the summary"
// }

// browser.storage.local.set(test)
//   .then(setItem, onError);
//let settingItem = browser.storage.local.set(keys)
function storeData(value)
{
  console.log("it's working");
  console.log(value);
}

function captureSearchResults() {
  console.log("The capture function was successfully called.");

  var docTitle = document.title;
  console.log(docTitle);

  var paperAuthors = document.querySelectorAll(".gs_a");

  Array.from(paperAuthors).forEach(function(article) {
    console.log("Author: ");
    console.log(article.textContent)
  });

  // var paperTitles = document.querySelectorAll('.gs_rt a');
  // Array.from(paperTitles).forEach(storeData);
  // console.log("it's NOT working");  
  //   browser.storage.local.set({article})
  //     .then(setItem, onError);
  //   //console.log(article.textContent) // Debugging to show results
  //}); // Grabs title info of element

  // var paperAuthors = document.querySelectorAll('.gs_a');
  // console.log(paperAuthors)
  // Array.from(paperAuthors).forEach(function(article) {
  //   console.log(article.textContent)
  // });// Grabs author information

  // var paperSummaries = document.querySelectorAll('.gs_rs')
  // Array.from(paperSummaries).forEach(function(article) {
  //   console.log(article.textContent)
  // }); // Grabs shortened summary
  // console.log("captureSearchResults function has run");
}


browser.browserAction.onClicked.addListener(captureSearchResults);