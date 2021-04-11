function geefRandomGetalTerug(){   
    document.getElementById("demo").innerHTML =             
    Math.floor(Math.random() * 10) + 1;
}

console.log(geefRandomGetalTerug());    