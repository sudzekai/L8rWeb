import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Link } from 'react-router-dom'

function Layout(){
    return(
        <div className='d-flex flex-column p-0 min-vw-100'>
            <nav className='fixed-bottom w-100 p-2 d-flex justify-content-center'>
                <div className='shadow-sm bg-secondary rounded-4 p-2 container'>
                    <div className='d-flex gap-1'>
                        <Link className='btn btn-secondary rounded-4 w-50' to="/">
                            Чаты
                        </Link>
                        <Link className='btn btn-secondary rounded-4 w-50' to="/profile">
                            Профиль
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Layout
