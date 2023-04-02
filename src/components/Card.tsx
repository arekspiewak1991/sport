import styled from "styled-components"
import useStore from "../services/helpers";
import Counter from "./Counter";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #FFF;
`

const ItemContainer = styled.div`
  border: 1px solid #F00;
  border-radius: 5px;
`

export const Card = () => {
  const { state } = useStore();
  const scoresWithSum = state?.scores.teams.map(item => {
    return {
      total: item.awayScore + item.homeScore,
      ...item
    }
  });

  const sorted = scoresWithSum?.sort((a, b) => { return b.total - a.total});
  console.log("SORTED", sorted);

  const onCounter = (val: number) => {
    console.log("onCounterClicked: ", val);
    // set state
  }

  return (
    <CardContainer>
      {
        sorted && sorted.map(item => {
          return (
            <ItemContainer key={item.homeTeam + "-" + item.awayTeam}>
              <Counter value={item.homeScore} handleOnClick={onCounter} />
              <div>{item.homeTeam}</div>
              <Counter value={item.awayScore} handleOnClick={onCounter}/>
              <div>{item.awayTeam}</div>
            </ItemContainer>        
          )
        })
      }
    </CardContainer>
  )
}
