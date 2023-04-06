import styled from "styled-components"
import useStore from "../services/helpers";
import Counter from "./Counter";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFF;
`

const ItemContainer = styled.div`
  border: 1px solid #F00;
  border-radius: 5px;
`

export const Card = () => {
  const { state, update } = useStore();
  const scoresWithSum = state?.scores.teams.map(item => {
    return {
      total: item.awayScore + item.homeScore,
      ...item
    }
  });

  const sorted = scoresWithSum?.sort((a, b) => { return b.total - a.total});
  console.log("SORTED", sorted);

  const onCounter = (val: number, timestamp: number, type: string) => {
    console.log("onCounterClicked: ", val, timestamp, type);
    const idx = state.scores.teams.findIndex((item) => item.timestamp == timestamp);
    const scoreToChange = type === "home" ? "homeScore" : "awayScore";
    const updatedItem = { ...state.scores.teams[idx], [scoreToChange]: val };
    update(updatedItem);
  }

  return (
    <CardContainer>
      {
        sorted && sorted.map(item => {
          return (
            <ItemContainer key={item.homeTeam + "-" + item.awayTeam}>
              <Counter type="home" id={item.timestamp} value={item.homeScore} handleOnClick={onCounter} />
              <div>{item.homeTeam}</div>
              <Counter type="away" id={item.timestamp} value={item.awayScore} handleOnClick={onCounter}/>
              <div>{item.awayTeam}</div>
            </ItemContainer>        
          )
        })
      }
    </CardContainer>
  )
}
