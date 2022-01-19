/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";

import { Section } from "../helpers/Section";
import { RocketsFilters } from "../../types";

type FiltersPanelProps = {};

// == == == == == == == ==
// 2. Implement form that takes
//    input values and console.log's
//    object with shape of
//    RocketsFilters type,
//    on 'Filter rockets' button clicked
//
//    Note: Min Payloads Count input
//    must always contain a positive
//    numeric value (Default: 0)
//

const logger = (rocketsFilters: RocketsFilters): void => {
  console.log(rocketsFilters);
};

const initialValue = {
  missionName: "",
  minPayloadsCount: 0
};

export const FiltersPanel: React.FC<FiltersPanelProps> = () => {
  const [state, setState] = useState<RocketsFilters>(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]:
        e.target.name === "minPayloadsCount"
          ? parseInt(e.target.value, 10)
          : e.target.value
    });
  };

  const filterRockets = () => {
    return logger(state);
  };

  const { missionName, minPayloadsCount } = state;

  return (
    <Section>
      FiltersPanel
      <div>
        <label>
          Mission name:{" "}
          <input onChange={onChange} name="missionName" value={missionName} />
        </label>
      </div>
      <div>
        <label>
          Min. payloads count:{" "}
          <input
            onChange={onChange}
            name="minPayloadsCount"
            value={minPayloadsCount}
            type="number"
            min="0"
          />
        </label>
      </div>
      <div>
        <button onClick={filterRockets}>🚀 Filter rockets 🚀</button>
      </div>
    </Section>
  );
};
