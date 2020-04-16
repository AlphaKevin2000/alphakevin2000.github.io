import React, {useRef} from "react"
import { useDrag, useDrop, DragPreviewImage } from "react-dnd"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Octicon, { Trashcan } from "@primer/octicons-react"
import DynamicTextarea from "../widgets/DynamicTextarea"
import { pogChamp } from "./pogchamp"

export const ItemTypes = {
  DBItem: 'dbitem'
}

export const defaultProps = {
  style: {
    margin: "25px",
    padding: "25px",
    border: "solid red 1px",
    cursor: "move"
  }
}

export const DBItemComponent = props => {

  const {
    ID,
    index,
    handleMoveDBItem,
    handleRemoveDBItem
  } = props

  const ref = useRef(null)
  const [{isOver}, drop] = useDrop({
    accept: ItemTypes.DBItem,
    collect: (monitor) => ({
      isOver: monitor.isOver()
    }),
    drop(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const dropIndex = props.index
      handleMoveDBItem(dragIndex, dropIndex)
    }
  })

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.DBItem, ID, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      //isOver: monitor.isDragging()
    }),
  })
  //const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  let style
  style = isDragging ? Object.assign({}, props.style, {background: "#9aeaac"}) : props.style
  style = isOver ? Object.assign({}, props.style, {background: "#44944e"}) : style
  return (
    <div style={style} ref={ref}>
      <DragPreviewImage connect={preview} src={pogChamp} />
      <h5>ID: {props.ID} Type: {props.Type}</h5>
      <Row>
        <Col xs={6}>
          <DynamicTextarea value={props.Dialog} cols={60}/>
        </Col>
        <Col xs={6}>
          <Button variant="danger" onClick={() => handleRemoveDBItem(ID)}>
            <Octicon><Trashcan /></Octicon>
          </Button>
        </Col>
      </Row>
    

     
      
     {/*  <ul>
        <li>{props["When yes"]}</li>
        <li>{props["Session"]}</li>
        <li>{props["When No"]}</li>
        <li>{props["Session2"]}</li>
        <li>{props["When Not sure"]}</li>
        <li>{props["Session3"]}</li>
        <li>{props["Yes Interjection"]}</li>
        <li>{props["No Interjection"]}</li>
        <li>{props["Not Sure Interjection"]}</li>
        <li>{props["Phone number"]}</li>
        <li>{props["Logic"]}</li>
        <li>{props["Logic Interjection"]}</li>
        <li>{props["Column1"]}</li>
    </ul> */}
  </div>

  )
}

DBItemComponent.defaultProps = defaultProps


export default DBItemComponent