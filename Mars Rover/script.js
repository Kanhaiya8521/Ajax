
var input = $( "#datepicker" ).datepicker({dateFormat: 'yy-mm-dd'});
var nasaImages = $("#nasa-images");
$("p, button").click(function (e) {
    // console.log(e);
    e.preventDefault();

    var date = input.val();
    // console.log(date);
    if(date === "") {
        alert("Please enter a date");
        return;
    }
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&api_key=Dof6zga8flRhR8Kar1xvRDckQf5XSstYnEBxWwWf";
    console.log(url);

    $.get(url, function (data) {
        let photos = data.photos;
        // console.log(photos);
        if(photos.length === 0) {
            alert("No photos available for this date");
            return;
        }

        $("#nasa-images img").remove();

        for(let photo of photos) {
            nasaImages.append('<img src="' + photo.img_src + '" alt="' + photo.id + '" >');
        }

    });

})