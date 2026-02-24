import { Link, Route, Routes } from "react-router-dom"

function Login() {
    return (
        <div className=" min-vw-100 min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <div className="auth-container p-2">
                <div className="bg-secondary d-flex flex-column rounded-4 p-3 w-100">
                    <h1 className="mb-2 text-center fw-bold">L8r</h1>
                    <h4 className="text-center fw-semibold mb-2">Вход</h4>

                    <form className="d-flex flex-column">
                        <label className="mb-1">Имя пользователя</label>
                        <input type="text" className=" form-control text-field rounded-4 p-1 mb-2"></input>
                        
                        <label className="mb-1">Пароль</label>
                        <input type="password" className=" form-control text-field rounded-4 p-1"></input>
                    
                        <hr className="m-2"></hr>
                        <button className=" flex-fill btn btn-primary rounded-4 mb-2">Войти</button>
                    </form>
                    
                    <Link to="/register" className=" flex-fill btn btn-secondary rounded-4">Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
