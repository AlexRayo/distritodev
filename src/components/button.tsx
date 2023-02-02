import React from 'react'

function Button({type, text, href, target, style}:any) {
  return (    
        type === "primary" ?
        <a 
            href= {href} 
            target= {target !== undefined ? target : "_self"}
            className={`btn-primary ${style}`}>
            {text}
        </a>
        :
        type === "secondary" ?
        <a 
            href= {href}
            target= {target !== undefined ? target : "_self"} 
            className={`btn-secondary ${style}`}>
            {text}
        </a>
        :
        <a 
            href= {href}
            target= {target !== undefined ? target : "_self"} 
            className={`${style}`}>
            {text}
        </a>
  )
}
//Custom buttons will not have dark/light mode switching

export default Button