'use strict';

$(document).ready(function(){
  getSearchTerms();
});

const STORE = {
  // currentState: 'listening', //searching, querying, displaying
  thumbnails: [],
  videoURLS: []
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
    console.log(data);
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
function template(){
  console.log(STORE.videoURLS);
  const urlValue = STORE.videoURLS.map(function(value){
    return `<li><a href="${value}">`;});
  const thumbnailValue = STORE.thumbnails.map(function(value){
    return `<img src="${value}" alt="thumbnail text here"></a></li>`;});
  return `<ul>${urlValue}${thumbnailValue}</ul>`;
}

//loop over the data in li, and then add a click event 

// *** Renderers
function showResults(result){
  result.forEach(function(value, index){
    STORE.thumbnails.push(value.snippet.thumbnails.default.url);
    STORE.videoURLS.push('https://www.youtube.com/watch?v='+value.id.videoId)
  });
  generateHTML();
}

function generateHTML() {
  $('.thumbnails').html(template());
  console.log('Test String');
}

// function getDataFromApi(searchTerm, callback) {
//   const query = {
//     q: `${searchTerm} in:name`,
//     per_page: 5
//   }
//   $.getJSON(GITHUB_SEARCH_URL, query, callback);
// }




//api key: AIzaSyC2kJstPC4GVBdBqd6pnVB-dSd7febN2Js