import React, {useState} from 'react'

type Props = {
  link: string,
  closeModal: any
}

export default function Modal(props: Props) {
  const [displayLink, setDisplayLink] = useState(props.link)
  const [visibility, setVisibility] = useState('hidden')
  
  let displayState = props.link ? "visible" : "hidden"


  return (
    <div className={`modal ${displayState}`} onClick={props.closeModal}>
      <div className="modal-container">
        <img className={displayState} src={props.link}></img>
      </div>
    </div>
  )
}