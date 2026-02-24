import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Login from './Login'
import Register from './Register'
import NotFound from './NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/" element={<App/>}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

ReactDOM.createRoot().render(
    <BrowserRouter>
        
    </BrowserRouter>
)

