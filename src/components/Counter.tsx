interface CounterProps {
  value: number;
  id: number;
  type: string;
  handleOnClick: (val: number, id: number, type: string) => void;
}

export default function Counter(props: CounterProps) {
  const { value, handleOnClick, id, type } = props;

  const handleClick = (val: number) => {
    handleOnClick(val, id, type);
  }

  return (
    <>
      <button onClick={() => handleClick(value + 1)} >+</button>
      <button onClick={() => handleClick(value - 1)} disabled={value < 1}>-</button>
      <span>{value}</span>
    </>
  );
}
