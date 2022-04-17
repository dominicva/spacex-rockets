import Component from './js/ui/Component';
import Rocket from './js/ui/Rocket';
import render from './js/ui/render';
import rocketData from './js/data';
import './css/index.css';

(async () => {
  const rockets = await rocketData().then(data => data.map(Rocket));
  const app = Component('div', {}, ...rockets);
  render(app, document.body);
})();
