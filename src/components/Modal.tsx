import React, {useState} from 'react'

type Props = {
  link: string,
  closeModal: any,
  modalLength: number
}

export default function Modal(props: Props) {
  
  let displayState = props.link ? "visible" : "hidden"
  
  let modalContent

  if (props.modalLength == 1) {
    modalContent = (<img className={displayState} src={props.link}></img>)
  } else if (props.modalLength > 1) {
    [...Array(props.modalLength*1).keys()].map(number => {
      return (<img className={displayState} src={`${props.link}${number}`}></img>)
    })
  }

  console.log(modalContent)

  return (
    <div className={`modal ${displayState}`} onClick={props.closeModal}>
      <div className="modal-container">
        {modalContent}
      </div>
    </div>
  )
}