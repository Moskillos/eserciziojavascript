async function api() {
    const response = await fetch('https://cataas.com/api/tags');

    const json = await response.json();
    console.log(json);

    const newArr = json.slice(4, 9);
    const newArr2 = json.slice(14, 19);

    const Arr = newArr.concat(newArr2);

    const select = document.querySelector('select');

    Arr.forEach(element => {
        const option = document.createElement('option');
        option.setAttribute('value', element);
        option.textContent = element;
        select.appendChild(option);
    });

    select.addEventListener('change', () => {
        
    })

}

api();