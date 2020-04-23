import React from 'react'
import { NativeTypes } from 'react-dnd-html5-backend'
import { DropTarget } from 'react-dnd'
import { handleSetAWSCredentials } from "./duck/operations"
import { setAWSCredentials } from "./duck/actions"

const fileTarget = {
  drop(props, monitor) {

    const droppedFile = monitor.getItem().files[0]
    const reader = new FileReader();
    reader.readAsText(droppedFile)
    reader.onload = data => props.handleSetAWSCredentials(reader.result)
  },
}

function FileDropZone({ connectDropTarget, isOver, canDrop }) {
  return connectDropTarget(
    <div style={{width: "100%", height: "100%"}}>
      {!isOver && !canDrop && 'Drag AWS credential file here'}
      {!isOver && canDrop && 'Drag the file here'}
      {isOver && 'Drop the file'}
    </div>,
  )
}

export default DropTarget(NativeTypes.FILE, fileTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(FileDropZone)