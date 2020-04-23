import React from "react"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

export const BotSelectComponent = props => {
  const {
    bots,
    bot,
    botname,
    botversion,
    handleBotNameChange,
    handleNewBot,
    handleBotVersionChange,
    handleGetBot,
    getBots
  } = props

  const availableBots = bots ? bots : getBots()

  return (
    <div>
       <FormControl as="select" value={botname} onChange={event => handleGetBot(event.target.value, botversion)}>
        {bot ? null : <option value="">-</option>}
        {availableBots && availableBots.map((bt,i) => <option key={`bot-${i}`}>{bt.name}</option>)}
       </FormControl>
        <FormControl disabled placeholder="enter bot version" value={botversion} onChange={event => handleBotVersionChange(event.target.value)}/>
        <Button onClick={handleNewBot}>New</Button>
    </div>
  )
}

export default BotSelectComponent