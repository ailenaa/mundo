const apiUrl = "https://api.wheretheiss.at/v1/satellites/25544"

async function obtenerPosicion(){
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data);

    document.getElementById("lat").innerHTML = data.latitude
    document.getElementById("lon").innerHTML = data["longitude"]

}

obtenerPosicion()