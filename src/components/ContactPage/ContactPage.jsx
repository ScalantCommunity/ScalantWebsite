import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import './ContactPage.css'
import { RotatingLines } from 'react-loader-spinner';


const ContactPage = () => {
  const [loading, setLoading] = React.useState(false)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const {data} =await axios.post('https://apiscalant.live/api/contact', {name, email, message})
    setLoading(false)
    if(data.success){
      toast.success(data.info)
    }else{
      toast.error(data)
    }
  }

  return (
    <div>
      <section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2>CONTACT</h2>
      {/* <div className="links">
        <div className="link">
          <a>
            <img
              src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="link">
          <a>
            <img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" />
          </a>
        </div>
        <div className="link">
          <a>
            <img
              src="https://i.postimg.cc/W4Znvrry/codepen.png"
              alt="codepen"
            />
          </a>
        </div>
        <div className="link">
          <a>
            <img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" />
          </a>
        </div>
      </div> */}
    </div>
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <input onChange={(e)=> setName(e.target.value)} value={name} type="text" name="sender" required="" />
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" name="email" required="" />
          <label>Email:</label>
        </div>
        <div className="form-item">
          <textarea onChange={(e)=> setMessage(e.target.value)} value={message} className="" name="message" required="" defaultValue={""} />
          <label>Message:</label>
        </div>
        <button disabled={loading?true:false} className="submit-btn">
          {loading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> : 'SEND'}
        </button>
      </form>
    </div>
  </div>
</section>

    </div>
  )
}

export default ContactPage