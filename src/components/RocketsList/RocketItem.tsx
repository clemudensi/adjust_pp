import React from "react";
import styled from "styled-components";
import { PreparedRocket } from "../../types";

const Container = styled.div`
  padding: 5px;
`;

type RocketItemProps = {
  rocket: PreparedRocket;
};

export const RocketItem: React.FC<RocketItemProps> = ({
  rocket: { flightNumber, missionName, payloadsCount }
}) => (
  <Container>{`🚀 #${flightNumber},  (${payloadsCount}) - ${missionName}`}</Container>
);
