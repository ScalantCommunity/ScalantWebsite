import axios from 'axios';
import React from 'react'
import Tilt from 'react-parallax-tilt';
const Members = () => {
  const [members, setMembers] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const fetchMembers = async ()=>{
      setLoading(true)
      const {data} = await axios.get('https://scalantformapi-dishant5570-gmailcom-scalant.vercel.app/api/images')
      setMembers(data)
      setLoading(false)
    }
    fetchMembers()
  }, [])


  
  return (
    <div className='container' style={{display: 'flex', flexWrap: 'wrap', gap:'2rem', alignItems: 'center', justifyContent: 'center'}}>
      {loading && <div style={{display: 'flex', flexWrap: 'wrap', gap:'2rem', alignItems: 'center', justifyContent: 'center', height:'50vh'}}><div className="loading"></div></div>}
      {loading===false && members.map(member=>{
        if(member.isTeamMember){
          return <div data-aos="zoom-in" key={member.contactNumber}><Tilt
        
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        glarePosition="all"
        scale={1.02}
        className="parallax-effect-glare-scale">
        <center className="inner-element">
          <img
            src={member.photo}
            alt="image"
            style={{height:'8rem', width:'8rem', borderRadius:'4rem',  filter:'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))'}}
          />
          <h2 style={{fontFamily:'Poppins', fontSize:'20px', marginTop:'0.5rem'}}>{member.name.toLocaleUpperCase()}</h2>
          <p style={{fontFamily:'Poppins', fontSize:'20px', marginBottom:'0.5rem'}}>{member.domain}</p>
          <div style={{display:'flex'}}>
          {member.linkedin!=='NA' && <a href={member.linkedin} target="_blank">
            <button style={{ marginRight: 0, background: "#0e76a8" }}>
              <i className="fa fa-linkedin" />
            </button>
          </a>}
          {member.github!=='NA' && <a href={member.github} target="_blank">
            <button style={{ background: "#4267B2" }}>
              <i className="fa fa-github" />
            </button>
          </a>}
          {member.twitter !== 'NA' && <a href={member.twitter} target="_blank">
            <button style={{ background: "#1DA1F2" }}>
              <i className="fa fa-twitter" />
            </button>
          </a>}
          {member.instagram!=='NA'&& <a href={member.instagram} target="_blank">
            <button style={{ background: "#e4405f" }}>
              <i className="fa fa-instagram" />
            </button>
          </a>}
          </div>
        </center>
      </Tilt>
      </div>
        }
      
      })}
  
    </div>
    
  )
}

export default Members