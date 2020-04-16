(function)() {
  function captureSearchResults() {

    var paperTitles = document.querySelectorAll('.gs_rt a');
    Array.from(paperTitles).forEach(function(article) {
      console.log(article.textContent) // Debugging to show results
    }); // Grabs title info of element

    var paperTitles = document.querySelectorAll('.gs_a');
    Array.from(paperTitles).forEach(function(article) {
      console.log(article.textContent)
    });// Grabs author information

    var paperTitles = document.querySelectorAll('.gs_rs')
    Array.from(paperTitles).forEach(function(article) {
      console.log(article.textContent)
    }); // Grabs shortened summary
  }
})();data_clk-atid
