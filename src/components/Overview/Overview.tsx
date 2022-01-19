import React from "react";

import { Section } from "../helpers/Section";

import { extractPayloadsCountScores } from "../../utils/extractPayloadsCountScores";
import { PreparedRocket } from "../../types";

type OverviewProps = {
  rockets: PreparedRocket[];
};

// == == == == == == == ==
// 1. Use extractPayloadsCountScores util
//    to render scores in Overview component
//
//    NOTE: It's ok if it's ugly
//

export const Overview: React.FC<OverviewProps> = ({ rockets }) => {
  const { sum, average } = extractPayloadsCountScores(rockets);

  return (
    <>
      <Section>Overview</Section>
      <div>{sum}</div>
      <div>{average}</div>
    </>
  );
};
