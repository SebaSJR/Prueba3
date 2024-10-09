
 
 const respuesta = document.querySelector(".data-respuesta");
 //const respuesta = document.getElementById("respuesta");


fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {

    //console.log(data)
    //foreach() encarga de contar los elementos del arrayt que esta recorriendo  


     //   def         condicion   incremento 
    //for(var i=0; i<data.length; i++)

    let linea = "";
    data.forEach(element => {

        console.log(element)
         //varaible acumulativa    
         linea += `<p><span style="background:yellow;" >Titulo: <strong>${element.title}</strong></span> ID: ${element.id} body: ${element.body} User ID:${element.user}</p> <br />`

        //respuesta.innerHTML = JSON.stringify(data);
        //console.log(element.body)
    });


    respuesta.innerHTML = linea;

})
