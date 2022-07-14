import React from 'react'

const TnCRedirect = () => {
  React.useEffect(() => {
    window.location.replace('https://terms.scalant.in')
  }, [])
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', height:'50vh'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection:'column'}}>
      <h3>Loading...</h3>
      </div>
    </div>
  )
}

export default TnCRedirect