import { PreparedRocket, RawRocket } from "../types";

const extractSecondStagePayloadsCount = (rocketData: RawRocket) =>
  rocketData?.rocket?.second_stage?.payloads?.length || 0;

export const prepareRockets = (rawRockets: RawRocket[]): PreparedRocket[] =>
  rawRockets.map((rocket) => ({
    flightNumber: rocket.flight_number,
    missionName: rocket.mission_name,
    payloadsCount: extractSecondStagePayloadsCount(rocket)
  }));
