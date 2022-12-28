function incrementButton(){
    var element = document.getElementById("incrementButton");
    var value = element.innerHTML;
    ++value; 

    console.log(value);
    document.getElementById('incrementButton').innerHTML = value;




 }
