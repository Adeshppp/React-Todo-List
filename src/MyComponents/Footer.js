import React from 'react'

export const Footer = () => {
  let footerStyle ={
    position:"relative",
    top : "43vh",
    width: "100%",
    // backgroundColor : "red"
    // border:"2px solid red",
    margin:"my-3"
  }
  return (
    <footer className='bg-dark text-light py-3 ml-1' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; MyTodosList.com
      </p>
      </footer>
  )
}
 