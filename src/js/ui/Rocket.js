import Component from './Component';

export default function Rocket({
  name,
  active,
  stages,
  boosters,
  costPerLaunch,
  successRatePct,
  firstFlight,
  country,
  wikipedia,
  description,
  height,
  mass,
  images,
  firstStageReusable,
  firstStageEngines,
  firstStageFuelAmountTons,
  firstStageBurnTimeSec,
  secondStageReusable,
  secondStageFuelAmountTons,
  secondStageBurnTimeSec,
  secondStageEngines,
}) {
  const html = `
  <h2>${name}</h2>

  <div class="rocket__background" style="background-image: url(${images[0]})">
    <button class="rocket__button">learn more</button>
    <ul class="rocket__info">
      <li>Status: ${active ? 'active' : 'inactive'}</li>
      <li>Stages: ${stages}</li>
      <li>Boosters: ${boosters}</li>
      <li>Success rate: ${successRatePct}%</li>
      <li>Cost per launch: ${costPerLaunch}</li>
      <li>First flight: ${firstFlight}, ${country}</li>
      <li>Height: ${height.meters}m</li>
      <li>Mass: ${mass.kg}kg</li>
      <li>First stage</li>
      <ul>
        <li>Engines: ${firstStageEngines}</li>
        <li>Fuel amount: ${firstStageFuelAmountTons} tons</li>
        <li>Burn time: ${firstStageBurnTimeSec} seconds</li>
        <li>${
          firstStageReusable ? 'Reusable' : '<strong>Not</strong> reusable'
        }</li>
      </ul>
      <li>Second stage</li>
      <ul>
        <li>Engines: ${secondStageEngines}</li>
        <li>Fuel amount: ${secondStageFuelAmountTons} tons</li>
        <li>Burn time: ${secondStageBurnTimeSec} seconds</li>
        <li>${
          secondStageReusable ? 'Reusable' : '<strong>Not</strong> reusable'
        }</li>
      </ul>
      <li>Description: ${description}</li>
      <li>Read more on <a href="${wikipedia}" target="_blank">wikipedia</a> </li>
    </ul>
  </div>
  `;

  const parentElement = Component('section', { class: 'rocket' }, html);

  return parentElement;
}
