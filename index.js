fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    const list = myJson.results;
    console.log(list);
    let counter=1;
    for (item of list){
        console.log(item);
        let newpoke = document.createElement('div');
        newpoke.textContent=counter+': '+item.name.toUpperCase();
        newpoke.className="poke__item";
        let container = document.querySelector('.poke');
        container.appendChild(newpoke);
        fetch(item.url)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            for (i of myJson.types){
                let type = document.createElement('span');
                type.textContent=i.type.name.toUpperCase();
                type.className=i.type.name;
                newpoke.appendChild(type);


            }
            
            
          });
        counter++;
    }
    
    

  });


