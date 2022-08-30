let id = document.querySelector('#id').value;
let nome = document.querySelector('#name').value;

function btn_teste() {
    let result;
    console.log(id.value)
    console.log(nome.value)

    let data = {
        "nostrud": [
            'id' = string,
            'name' = string
        ]
    }

    fetch(`http://www.mocky.io/v2/5bc3b9cc30000012007586b7`, {
        method : "GET",
        body: JSON.stringify(data),
        cache:'default',
        headers: { "content-type": "application/json" }
    })
        .then(response => response.json())
        .then((json) => {
            result = json.result[0]
            window.localStorage.setItem('id')
            window.localStorage.setItem('nome')

        })
        .catch(err => console.log(err));
}
