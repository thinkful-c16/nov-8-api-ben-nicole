'use strict';
//api key: AIzaSyC2kJstPC4GVBdBqd6pnVB-dSd7febN2Js

$(document).ready(function(){
  getSearchTerms();
});

const STORE = {
  // currentState: 'listening', //searching, querying, displaying
  thumbnails: [],
  videoURLS: []
};

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
//**************update this getSearchTerms function to clear the store before populating it

//*******************************************************************************************
//**********************   Updated to populate vai result counter   *************************
//*******************************************************************************************
// *** Template Generators
function template(){
  console.log(STORE.videoURLS.length);
  let listMaker = [];
  for (let i = 0; i < STORE.videoURLS.length; i++) {
    listMaker.push(`<li><a href="${STORE.videoURLS[i]}"><img src="${STORE.thumbnails[i]}" alt="thumb 1"></a></li>`)
  }
  let listString = listMaker.toString().replace(/,/g, " ");
  return `<ul>
    ${listString}
  </ul>`;
}
//*******************************************************************************************
//**********************   Updated to populate vai result counter   *************************
//*******************************************************************************************


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
}

