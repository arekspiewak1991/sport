import { useState } from "react";
import styled from "styled-components";
import Form from "./Form";

type MatchProps = {
  homeTeam: string;
  awayTeam: string;
}

const NewItemInput = styled.input`
  border-radius: 5px;
  padding: 10px;
  width: 100%;
`

const ButtonAdd = styled.button`
  background: #0F0;
  color: #FFF;
  font-size: 18px;
  border-radius: 6px;
  padding: 10px
`
const AddNewMatch = () => {
  const [showForm, setShowFrom] = useState(false);

  if(showForm) {
    return (
      <>
        <Form onAdd={console.log}/>
      </>
    )
  }
  return(
    <ButtonAdd onClick={() => setShowFrom(true)}>Add</ButtonAdd>
  )
}

export default AddNewMatch;