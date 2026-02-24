import { Link } from "react-router-dom"

function Register(){
    return (
        <div className="min-vw-100 min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <div className="auth-container p-2 ">
                <div className="bg-secondary d-flex flex-column rounded-4 p-3 w-100">
                    <h1 className="mb-2 text-center fw-bold">L8r</h1>
                    <h4 className="text-center fw-semibold mb-2">Регистрация</h4>

                    <form className="d-flex flex-column">
                        <label className="mb-1">Имя пользователя</label>
                        <input type="text" className=" form-control text-field rounded-4 p-1"></input>

                        <hr className="m-2"></hr>
                        <button className=" flex-fill btn btn-primary rounded-4 mb-2">Зарегистрироваться</button>
                    </form>
                    
                    <Link to="/login" className=" flex-fill btn btn-secondary rounded-4">Войти</Link>
                </div>
            </div>
        </div>
    )
}

export default Register