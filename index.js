'use strict'

const apiEndpoint = 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyC2kJstPC4GVBdBqd6pnVB-dSd7febN2Js&part=snippet,contentDetails,statistics,status';

// *** Query results object:


// *** Event listener/handler

function getSearchTerms() {
  $('.search-button').on('submit', event => {
    event.preventDefault();
    let searchTerms = 
  })
}


// *** Template Generators


// *** Renderers


function getDataFromApi(searchTerm, callback) {
  const query = {
    q: `${searchTerm} in:name`,
    per_page: 5
  }
  $.getJSON(GITHUB_SEARCH_URL, query, callback);
}





//api key: AIzaSyC2kJstPC4GVBdBqd6pnVB-dSd7febN2Js