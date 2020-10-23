function updateMap() { 


    fetch("/data.json")
    .then(response => response.json())
    .then(rsp = function() {
            console.log(rsp.data)
    });
           
}
    
updateMap() 
