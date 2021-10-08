fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    const list = myJson.results;
    console.log(list);
    let counter=0;
    for (item of list){
        console.log(item);
        let newp = document.createElement('p');
        newp.textContent=counter+': '+item.name;
        document.body.appendChild(newp);
        counter++;
    }
  });


