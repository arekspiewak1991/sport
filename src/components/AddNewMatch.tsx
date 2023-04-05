import { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import useStore from "../services/helpers";

type MatchProps = {
  home: string;
  away: string;
}

const ButtonAdd = styled.button`
  background: #0F0;
  color: #FFF;
  font-size: 18px;
  border-radius: 6px;
  padding: 10px
`
const AddNewMatch = () => {
  const [showForm, setShowFrom] = useState(false);
  const { add } = useStore();

  const onAdd = (values: MatchProps) => {
    console.log(JSON.stringify(values));
    add({
      homeTeam: values.home,
      homeScore: Math.floor(Math.random()* 5),
      awayTeam: values.away,
      awayScore: 2
    })
    setShowFrom(false);
  }

  if(showForm) {
    return (
      <Form onAdd={onAdd}/>
    )
  }
  return(
    <ButtonAdd onClick={() => setShowFrom(true)}>Add</ButtonAdd>
  )
}

export default AddNewMatch;