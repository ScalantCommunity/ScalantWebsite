import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import './ContactPage.css'
import { RotatingLines } from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';


const ContactPage = () => {
  const [loading, setLoading] = React.useState(false)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const {data} =await axios.post('https://apiscalant.live/api/contact', {name, email, message})
    setLoading(false)
    if(data.success){
      toast.success(data.info)
      setEmail('')
      setName('')
      setMessage('')

      setTimeout(()=>{
        history.push('/')
      },1000)
    }else{
      toast.error(data)
    }
  }

  return (
    <div style={{zIndex:'100'}}>
      <section id="contact">
  <div className="contact-box">
    {/* <div style={{display:'flex', alignItems:'center', justifyContent:'center'}} className="contact-links">
      <h2>CONTACT</h2>

    </div> */}
    <div className="contact-form-wrapper">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <input onChange={(e)=> setName(e.target.value)} value={name} type="text" name="sender" required="" />
          <label>Name:</label>
        </div><br/>
        <div className="form-item">
          <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" name="email" required="" />
          <label>Email:</label>
        </div><br/>
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