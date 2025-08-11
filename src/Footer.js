import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <footer>
        <p>Copy Right &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer