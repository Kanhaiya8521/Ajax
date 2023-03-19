function displayImage(data) {
 console.log('data', data);
  var img = $('<img id="image">'); 
  img.attr("src", data.url);
  img.height = "100%";
  img.width = "100%";
  img.appendTo("#image-container");
}

$.ajax({ 
  url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-06-05",
  method: "GET",
  success: displayImage,
});
