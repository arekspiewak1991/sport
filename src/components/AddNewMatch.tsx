import { useState } from "react";
import Form from "./Form";
import useStore from "../services/helpers";
import { Button } from "./UIElements";
import styled from "styled-components";

type MatchProps = {
  home: string;
  away: string;
}

const AddButton = styled(Button)({
  background: "linear-gradient(to right, #111743, #0E122B 45%)",
  width: 200,
  height: 55,
  textTransform: "uppercase"
})

const AddNewMatch = () => {
  const [showForm, setShowFrom] = useState(false);
  const { add } = useStore();

  const onAdd = (values: MatchProps) => {
    console.log(JSON.stringify(values));
    add({
      homeTeam: values.home,
      homeScore: Math.floor(Math.random()* 10),
      awayTeam: values.away,
      awayScore: 2,
      timestamp: Date.now()
    })
    setShowFrom(false);
  }

  if(showForm) {
    return (
      <Form onAdd={onAdd}/>
    )
  }
  return(
    <AddButton onClick={() => setShowFrom(true)} label="Add"></AddButton>
  )
}

export default AddNewMatch;