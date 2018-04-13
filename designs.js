// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
document.addEventListener('DOMContentLoaded', function(){

    const form = document.querySelector('#sizePicker');
    form.addEventListener('submit' , function(event){
        event.preventDefault(); 
        makeGrid(form);
    });


});





function makeGrid(form) {

    //get form values
    const height = form[0].value;
    const width = form[1].value;
    const color = document.getElementById('colorPicker').value;
    
    


    alert("width:" + width + " height:" + height + " color:" + color);
}
