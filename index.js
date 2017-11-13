'use strict';

$(document).ready(function(){
  getSearchTerms();
});

const STORE = {
  data: []
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
function template() {
  console.log(STORE.data);
  STORE.data.forEach(item => {
    $('.thumbnails').append(`<li><a href="${item.videoURLS}"><img src="${item.thumbnail}" alt="thumbnail text here"></a></li>`);
  });
}

// *** Renderers
function showResults(result){
  result.forEach(function(value, index){
    const obj = {
      thumbnail: value.snippet.thumbnails.default.url,
      videoURLS: 'https://www.youtube.com/watch?v='+value.id.videoId
    }
    STORE.data.push(obj);
  });
  template();
}

