'use strict';

$(document).ready(function(){
  getSearchTerms();
});

const STORE = {
  // currentState: 'listening', //searching, querying, displaying
  thumbnails: []
};

// function render(STORE) {
//   if (STORE.currentState === 'listening') {

//   }
// }

const apiEndpoint = 'https://www.googleapis.com/youtube/v3/search';
const apiKey = 'AIzaSyC2kJstPC4GVBdBqd6pnVB-dSd7febN2Js';

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
    // data.items[i].snippet.thumbnails;
    showResults(data.items);
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
function generateHTML(){
  console.log(STORE.thumbnails);
  // `<ul>
  //   <li><img src=${} alt="thumb 1"></li>
  //   <li><img src=${} alt="thumb 2"></li>
  //   <li><img src=${} alt="thumb 3"></li>
  //   <li><img src=${} alt="thumb 4"></li>
  //   <li><img src=${} alt="thumb 5"></li>
  // </ul>`
}

// *** Renderers
function showResults(result){
  result.forEach(function(value, index){
    STORE.thumbnails.push(value.snippet.thumbnails.default.url);
  });
  generateHTML();
}

// function getDataFromApi(searchTerm, callback) {
//   const query = {
//     q: `${searchTerm} in:name`,
//     per_page: 5
//   }
//   $.getJSON(GITHUB_SEARCH_URL, query, callback);
// }




//api key: AIzaSyC2kJstPC4GVBdBqd6pnVB-dSd7febN2Js