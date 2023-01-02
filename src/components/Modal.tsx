import React, {useState} from 'react'

type Props = {
  link: string,
  closeModal: any
}

export default function Modal(props: Props) {
  const [displayLink, setDisplayLink] = useState(props.link)
  
  const displayState = props.link ? "block" : "none"


  return (
    <div className='modal' style={{display: displayState}} onClick={props.closeModal}>
      <img src={props.link}></img>
    </div>
  )
}