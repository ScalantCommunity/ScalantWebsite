import React from 'react'

const DiscordReedirect = () => {
  React.useEffect(() => {
    window.location.replace('https://discord.gg/yFqFBvvWAp')
  }, [])
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', height:'50vh'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection:'column'}}>
      <img style={{height:'4.7rem', width:'5rem', borderRadius:'50%'}} src="https://cdn.dribbble.com/users/5242374/screenshots/16641455/media/0a74ea6b1d505b316ced8be139175fc3.gif"/>
      <h3>Loading...</h3>
      </div>
    </div>
  )
}

export default DiscordReedirect