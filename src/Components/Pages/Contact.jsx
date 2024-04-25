import React from 'react'

const Contacts = () => {
  const containerStyle = {
    maxwidth: '800px',
    margin: '0 auto',
    padding: '20px',
    overflowY: 'auto',
    maxHeight: 'calc(100vh-100px)',
    fontSize: '16px',
  };




  return (
    <div style={containerStyle}>
   <div>
      <b>Copyright owner:</b>Nicholus Maina<br/><br/>
      <b>Address: </b>Kenya Institute of Mass Communication<br/>
P.O. Box 42422 – 00100 Uholo Road,<br/>
Off Mombasa Road
Nairobi
Nairobi Kenya<br/><br/>
<b>Telephone:</b> +254736931570<br/>
<b>Email: </b> nickmmmaina@gmail.com<br/>
<b>Website:  </b> <a href="http://niko123.vercel.app" target="_blank" rel="noopener noreferrer">http://niko123.vercel.app</a><br/><br/><br/>
<b>Administrator Contacts</b><br/><br/>
<b>Name  :</b> Said Bob Hassan<br/>
<b>Phone : </b>0769716787<br/>
<b>Email :</b> bobsaid358@gmail.com

</div>
    </div>
  )
}

export default Contacts