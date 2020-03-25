import React from 'react'

import DeckBuilder from '../DeckBuilder/DeckBuilder'
import { Container, Row } from 'react-bootstrap'

import usability  from './Icons/button-finger.svg'
import frontend  from './Icons/keyboard.svg'
import accessibility  from './Icons/earth-america.svg'
import management  from './Icons/checklist.svg'
import teambuilder  from './Icons/conversation.png'
import adaptability  from './Icons/artificial-intelligence.svg'
const skills = [
  {
    name: 'Usability', 
    src:usability,
    description: 'User driven design through prototyping and testing.'
  }, 
  {
    name: 'Front-End Development', 
    src:frontend,
    description: 'Full stacked educated with focus on front end.'
  }, {
    name: 'Accessibility Advocate', 
    src: accessibility,
    description: 'Accassibility starts with best practices.'
  }
]

const skills2 = [ 
  {
    name: 'Project Management', 
    src: management,
    description: 'Understand the challenge, define the milestones, and lead incremental progress.' 
  }, {
    name: 'Team Builder', 
    src: teambuilder,
    description: 'Outgoing and social personality that creates team cohesion.'
  }, {
    name: 'Adaptability', 
    src: adaptability,
    description: 'Continually adapting to new challenges through intellectual curosity.'
  }
]

class SkillsList extends React.Component {
    render() {
      return (
        <section className='SkillsList bg-secondary'>
          <Container className='pt-5'>
            <h2>Expertise & Skills</h2>
            <Row>
              <DeckBuilder skills={skills} />
              <DeckBuilder skills={skills2} />
            </Row>
          </Container>
        </section>
      )
    }
}

export default SkillsList