import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faComments, faEye } from '@fortawesome/free-regular-svg-icons'
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons'
import logo from './public/or-logo.png'
import Image from 'next/image'


const config: DocsThemeConfig = {
  logo: (
    <div style={{
      display: 'flex',          
      alignItems: 'center',    
      justifyContent: 'center', 
      gap: '10px'              
    }}>
      <Image src={logo} alt="Logo" width={150} height={100} style={{marginTop:5}}/>
      <span style={{
      color: '#8E9CAC',       // Lighter gray color
      fontWeight: 'semibold',     // Bold font
      fontSize: '1.2em'       // Larger text size
      }}>
      | Developer Docs
      </span>
    </div>
  ),
  footer: {
    text: '',
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (title === 'Twitter') {
        return <><FontAwesomeIcon icon={faXTwitter} height={25} width={25} style={{border: '.5px solid #ccc', padding: 3, marginRight: 13, borderRadius: 5}} /> {title}</>
      }
      if (title === 'Discord') {
        return <><FontAwesomeIcon icon={faDiscord} height={25} width={25} style={{border: '.5px solid #ccc', padding: 3, marginRight: 13, borderRadius: 5,}} /> {title}</>
      }
      if (title === 'Github') {
        return <><FontAwesomeIcon icon={faGithub} height={25} width={25} style={{border: '.5px solid #ccc', padding: 3, marginRight: 13, borderRadius: 5, }} /> {title}</>
      }
      if (title === 'Text Completion') {
        return <><FontAwesomeIcon icon={faComments} height={25} width={25} style={{padding: 4, marginRight: 5, borderRadius: 5, marginTop: -2 }} /> {title}</>
      }
      if (title === 'Vision') {
        return <><FontAwesomeIcon icon={faEye} height={25} width={25} style={{padding: 4, marginRight: 5, borderRadius: 5, marginTop: -2 }} /> {title}</>
      }
      if (title === 'Object Generation') {
        return (
        <>
          <FontAwesomeIcon icon={faObjectGroup} height={25} width={25} style={{padding: 4, marginRight: 5, borderRadius: 5, marginTop: -2 }} /> 
          {title} 
          <div style={{border: '.5px solid #EDEDED', paddingTop: 0, paddingBottom: 0, paddingLeft: 2, paddingRight: 2, marginLeft: 5, marginTop: 2, marginBottom: 3, fontSize: 11, borderRadius: 5, backgroundColor: "#FEF7ED", color: "gray" }}>Beta</div>
        </>)
      }
      return <>{title}</>
    }
  },
  feedback: {
    content: null,
  },
  editLink: {
    text:'',
  },
  themeSwitch: {
    component: null
  }
}

export default config