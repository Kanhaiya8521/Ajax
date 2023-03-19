// console.log('Hello');


function fetchRandomDogImage() {
  /*
    // fetch through XML request 1st method
   
  var xhrRequest = new XMLHttpRequest();

  xhrRequest.onload = function () {
    console.log(xhrRequest.response);
    var responseJSON = JSON.parse(xhrRequest.response);
    var imageUrl = responseJSON.message;
    $('#dog-image').attr('src', imageUrl);
  };
  //for error this is optional
  xhrRequest.onerror = function(){
    console.log('Request failed')
  }
  xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random", true);
  xhrRequest.send();
  */


/*
  // fetch through jQuery request 2nd methos

  $.ajax({
    //put url in small not capital
    url: 'https://dog.ceo/api/breeds/image/random',
    method: 'get', // put get capital or small
    success: function(res){
        var imageUrl = res.message;
        $('#dog-image').attr('src', imageUrl);
    }
  }).fail(function(){
    console.log("Error');
  });
  */

  $.get('https://dog.ceo/api/breeds/image/random', function(res){
    var imageUrl = res.message;
    $('#dog-image').attr('src', imageUrl);
  }).fail(function(xhr, textStatus, errorThrown){
    console.log('Request failed');
  });
}

$('#fetch-dog-image-button').click(fetchRandomDogImage);
