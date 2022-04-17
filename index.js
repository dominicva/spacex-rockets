import fetch from 'node-fetch';

const { log, error } = console;

const API_URL = 'https://api.spacexdata.com/v4/rockets';

const getData = async url =>
  await fetch(url)
    .then(r => r.json())
    .catch(error);

const parseData = data =>
  data.map(
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

const parsed = await getData(API_URL).then(parseData);
log(parsed);
