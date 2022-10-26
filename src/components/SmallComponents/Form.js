import React, { useRef, useState } from 'react'
import FormInput from './FormInput'

const Form = () => {

    // const [username, setUsername] = useState("");

    // window.addEventListener('keyup', (event) => {
    //     console.log(username);
    // })

    // document.getElementsByTagName('input', (event) => {

    // })
    

    // const usernameRef = useRef();

    const [values,setValues] = useState({
        Fullname:"",
        Email:"",
        Comment:"",
    })
    
    const inputs = [
        {
            id:1,
            name:"fullsname",
            type:"text",
            placeholder:"Your Name",
            label:"fult Name",
            required: true,
            pattern: "^[A-Z][A-Za-z ]{0,30}$",
            errorMessage:"Your name must start with a capital letter and contain between 1-30 characters",
        },
        {
            id:2,
            name:"email",
            type:"email",
            placeholder:"Your Mail",
            label:"Email",
            required: true, 
            // pattern: '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$',
            errorMessage:"Please enter a valid email adress",
        },
        {
            id:3,
            name:"comment",
            type:"text",
            placeholder:"Comment",
            label:"A Comment",
            required: true,
            errorMessage:"Please enter a comment",
        }
    ]

    const handlesubmit = (e) => {
        e.preventDefault();
        const info = new FormData(e.target)
        console.log(Object.fromEntries(info.entries()))
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    console.log(values)

    // label={input.name} placeholder={input.placeholder}
  return (
    <div className='form'>
        <h1>Hello</h1>
        <form className='app' onSubmit={handlesubmit}>
            {inputs.map((input) => (
                <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange = {onChange}
                />
            ))}

            {/* <FormInput name ="Email" placeholder="Your Email" label="Email" />
            <FormInput name ="Comment" placeholder="Comment" label="Comment" /> */}
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form