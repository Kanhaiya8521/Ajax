var breedImage = $("#breed-image");
var dropdown = $("#dog-breeds");
var allowSubmit = true;
var breed;

$.get("https://dog.ceo/api/breeds/list/all", function (data, status) {
    let dogBreeds = data.message;
    // console.log(typeof dogBreeds);
    for (let breed in dogBreeds) {
        dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});
console.log(breed);

dropdown.change(function () {
    allowSubmit = true;
});

$("form button").click(function (e) {
    e.preventDefault();
    console.log(e);

    if (allowSubmit) {
        breed = dropdown.val();
        displayDog(breed);
        allowSubmit = false;
    }

});

$("#next a").click(function (e) {
    e.preventDefault();
    if (breed !== undefined) {
        displayDog(breed);
    }
});

function displayDog(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $("#breed-image img").remove();

    $.get(url, function (data, status) {
        let imageUrl = data.message;
        breedImage.append('<img src="' + imageUrl + '" alt="' + breed + '">');
    });

}
