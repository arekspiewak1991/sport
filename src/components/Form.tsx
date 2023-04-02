import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type NewItemFormProps = {
  onAdd( values: { [key: string]: string} ): void
}

const StyledInput = styled.input`
  color: #000;
  font-size: 16px;
`

const Form = ({ onAdd }: NewItemFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState({
    home: "", away: ""
  });
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  useEffect(()=> {
    const isValid = validate();
    setValid(isValid);
  }, [values])

  const validate = (): boolean => {
    return !!(values.home?.length && values.away?.length);
  }

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = (e) => {
    onAdd(values);
    e.preventDefault();
  }

  return (
    <>
      <StyledInput
        value={values["home"]}
        name="home"
        ref={inputRef}
        onChange={onChange}
        placeholder={values["home"]}
      />
      <StyledInput
        value={values["away"]}
        name="away"
        onChange={onChange}
        placeholder={values["away"]}
      />
      <button onClick={onSubmit} disabled={!isValid}>Submit</button>
    </>
    
  )
}

export default Form;