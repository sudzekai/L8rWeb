import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="text-center mt-5">
            <h1 className="display-1 fw-semibold">404</h1>
            <h2 className="mb-4">Ты явно не там, где должен быть</h2>
            <p className="mb-4">Здесь пусто</p>
            <Link to="/" className="btn btn-primary rounded-4">
                Вернуться на главную
            </Link>
        </div>
    )
}

export default NotFound