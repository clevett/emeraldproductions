import React from "react"

import { Card } from "react-bootstrap"

import Action from "./Action/Action"

import { action } from "../../types/ftdTypes"

const Actions = ({ actions }: {actions: action[] | null }) => {
  const mapActions = () => {
    if(actions) {
      return actions.map(({ name, desc }: action, index:number) => <Action key={`${name}-${index}`} name={name} desc={desc} />)
    }
  }

  if (actions) {
    return (
      <Card.Text>
        <strong className='text-uppercase'>Actions</strong><br />
        { mapActions() }
      </Card.Text>
    )
  } else {
    return null
  }
}


export default Actions