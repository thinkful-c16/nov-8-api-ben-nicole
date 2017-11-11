'use strict';

$(document).ready(function(){
  getSearchTerms();
});

const STORE = {
  thumbnails: [],
  videoURLS: []
};

const apiEndpoint = 'https://www.googleapis.com/youtube/v3/search';
const apiKey = 'AIzaSyC2kJstPC4GVBdBqd6pnVB-dSd7febN2Js';

// *** Query results object:

function queryAPI(query) {
  let params = {
    part: 'snippet',
    key: apiKey,
    q: query,
    maxResults: 5,
  };
  let url = apiEndpoint;
  $.getJSON(url, params, function(data) {
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
// function template(){
//   console.log(STORE.videoURLS);
//   const urlValue = STORE.videoURLS.map(function(value){
//     return `<li><a href="${value}">`;});
//   const thumbnailValue = STORE.thumbnails.map(function(value){
//     return `<img src="${value}" alt="thumbnail text here"></a></li>`;});
//   return `<ul>${urlValue}${thumbnailValue}</ul>`;
// }

function template() {
  STORE.thumbnails.map(thumbnail => {
    STORE.videoURLS.map(video => {
      return (
        `<li><a href="${STORE.videoURL}"><img src="${STORE.thumnails}" alt="thumbnail text here"></a></li>`
      );
    });
  });
  generateHTML();
}

function generateHTML() {
  $('.thumbnails').html(template());
}

// *** Renderers
function showResults(result){
  result.forEach(function(value, index){
    STORE.thumbnails.push(value.snippet.thumbnails.default.url);
    STORE.videoURLS.push('https://www.youtube.com/watch?v='+value.id.videoId)
  });
  generateHTML();
}

