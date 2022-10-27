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
        console.log(values)
        if(!values.name) {
            errors.name = "You must enter a name";
        }
        if(!values.email) {
            errors.email = "You must enter a email";
        } 
        else if(!regex_email.test(values.email)) {
            errors.email = "You must enter a valid email (eg name@domain.com)"
        }
        if(!values.comment) {
            errors.comment = "You must enter a comment";
        }else if (values.comment.length < 2) {
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

    const handleKeyUp = (e) => {
        e.preventDefault();
        const error = {}
        const inputName = e.target.name;
        const inputValue = e.target.value;
       
        // Name field validation
        if (inputName === "fullname") {
            const pattern = /^[A-Z][A-Za-z ]{1,30}$/
            if (inputValue.match(pattern) ) {
                delete error.name;
                e.target.classList.remove("invalid")
                setFormErrors(error);
                console.log(formErrors);
            } else {
                e.target.classList.add("invalid")
                error.name = "Your name must only contain letters, contain atleast 2 letters and start with a capital letter"
                setFormErrors(error);
                console.log(formErrors);
            }
        }

        // Email field validation
        else if (inputName === "email") {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
            if (inputValue.match(pattern)) {
                delete error.email;
                e.target.classList.remove("invalid")
                setFormErrors(error)   
            }
            else {
                console.log("your mail must be similar to 'name@domain.com'")
                e.target.classList.add("invalid")
                error.email = "Your mail must be this"
                setFormErrors(error)
            }
        }

        // Comment validation
        else if (inputName === "comment") {
            console.log("this is comment")
            if (inputValue.length < 2) {
                e.target.classList.add("invalid")
                error.comment = "Your comment must contain atleast 2 characters"
                setFormErrors(error)
            }
            else {
                e.target.classList.remove("invalid")
                delete error.comment;
                setFormErrors(error)
            }
        } 
    }


        
    
  return (
    <div className='contact'>
        {/* <Navbar /> */}
        {
            canSubmit ? (
                <div> 
                    <h1>Thank you for your comment</h1>
                </div>
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
                                    <input onKeyUp={handleKeyUp} id='name' type="text" name="fullname" placeholder='Your Name' value={contactForm.name} onChange={handleChange} ></input>
                                    <span className='errormessage'>{formErrors.name}</span>
                                </div>
                                <div>
                                    <input onKeyUp={handleKeyUp} id='email' type="email" name="email" placeholder='Your Mail' value={contactForm.email} onChange={handleChange}></input>
                                    <span className='errormessage'>{formErrors.email}</span>
                                </div>
                                <div>
                                    <textarea onKeyUp={handleKeyUp} id='comment' name="comment" placeholder='Comment' value={contactForm.comment} onChange={handleChange}></textarea>
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