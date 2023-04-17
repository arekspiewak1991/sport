import styled from "styled-components";
import { Button, Text } from "./UIElements";

interface CounterProps {
  value: number;
  id: number;
  type: string;
  handleOnClick: (val: number, id: number, type: string) => void;
}

const Container = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
})

const StyledText = styled(Text)({
  width: 100,
  background: "#111743",
  color: "#FFF"
})

export default function Counter(props: CounterProps) {
  const { value, handleOnClick, id, type } = props;

  const handleClick = (val: number) => {
    handleOnClick(val, id, type);
  }

  return (
    <Container className="counter-container">
      <Button onClick={() => handleClick(value + 1)} label="+" style={{background: "#F00"}}/>
      <Button onClick={() => handleClick(value - 1)} disabled={value < 1} label="-" style={{background: "#A00"}}/>
      <StyledText>{value}</StyledText>
    </Container>
  );
}
