import styled from "styled-components"
import useStore from "../services/helpers";
import { useDebugValue } from "react";

const CardContainer = styled.div`
  background: #FFF;
  margin-bottom: 12px;
  padding: 12px;
  max-width: 300px;
`
const CardTitle = styled.div`
  font-size: 24px;
  padding: 10px;
`

type CardProps = {
  text: string;
}
export const Card = ({text}: CardProps) => {
  const { state } = useStore();

  return (
    <CardContainer>
      {
        state && state.scores.teams.map(item => {
          return (
            <div key={item.homeTeam + "-" + item.awayTeam}>
              <div>{item.homeTeam}</div>
              <div>{item.awayTeam}</div>
            </div>        
          )
        })
      }
    </CardContainer>
  )
}
