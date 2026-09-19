import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import AOS from "aos"
import "aos/dist/aos.css"

// Inisialisasi AOS sekali secara global
AOS.init({
  once: false,
  duration: 1000,
  offset: 10,
})

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
