import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { ChakraProvider } from '@chakra-ui/react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter} from "react-router-dom"
import { Provider } from "./components/ui/provider"
import App from './App.jsx'

//swiper
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter> 
        <Provider>
            <App />
          </Provider>
      </BrowserRouter>

</StrictMode>,
)
