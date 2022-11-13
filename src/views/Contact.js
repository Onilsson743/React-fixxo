import { useRef, useState } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Contact = () => {

    const [contactForm, setContactForm] = useState({name: '', email: '', comments:''});
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
        } 
        else if(!regex_email.test(values.email)) {
            errors.email = "You must enter a valid email (eg name@domain.com)"
        }
        if(!values.comments) {
            errors.comments = "You must enter a comment";
        }else if (values.comments.length < 2) {
            errors.comments = "your comment must be longer then five characters"
        }

        if (Object.keys(errors).length === 0) {
            setCanSubmit(true);
        } else {
            setCanSubmit(false);
        }
        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target;
        setContactForm({...contactForm, [id]: value})        
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormErrors(validate(contactForm))        

        if (formErrors.name === undefined && formErrors.email === undefined && formErrors.comment === undefined) {
            const json = JSON.stringify(contactForm)
            console.log(json)
            fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: json
            })
            .then(res => console.log(res));
            setCanSubmit(true);
            
            console.log(contactForm)
            
        }
        
    }   

    const handleKeyUp = (e) => {
        e.preventDefault();
        const error = {}
        const inputName = e.target.name;
        const inputValue = e.target.value;
       
        // Name field validation
        if (inputName === "name") {
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
        else if (inputName === "comments") {
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
        <Navbar />
        <section className='breadcrumb'>
            <span className=' _containersmall'>
                <a><i className="fa-solid fa-house"></i>Home</a>
                <span>/</span>
                <a className='active'>Contacts</a>
            </span>
        </section>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192276.90176714933!2d7.903638043050079!3d62.557697927021984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46140b9c5fbe81f1%3A0x9340f03793a026c3!2sRomsdalseggen!5e0!3m2!1sen!2sse!4v1666015577808!5m2!1sen!2sse" width="100%" height="400" title='map' />
        

        {
            canSubmit ? (
                <div className='submitted'> 
                    <div className='message'>
                        <h1>Thank you for your comment</h1>
                    </div>
                    
                </div>
            ) : (<></>)
        }
        <>
            <section className='_center'>
                <div className='form _containersmall'>
                    <h5>Come in Contact with Us</h5>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input onKeyUp={handleKeyUp} id='name' type="text" name="name" placeholder='Your Name' value={contactForm.name} onChange={handleChange} ></input>
                            <span className='errormessage'>{formErrors.name}</span>
                        </div>
                        <div>
                            <input onKeyUp={handleKeyUp} id='email' type="email" name="email" placeholder='Your Mail' value={contactForm.email} onChange={handleChange}></input>
                            <span className='errormessage'>{formErrors.email}</span>
                        </div>
                        <div>
                            <textarea onKeyUp={handleKeyUp} id='comments' name="comments" placeholder='Comment' value={contactForm.comments} onChange={handleChange}></textarea>
                            <span className='errormessage'>{formErrors.comment}</span>
                        </div>
                        <button className='button-theme'>Post Comment</button>
                    </form>
                </div>
            </section>
        </>  
        <Footer />
    </div>
  )
}

export default Contact