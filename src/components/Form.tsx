import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "./UIElements";

type NewItemFormProps = {
  onAdd( values: { [key: string]: string} ): void
}

const StyledInput = styled.input({
  color: "#000",
  fontSize: 24,
  flex: 1,
  padding: 6,
  "::placeholder": {
    color: "#E0E0E0"
  }
})

const SubmitBtn = styled(Button)({
  width: 200,
  height: 55,
  background: "#00003c"
})

const Form = ({ onAdd }: NewItemFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState({
    home: "", away: ""
  });
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  useEffect(()=> {
    const isValid = validate();
    setValid(isValid);
  }, [values])

  const validate = (): boolean => {
    return !!(values.home?.length && values.away?.length);
  }

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    onAdd(values);
    event.preventDefault();
  }

  return (
    <>
      <StyledInput
        value={values["home"]}
        name="home"
        ref={inputRef}
        onChange={onChange}
        placeholder={"Home Team Name"}
      />
      <StyledInput
        value={values["away"]}
        name="away"
        onChange={onChange}
        placeholder={"Away Team Name"}
      />
      <SubmitBtn onClick={onSubmit} disabled={!isValid} label="Submit"/>
    </>
    
  )
}

export default Form;