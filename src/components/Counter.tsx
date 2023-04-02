interface CounterProps {
  value: number;
  handleOnClick: (newValue: number) => void;
}

export default function Counter(props: CounterProps) {
  const {value, handleOnClick } = props;
  const handleClick = (val: number) => {
    handleOnClick(val);
  }

  return (
    <>
      <button onClick={() => handleClick(value + 1)} >+</button>
      <button onClick={() => handleClick(value - 1)} disabled={value < 1}>-</button>
      <span>{value}</span>
    </>
  );
}
