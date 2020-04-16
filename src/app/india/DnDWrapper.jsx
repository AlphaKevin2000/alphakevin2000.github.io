import React from "react"
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import DBItemList from "./DBItemListContainer"

export const DnDWrapper = props => {

  return (
    <DndProvider backend={Backend}>
      <DBItemList />
    </DndProvider>
  )
}

export default DnDWrapper