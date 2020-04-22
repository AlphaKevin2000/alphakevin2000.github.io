import React from "react"
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import QuestionCatalog from "./QuestionCatalogContainer"

export const DnDWrapper = props => {

  return (
    <DndProvider backend={Backend}>
      <QuestionCatalog />
    </DndProvider>
  )
}

export default DnDWrapper