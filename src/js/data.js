export default async function rocketData() {
  const response = await getData();

  return parseData(response);
}

async function getData() {
  try {
    let data = window.sessionStorage.getItem('data');

    if (data) {
      data = JSON.parse(data);
    } else {
      const API_URL = 'https://api.spacexdata.com/v4/rockets';
      data = await fetch(API_URL).then(r => r.json());

      window.sessionStorage.setItem('data', JSON.stringify(data));
    }

    return data;
  } catch (error) {
    console.error(error);
  }
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
