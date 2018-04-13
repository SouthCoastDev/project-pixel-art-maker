// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
document.addEventListener('DOMContentLoaded', function(){

    const form = document.querySelector('#sizePicker');
    form.addEventListener('submit' , function(event){
        event.preventDefault(); 
        makeGrid();
    });


});





function makeGrid() {
    //alert("width:" + width + " height:" + height);
}
