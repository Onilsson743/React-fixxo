import { useRef } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Contact = () => {
   
    const nameRef = useRef();
    const mailRef = useRef();
    const textRef = useRef();

    // const [values, setValues] = useState ({
    //     name:"",
    //     mail:"",
    //     comment:""
    // })



    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        console.log(Object.fromEntries(data.entries()));
    }
    
  return (
    <div className='contact'>
        <Navbar />
        <section className='_center'>
            <span className='breadcrumb _containersmall'>
                <a><i class="fa-solid fa-house"></i>Home</a>
                <span>/</span>
                <a className='active'>Contacts</a>
            </span>
        </section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192276.90176714933!2d7.903638043050079!3d62.557697927021984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46140b9c5fbe81f1%3A0x9340f03793a026c3!2sRomsdalseggen!5e0!3m2!1sen!2sse!4v1666015577808!5m2!1sen!2sse" width="100%" height="400" title='map' />
        
        <section className='_center'>
            <div className='form _containersmall'>
                <h5>Come in Contact with Us</h5>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" id="name" placeholder='Your Name' ref={nameRef} required></input>
                    <input type="email" name='mail' id="mail" placeholder='Your Mail' ref={mailRef} required></input>
                    <textarea id='comment' name='comment' placeholder='Comment' ref={textRef} required></textarea>
                    <button type='submit' className='button-theme'>Post Comment</button>
                </form>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default Contact