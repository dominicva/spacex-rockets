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
  <img src=${images[0]}>
  <ul>
    <li>Status: ${active ? 'active' : 'inactive'}</li>
    <li>Stages: ${stages}</li>
    <li>Cost per launch: ${costPerLaunch}</li>
  </ul>
  `;

  const parentElement = Component('section', { class: 'rocket' }, html);

  return parentElement;
}
