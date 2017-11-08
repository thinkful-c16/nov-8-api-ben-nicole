'use strict';

$(document).ready(function(){
  getSearchTerms();
});

const STORE = {
  currentState: 'listening', //searching, querying, displaying
  thumbnails: []
};

// function render(STORE) {
//   if (STORE.currentState === 'listening') {

//   }
// }

const apiEndpoint = 'https://www.googleapis.com/youtube/v3/videos';
const apiKey = '7lCDEYXw3mM&key=AIzaSyC2kJstPC4GVBdBqd6pnVB-dSd7febN2Js';

// *** Query results object:S

function queryAPI(query) {
  let params = {
    part: 'snippet',
    key: apiKey,
    q: query,
    maxResults: 5,
  };
  let url = apiEndpoint;
  $.getJSON(url, params, function(data) {
    console.log(data);
    // showResults(data.items)
  });
}

// *** Event listener/handler

function getSearchTerms() {
  $('#search-button').submit(function(event) {
    event.preventDefault();
    let searchTerm = $('#user-input').val();
    console.log('user input: '+searchTerm);
    $('#user-input').val('');
    queryAPI(searchTerm);
  });
}

// *** Template Generators


// *** Renderers


// function getDataFromApi(searchTerm, callback) {
//   const query = {
//     q: `${searchTerm} in:name`,
//     per_page: 5
//   }
//   $.getJSON(GITHUB_SEARCH_URL, query, callback);
// }




//api key: AIzaSyC2kJstPC4GVBdBqd6pnVB-dSd7febN2Js