import React from 'react'

import Skill from '../Skill/Skill'
import { CardDeck} from 'react-bootstrap'

class DeckBuilder extends React.Component {
  render() {
    const { skills } = this.props
    return (
      <CardDeck className=''>
        {
        skills.map(skill => <Skill skill={skill} />)
        }
      </CardDeck>
    )
  }
}

export default DeckBuilder