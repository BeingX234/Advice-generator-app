
const url = 'https://api.adviceslip.com/advice'
getText(url);

async function getText(url) {
  let x = await fetch(url);
  let data = await x.json();
  let content = data.slip.advice;
  let id = data.slip.id;
  document.getElementById('advice_id').innerHTML = id;
  document.getElementById('advice').innerHTML = content;
}

