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
            <button style={{ marginRight: 0, background: "#0073b1", color:'#fff' }}>
            <i class="fa-brands fa-linkedin-in"></i>
            </button>
          </a>}
          {member.github!=='NA' && <a href={member.github} target="_blank">
            <button style={{ background: "#161b22", color:'#fff' }}>
            <i class="fa-brands fa-github"></i>
            </button>
          </a>}
          {member.twitter !== 'NA' && <a href={member.twitter} target="_blank">
            <button style={{ background: "#52a7e8", color:'#fff' }}>
            <i class="fa-brands fa-twitter"></i>
            </button>
          </a>}
          {member.instagram!=='NA'&& <a href={member.instagram} target="_blank">
            <button style={{ background: "#cd3ea1", color: '#fff' }}>
            <i class="fa-brands fa-instagram"></i>
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