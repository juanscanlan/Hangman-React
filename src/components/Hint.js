
function onGet(version) {
    const url = "http://localhost:8000/api/" + version + "/messages";
    var headers = {}
    var test;
    
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
    .then((response) => {
        return response.json();
    })
    .then(data => {
        test = data;
    });
}

function Hint() {
    return(
        <p></p>
    )
}