import React, {useState} from 'react'
import axios from "axios";


const Sending = () => <div className='confirmation-box'>
    <div className='row'>
        <div className='col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3'>
            <h3>
                Sending
            </h3>
        </div>
        <div className='col-md-2 col-md-offset-5 col-xs-offset-4 col-xs-4 spinner'>
            <span className="glyphicon glyphicon-refresh gly-spin"></span>
        </div>
    </div>
</div>

const Success = ({sendAnother}) => <div className='confirmation-box'>
    <div className='row'>
        <div className='col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3'>
            <h3 className='center-me'>
                Email Sent
            </h3>
        </div>
        <div className='col-md-2 col-md-offset-5 col-xs-offset-4 col-xs-4 '>
            <button onClick={sendAnother} className="my-button fill-col">Send Another
            </button>
        </div>
    </div>

</div>

const Error = ({sendAnother}) =>
    <div>
        ERROR
        <button onClick={sendAnother}>
            Try Again
        </button>
    </div>


const Form = ({setStatus}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const isValid = name && email && message;


    const sendEmail = () => {
        setStatus("SENDING");
        axios.post("www.djdapz-email.com/email", {
            to: ["djdapz@aol.com"],
            from: email,
            name,
            message
        })
            .then(() => setStatus("SUCCESS"))
            .catch(() => setStatus("FAILED"))
    };


    return <form onSubmit={sendEmail}>
        <div className="row">
            <div className="form-group col-md-offset-3 col-md-3 col-xs-offset-2 col-xs-8">
                <input
                    type="email"
                    className="form-control"
                    id="contact_email"
                    placeholder="Email Address"
                    value={name}
                    onChange={setEmail}/>
            </div>

            <div className="form-group col-md-3 col-md-offset-0 col-xs-offset-2 col-xs-8 ">
                <input
                    type="text"
                    className="form-control"
                    id="contact_name"
                    placeholder="Name"
                    value={name}
                    onChange={setName}/>
            </div>
        </div>
        <div className='row'>
            <div className="form-group col-md-6 col-md-offset-3 col-xs-offset-2 col-xs-8">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="contact_message"
                                    placeholder="Message"
                                    value={message}
                                    onChange={setMessage}>
                                </textarea>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-2 col-md-offset-7 col-xs-3 col-xs-offset-7'>
                <button type="submit" className="my-button fill-col" disabled={!isValid}>Send Email</button>
            </div>
        </div>
    </form>
}


export const EmailForm = () => {
    const [status, setStatus] = useState("EDITING");

    return <div className={"row detail-row"}>
        {status === "EDITING" && <Form setStatus={setStatus}/>}}
        {status === "SENDING" && <Sending/>}}
        {status === "SUCCESS" && <Success sendAnother={() => setStatus("EDITING")}/>}}
        {status === "ERROR" && <Error sendAnother={() => setStatus("EDITING")}/>}}
    </div>
}