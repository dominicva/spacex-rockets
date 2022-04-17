export default async function rocketData() {
  const response = await getData();
  return parseData(response);
}

async function getData() {
  const API_URL = 'https://api.spacexdata.com/v4/rockets';

  return await fetch(API_URL)
    .then(r => r.json())
    .catch(console.error);
}

function parseData(data) {
  return data.map(
    ({
      name,
      active,
      stages,
      boosters,
      cost_per_launch: costPerLaunch,
      success_rate_pct: successRatePct,
      first_flight: firstFlight,
      country,
      wikipedia,
      description,
      height,
      mass,
      flickr_images: images,
      first_stage: {
        reusable: firstStageReusable,
        engines: firstStageEngines,
        fuel_amount_tons: firstStageFuelAmountTons,
        burn_time_sec: firstStageBurnTimeSec,
      },
      second_stage: {
        reusable: secondStageReusable,
        fuel_amount_tons: secondStageFuelAmountTons,
        burn_time_sec: secondStageBurnTimeSec,
        engines: secondStageEngines,
      },
    }) => ({
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
    })
  );
}
