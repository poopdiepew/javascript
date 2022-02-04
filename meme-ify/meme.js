const memearr = [];
for(var i = 128511; i<128592; i++){
  memearr.push(i);
}
console.log(memearr);
const body = document.querySelector('body');
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';

const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';



const search = document.createElement('textArea');
search.style.overflowWrap = 'true';
search.style.textOverflow = 'false';
search.style.height = '200px';
search.style.width =  '600px';
search.style.fontSize = '20px';
search.style.borderRadius = '16px';

const submit = document.createElement('button');
submit.textContent = "MEME-IFY HERE";
submit.style.padding = '16px';
submit.style.fontSize = '32px';
submit.style.margin = '32px';
submit.style.borderRadius = '16px';

submit.addEventListener('click', e=>{
  console.log(search.value);
})

const output = document.createElement('textArea');
output.style.textOverflow = 'false';
output.style.height = '200px';
output.style.width =  '600px';
output.style.fontSize = '20px';
output.readOnly = 'true';
output.style.borderRadius = '16px';

submit.addEventListener('click',e=>{
  var arr = search.value.split(' ');
  for(var element = 0; element <arr.length; element++){
    arr[element] +=   String.fromCodePoint(memearr[Math.floor(Math.random()*81)]);
  }
  output.value = arr.join('');

  console.log(arr);
})

body.appendChild(container);
container.appendChild(search);
container.appendChild(submit);
container.appendChild(output);