import rocketData from './js/data';
import './css/index.css';

async function component() {
  try {
    const element = document.createElement('div');

    const data = await rocketData();

    const html = data.map(
      rocket => `<section>${JSON.stringify(rocket)}</section>`
    );

    element.innerHTML = html.join('');

    return element;
  } catch (error) {
    console.error(error);
  }
}

async function app() {
  document.body.append(await component());
}

app();
