import { PreparedRocket, RocketsPayloadsCountScores } from "../types";

export const extractPayloadsCountScores = (
  rockets: PreparedRocket[]
): RocketsPayloadsCountScores => {
  const sum: number = rockets.reduce(
    (acc, { payloadsCount }) => acc + payloadsCount,
    0
  );

  const average: number = sum / rockets.length;

  return {
    sum,
    average
  };
};
