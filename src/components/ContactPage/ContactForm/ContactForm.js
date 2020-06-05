import React from 'react'
import { Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.onNameChange = this.onNameChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onNameChange = event => this.setState({ name: event.target.value })
  onEmailChange = event => this.setState({ email: event.target.value })
  onMessageChange = event => this.setState({ message: event.target.value })
  resetForm = () => this.setState({name: "", email: "", message: ""})
  
  handleSubmit = event => {
    console.log(this.state)
    event.preventDefault()

    axios({
      method: "POST", 
      url:"http://localhost:3000/send", 
      data:  this.state
    }).then((response)=> {
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
       } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} method="POST">
        <Form.Row id='contact-form'>
          <Form.Group className='text-left' as={Col} controlId="formGridName">
            <Form.Label className='text-left'>Name*</Form.Label>
            <Form.Control type="name" placeholder="Enter name" value={this.state.name} onChange={this.onNameChange} required />
          </Form.Group>
          <Form.Group className='text-left' as={Col} controlId="formGridEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onEmailChange} required />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group className='text-left' as={Col} controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message*</Form.Label>
            <Form.Control as="textarea" rows="3" value={this.state.message} onChange={this.onMessageChange}  />
          </Form.Group>
        </Form.Row>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default ContactForm