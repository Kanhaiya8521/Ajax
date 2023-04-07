var nasaImages = $("#nasa-images");
var solInput = $('#sol-input');
var pageInput = $('#page-input');

$("form button").click(function(e) {
    // console.log(e);
    e.preventDefault();
    let sol = solInput.val();
    let page = pageInput.val();

    // console.log(sol, page);
    if(sol === "" || page ==="") {
        alert("Please fill the field");
        return;
    }

    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + sol + "&page=" + page + "&api_key=Dof6zga8flRhR8Kar1xvRDckQf5XSstYnEBxWwWf";

    // console.log(url);
    $.get(url, function(data) {
        let photos = data.photos;

        $("#nasa-images img").remove();

        for(let photo of photos) {
            nasaImages.append('<img src="' + photo.img_src + '" alt="' + photo.id + '">');
        }

    });


});