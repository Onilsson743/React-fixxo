import { useRef, useState } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Contact = () => {

    

    const [contactForm, setContactForm] = useState({name: '', email: '', comment:''});
    const [formErrors, setFormErrors] = useState({});
    const [canSubmit, setCanSubmit] = useState(false);

    const validate = (values) => {
        const errors = {};
        const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if(!values.name) {
            errors.name = "You must enter a name";
        }
        if(!values.email) {
            errors.email = "You must enter a email";
        } else if(!regex_email.test(values.email)) {
            errors.email = "you must enter adress (eg name@domain.com)"
        }
        if(!values.comment) {
            errors.comment = "You must enter a comment";
        }else if (values.comment.length < 5) {
            errors.comment = "your comment must be longer then five characters"
        }



        if (Object.keys(errors).length === 0) {
            setCanSubmit(true);
        } else {
            setCanSubmit(false);
        }

        console.log(formErrors)

        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target;
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))

        const data = new FormData(e.target);
        console.log(data)
        console.log(Object.fromEntries(data.entries()));
    }   


        
    
  return (
    <div className='contact'>
        <Navbar />
        {
            canSubmit ? (
                <h1>Thank you for your comment</h1>
            ) 
            :
            (
                <>
                    <pre>{ JSON.stringify(formErrors) }</pre>
                    <section className='_center'>
                        <div className='form _containersmall'>
                            <h5>Come in Contact with Us</h5>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input id='name' type="text" name="fullname" placeholder='Your Name' value={contactForm.name} onChange={handleChange} ></input>
                                    <span className='errormessage'>{formErrors.name}</span>
                                </div>
                                <div>
                                    <input id='email' type="email" name="email" placeholder='Your Mail' value={contactForm.email} onChange={handleChange}></input>
                                    <span className='errormessage'>{formErrors.email}</span>
                                </div>
                                <div>
                                    <textarea id='comment' name="comment" placeholder='Comment' value={contactForm.comment} onChange={handleChange}></textarea>
                                    <span className='errormessage'>{formErrors.comment}</span>
                                </div>
                                <button className='button-theme'>Post Comment</button>
                            </form>
                        </div>
                    </section>
                </>
            )
        }
        <Footer />
    </div>
  )
}

export default Contact