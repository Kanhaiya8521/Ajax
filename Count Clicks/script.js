// console.log('Hello!');
var span = document.querySelector('span');
var div = document.querySelector('div');
// span.innerHTML = 'I Am Groot!'
// div.onclick(MouseEvent, function(){
//     for(let i = 1; i < 10; i++) span.innerHTML = i +1;

// });
var count = 0 ;
span.innerHTML = count;

div.addEventListener('click', function(e){
    count++;
    console.log(count);
    span.innerHTML = count;
})
// for(let i = 1; i < 10; i++) span.innerHTML = i +1;
console.log(div);