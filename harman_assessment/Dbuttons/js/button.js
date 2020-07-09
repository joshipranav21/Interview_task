var dynamicbuttons =  function(){

    let i=0;
    let body = document.getElementsByTagName("body")[0];
    
    for(i; i<=5; i++) {

        let button = document.createElement('button');
        button.setAttribute("class", "buttonClass");
        button.setAttribute("id", i);
        button.setAttribute("name", "Button "+i);
        button.innerHTML = 'Button '+i;
        body.appendChild(button);
        button.addEventListener('click',function(){
            document.getElementById("dElement").innerHTML = "Button Name is: "+this.name +" Button index is: "+this.id;
        });
        

    }
}

dynamicbuttons();