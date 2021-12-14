
let datos = [];

function sub(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const destination = document.getElementById("destination").value;
    const message = document.getElementById("message").value;

    // const text = "El nombre es: " + name + "\n" +
    //                 "El email es: " + email + "\n" +
    //                 "El codigo de destino es: " + destination + "\n" +
    //                 "El mensaje es: " + message + "\n";
    // alert(text);

    const json = {
        "name" : name,
        "email" : email,
        "destination" : destination,
        "message" : message
    };
    
    // alert(JSON.stringify(json));
    
  
    
    datos.push(json);



    if (destination === "04" || destination === "05" || destination === "12")  {
        if (document.getElementById("dataTable") == null) {
            let contenedorTabla = document.getElementById("tableContainer");
            let tabla = "<table id=\"dataTable\"><tr><th>Nombre</th><th>e-mail</th><th>Destino</th><th>Mensaje</th></tr></table>"
            contenedorTabla.innerHTML = tabla;
        }  
        addRow("dataTable", json);
    };

};

function addRow(tableID, data) {
    let tableRef = document.getElementById(tableID);  
    let newRow = tableRef.insertRow(-1);  
    let newCell = newRow.insertCell(0);  
    let newText = document.createTextNode(data.name);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(1);  
    newText = document.createTextNode(data.email);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(2);
    let destino = ""
    if (data.destination == "04") {
        destino="Illes Balears";
    } else if (data.destination == "05") {
        destino="Canarias";
    }  else if (data.destination == "12") {
        destino="Galicia";
    }
    newText = document.createTextNode(destino);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(3);  
    newText = document.createTextNode(data.message);
    newCell.appendChild(newText);
  }
