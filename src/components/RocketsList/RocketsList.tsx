import React from "react";

import { PreparedRocket } from "../../types";
import { RocketItem } from "./RocketItem";
import { Section } from "../helpers/Section";

type RocketsListProps = {
  rockets: PreparedRocket[];
};

export const RocketsList: React.FC<RocketsListProps> = ({ rockets }) => {
  return (
    <Section>
      <p>RocketsList:</p>
      {rockets.map((rocket) => (
        <RocketItem key={rocket.flightNumber} rocket={rocket} />
      ))}
    </Section>
  );
};
