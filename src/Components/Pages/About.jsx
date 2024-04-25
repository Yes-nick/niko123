import { getLineHeight } from 'antd/es/theme/internal';
import React from 'react'

const About = () => {
  const containerStyle = {
    maxwidth: '100px',
    overflowx: 'hidden',
    overflowY: 'auto',
    padding: '20px',
    boxsizing: 'border-box',
  };

  const contentStyle = {
    maxwidth: '600px',
    margin: '0 auto',
    fontSize: '16px',
    lineHeight: '1.6',
  };

  const responsiveContentStyle = {
    '@media (max-width: 768px)': {
      fontSize: '14px',
    },
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...contentStyle, ...responsiveContentStyle}}>
     <h1>Nicholas Muriithi Maina</h1>

Hello! I'm Nicholas Muriithi Maina, a dedicated professional currently serving
 as the Access Information Officer within the Customer Service Department at 
 Nairobi City County Government. With a background rooted in public service, 
 I bring over three years of experience in governmental roles, striving to 
 enhance accessibility and transparency for citizens.

Professional Experience:

Access Information Officer: Nairobi City County Government, Customer Service
 Department (Present)
Clerical Officer: Nairobi City County Government, Inspectorate Department
Intern: Nyeri County Government, Lands Department
Education:

Bachelor's Degree in International Relations and Diplomacy: Technical University of Kenya
Diploma in Psychology and Counselling
About Me:
Driven by a passion for facilitating open communication and efficient public service
 delivery, I have honed my skills in information management and customer relations
  throughout my career. My tenure in diverse departments has equipped me with a
   comprehensive understanding of administrative processes and a commitment to 
   serving the community effectively.

Connect with Me:
Feel free to reach out for discussions on public administration, governance, or
 any related topics. Let's collaborate to foster transparency and accessibility in
  our communities........... E-mail ( nickmaish444@gmail.com)
</div>
  </div>
  )
}

export default About