import React from "react"
import Container from "react-bootstrap/Container"
import DBItemContainer from "./DBItemContainer"


export const DBItemList = props => {

  const { dbitems } = props

  return (
    <Container>
      {dbitems.map((item, i) => <DBItemContainer key={`dbitem-${item.ID}`} {...item} index={i}/>)}
    </Container>
  )
}

export default DBItemList