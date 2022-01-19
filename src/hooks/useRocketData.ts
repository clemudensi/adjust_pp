import React from "react";
import { PreparedRocket } from "../types";
import { prepareRockets } from "../utils/prepareRockets";

const SPACEX_API_URL = "https://api.spacexdata.com/v3/launches/past";

type UseRocketDataReturnType = PreparedRocket[];

export const useRocketData = (): UseRocketDataReturnType => {
  const [rockets, setRockets] = React.useState([]);

  React.useEffect(() => {
    fetch(SPACEX_API_URL)
      .then((response) => response.json())
      .then(prepareRockets)
      .then(setRockets);
  }, []);

  return rockets;
};
