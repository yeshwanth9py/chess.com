// import React from 'react'
// import { useNavigate } from 'react-router-dom'

const Button = ({onClick, children}:{onClick: () => void, children: React.ReactNode}) => {
    // const navigate = useNavigate();
  return (
    <button className="px-8 py-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" onClick={onClick}>
        {children}
    </button>
  )
}

export default Button