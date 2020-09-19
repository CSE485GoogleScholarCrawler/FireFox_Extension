// "use strict";

// console.log("ASU Research Tool Deployed");

// function setItem() {
//   console.log("Items logged successfully");
// }

// function onError(error) {
//   console.log(error);
// }

// browser.runtime.onMessage.addListener((message) => {
//   if (message.command === "beastify") {
//     insertBeast(message.beastURL);
//   } else if (message.command === "reset") {
//     removeExistingBeasts();
//   }
// });
// browser.runtime.onMessage.addListener(request => {
//   console.log("Message from the background script:");
//   console.log(request.greeting);
//   captureSearchResults();
//   return Promise.resolve({response: "Hi from content script"});
// });





console.log("Content script is running");

function storeData()
{
  console.log("it's working");
}


// The function to capture search results
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

  // Checks for messages from background.
  // browser.runtime.onMessage.addListener((message) => {
  //   if (message.command === "cite") {
  //     captureSearchResults();
  //     console.log("Message received to start citing")
  //   } else if (message.command === "reset") {
  //     console.log("Received unknown message")
  //   }
  // });

browser.runtime.onMessage.addListener(captureSearchResults);
