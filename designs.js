document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#sizePicker');
    const canvas = document.getElementById("pixelCanvas");

    form.addEventListener('submit' , function(event){
        event.preventDefault();
        makeGrid(form , canvas);
    });

    //change color of tds added to current color selected by color picker.
    canvas.addEventListener('click', function(event){
        const color = document.getElementById('colorPicker').value;
        if(event.target.nodeName === 'TD'){
            event.target.style.cssText='background-color:'+ color +';';
        }
    });

});

function makeGrid(form , canvas) { 
    //get form values
    const height = form[0].value;
    const width = form[1].value;

    //remove all table cells added. 
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    //create grid
    for(var i = 0 ; i < height ; i ++){
        let tableRow = document.createElement('tr');
        for(var j = 0 ; j < width ; j ++){
            tableRow.appendChild(document.createElement('td'));
        }       
        canvas.appendChild(tableRow);   
    }
}
