import { Link, Route } from 'wouter';
import ListOnComponent from '../services/ListOnComponent';


export default function ApiFetch() {

    return (
        <>
            <header>

                <h1>app</h1>
                <div
                    className='conte'>
                    <span>
                        <Link to="/gif/color">entrar a color </Link>
                    </span>
                    <span>
                        <Link to="/gif/colombia">entrar a colombia </Link>
                    </span>
                    <span>
                        <Link to="/gif/argentina">entrar a argentina </Link>
                    </span>
                    <span>
                        <Link to="/gif/venezuela">entrar a venezuela </Link>
                    </span>
                </div>
                <Route
                    component={ListOnComponent}
                    path='/gif/:keyword'
                />

            </header >
        </>
    );
}