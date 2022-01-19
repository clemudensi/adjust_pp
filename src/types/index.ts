export type RawRocket = {
  flight_number: number;
  mission_name: string;
  launch_date_unix: number;
  rocket: {
    first_stage: {};
    second_stage: {
      payloads: {}[];
    };
  };
};

export type PreparedRocket = {
  flightNumber: number;
  missionName: string;
  payloadsCount: number;
};

export type RocketsPayloadsCountScores = {
  sum: number;
  average: number;
};

export type RocketsFilters = {
  missionName: string;
  minPayloadsCount: number;
};
