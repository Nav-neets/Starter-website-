function ListButton(){

    var x = document.getElementById('myText').value;
    if (document.getElementById("myText").value != "") {
      
        y = document.getElementById ('list');

        z = document.createElement("li");

        q = document.createTextNode(x);
    
       
      z.appendChild(q);

      y.appendChild(z);
} 
else{
  return;
}
}