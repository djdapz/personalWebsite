import React, { useState } from 'react'
import axios from 'axios'
import { SubSectionRow } from '../../components/SubSection'
import styled from 'styled-components'
import { MyButton } from '../../components/MyButton'

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  margin-left: auto;
  margin-right: auto;
`

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

const CleanerInputs = `
  border: 1px solid whitesmoke;
  border-radius: 2px;
  margin: .5rem;
  padding-left: .5rem;
  
   :focus{
    outline-color: #fff;
  }
`

const FormInput = styled.input`
  flex-grow: 1;
  height: 2rem;
 
  ${CleanerInputs}
`

const FormTextArea = styled.textarea`
  ${CleanerInputs};
  
  padding-top: .5rem;
  height: 5rem;
  min-height: 3rem;
  max-width: 29rem;
  min-width: 29rem;
`

const FormButton = styled(MyButton)`
  ${CleanerInputs}
`
const setWithEvent = (set) => (e) => set(e.target.value)
const Form = ({ setStatus }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const isValid = name && email && message

  const sendEmail = () => {
    setStatus('SENDING')
  debugger
    axios.post('www.djdapz-email.com/email', {
      to: ['djdapz@aol.com'],
      from: email,
      name,
      message
    })
      .then(() => setEmail(''))
      .then(() => setName(''))
      .then(() => setMessage(''))
      .then(() => setStatus('SUCCESS'))
      .catch(() => setStatus('FAILED'))
  }

  return <ContactForm>
    <FormGroup>
      <FormInput
        type="email"
        className="form-control"
        id="contact_email"
        placeholder="Email Address"
        value={email}
        onChange={setWithEvent(setEmail)}/>
      <FormInput
        type="text"
        className="form-control"
        id="contact_name"
        placeholder="Name"
        value={name}
        onChange={setWithEvent(setName)}/>
    </FormGroup>
    <FormTextArea
      className="form-control"
      id="contact_message"
      placeholder="Message"
      value={message}
      onChange={setWithEvent(setMessage)}/>
    <FormButton disabled={!isValid} onClick={sendEmail}>Send Email</FormButton>
  </ContactForm>
}

const Sending = () => <SubSectionRow name={'Sending'}>
  <span className="glyphicon glyphicon-refresh gly-spin"/>
</SubSectionRow>

const Success = ({ sendAnother }) => <SubSectionRow name={'Email Sent'}>
  <MyButton onClick={sendAnother} className="my-button fill-col">Send Another
  </MyButton>
</SubSectionRow>

const Error = ({ sendAnother }) => <div>
  ERROR
  <button onClick={sendAnother}>Try Again</button>
</div>

export const EmailForm = () => {
  const [status, setStatus] = useState('EDITING')

  return <div className={'row detail-row'}>
    {status === 'EDITING' && <Form setStatus={setStatus}/>}
    {status === 'SENDING' && <Sending/>}
    {status === 'SUCCESS' && <Success sendAnother={() => setStatus('EDITING')}/>}
    {status === 'ERROR' && <Error sendAnother={() => setStatus('EDITING')}/>}
  </div>
}