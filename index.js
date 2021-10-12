

window.onload=function(){
  init();
}

const init = async () => {
  console.log('init');
  const result =await getPoke();
  mappedPoke(result);

}

const getPoke = async() => {
  const result = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150');
  const resultToJson = await result.json();
  return resultToJson;
}

const mappedPoke = (result) => {
  let myPokes = result.results.map((poke,index)=>{
      return printPoke({id:index,name:poke.name,url:poke.url})
  });
}

const getTypes= async(result)=>{
   const result1 = await fetch(result.url);
   const resultToJson = await result1.json();
   return resultToJson;
}

const printPoke= async (result) => {
  let characterContainer = document.querySelector('.poke');
  let types = await getTypes(result);
  let newpoke = document.createElement('div');
  newpoke.textContent=result.id+1 +'. '+result.name.toUpperCase();
  newpoke.className="poke__item";
  let container = document.querySelector('.poke');
  container.appendChild(newpoke);
  for (item of types.types){
    let type = document.createElement('span');
    type.textContent=item.type.name.toUpperCase();
    type.className=item.type.name;
    newpoke.appendChild(type);
  }
  
  
}
setTimeout(mew,2*1000);

function mew(){
  console.log('mew');
  let newpoke = document.createElement('div');
  newpoke.textContent='151. MEW';
  newpoke.className="poke__item";
  let container = document.querySelector('.poke');
  container.appendChild(newpoke);
  let type = document.createElement('span');
  type.textContent='psychic';
  type.className='psychic';
  newpoke.appendChild(type);
}


// const but = document.querySelector('button');
// function filtrar(){
// 	let filtr = streamers.filter( streamer => streamer.name.includes(text.value));
// 	console.log(filtr);
// }
// text.addEventListener('click', filtrar);