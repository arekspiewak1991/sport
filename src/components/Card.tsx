import styled from "styled-components"
import useStore from "../services/helpers";
import Counter from "./Counter";
import { Text } from "./UIElements";

const CardContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  background: "#FFF"
})

const TableContainer = styled.div({
  display: "flex",
  flexFlow: "column nowrap",
  borderRadius: 4,
  border: "1px solid #DADADA",
})

const TableRow = styled.div({
  display: "flex",
  flexFlow: "row nowrap",
  width: "100%",
  borderBottom: "1px solid #dadada"
})

const Heading = styled(TableRow)({
  color: "#3e3e3e",
  fontWeight: "bold"
})

const RowItem = styled.div({
  display: "flex",
  flex: 1,
  fontSize: 14,
  padding: 8,
  justifyContent: "center",
  alignItems: "center"
})

export const Card = () => {
  const { state, update } = useStore();
  const scoresWithSum = state?.scores.teams.map(item => {
    return {
      total: item.awayScore + item.homeScore,
      ...item
    }
  });

  const sorted = scoresWithSum?.sort((a, b) => { return b.total - a.total});

  const onCounter = (val: number, timestamp: number, type: string) => {
    const idx = state.scores.teams.findIndex((item) => item.timestamp == timestamp);
    const scoreToChange = type === "home" ? "homeScore" : "awayScore";
    const updatedItem = { ...state.scores.teams[idx], [scoreToChange]: val };
    update(updatedItem);
  }

  return (
    <CardContainer>
        <TableContainer className="table">
        <Heading>
          <RowItem className="row-item">Home Team</RowItem>
          <RowItem className="row-item">Home Score</RowItem>
          <RowItem className="row-item">Away Team</RowItem>
          <RowItem className="row-item">Away Score</RowItem>
        </Heading>
        {
          sorted && sorted.map(item => {
            return (
              <TableRow key={item.homeTeam + "-" + item.awayTeam}>
                <RowItem>
                  <Text>{item.homeTeam}</Text>
                </RowItem>
                <RowItem>
                  <Counter type="home" id={item.timestamp} value={item.homeScore} handleOnClick={onCounter}/>
                </RowItem>
                <RowItem>
                  <Counter type="away" id={item.timestamp} value={item.awayScore} handleOnClick={onCounter}/>
                </RowItem>
                <RowItem>
                  <Text>{item.awayTeam}</Text>
                </RowItem>
              </TableRow>        
            )
          })
        }
        </TableContainer>
    </CardContainer>
  )
}
