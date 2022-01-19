import React from "react";
import styled from "styled-components";

import { FiltersPanel } from "./FiltersPanel/FiltersPanel";
import { Overview } from "./Overview/Overview";
import { RocketsList } from "./RocketsList/RocketsList";
import { useRocketData } from "../hooks/useRocketData";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// == == == == == == == ==
// 3. Filter rockets on form submit
//    and show filteredRockets in
//    RocketsList
//
//    Mission Name filter:
//    filters rockets where missionName
//    includes the input value (string)
//    [hint: String.includes()]
//
//    Min Payloads Count filter:
//    filters rockets where payloadsCount
//    payloadsCount is greater than or equal
//    to input value (number)

export const App: React.FC = () => {
  const rockets = useRocketData();

  return (
    <Container>
      <FiltersPanel />
      <Overview rockets={rockets} />
      <RocketsList rockets={rockets} />
    </Container>
  );
};
