import styled from "styled-components"

const CardContainer = styled.div`
  background: #FFF;
  margin-bottom: 12px;
  padding: 12px;
  max-width: 300px;
`
const CardTitle = styled.div`
  font-size: 24px;
  padding: 10px;
`

type CardProps = {
  text: string;
}
export const Card = ({text, children}: React.PropsWithChildren<CardProps>) => {
  return (
    <CardContainer>
      <CardTitle>
        {text}
      </CardTitle>
    </CardContainer>
  )
}
