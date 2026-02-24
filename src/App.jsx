import { useState } from 'react'
import About from './About'
import Login from './Login'
import { Link, Routes, Route } from 'react-router-dom'
import Layout from './Layout'

function App() {
    return (
        <>
            <div className=' bg-secondary p-2 mb-2 d-flex flex-column align-items-center'>
                <div className='container'>
                    <h3>Навигатор</h3>
                </div>
            </div>
            <div className=' min-vw-100 d-flex flex-column align-items-center'>
                <div className='container'>
                    <div className=' d-flex flex-column gap-2'>
                        <Link className='btn btn-secondary flex-fill rounded-4' to="/login">Вход</Link>  
                        <Link className='btn btn-secondary flex-fill rounded-4' to="/register">Регистрация</Link>                
                        <Link className='btn btn-secondary flex-fill rounded-4' to="/">Главная</Link>                
                        <Link className='btn btn-secondary flex-fill rounded-4' to="/123123">Не найдено</Link>                
                        <Link className='btn btn-secondary flex-fill rounded-4' to="/login">Логин</Link>                
                    </div>
                    <Layout/>
                </div>
            </div>
        </>
    )
}

function Home() {
    return <h1>Главная страница</h1>
}

export default App