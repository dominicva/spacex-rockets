import rocketData from './js/data';

async function component() {
  const element = document.createElement('div');

  const data = await rocketData();

  element.innerHTML = JSON.stringify(data, null, 2);

  return element;
}

component().then(el => document.body.append(el));
