import React from 'react'
import ReactDOM  from 'react-dom/client';
import App from './App.jsx'



const createElement = React.createElement(
  "a",
  {href: "https://www.google.com/", target: "_blank"},
  "click me to visit rgere"
)

ReactDOM.createRoot(document.getElementById('root')).render(
      createElement
)
