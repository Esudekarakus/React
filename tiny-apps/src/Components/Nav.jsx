import { NavLink } from "react-router-dom";
import styles from './Nav.module.css';

export default function Nav(){
    return (
        <nav className={styles.Nav}>
            <ul>
                <li>
                    <NavLink to="/">Ana Sayfa</NavLink>
                </li>
                <li>
                    <NavLink to="/tiny-quiz-app">
                        Tiny Quiz App
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/accordion">
                        Accordion Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tiktoktoe">
                        Tic Tac Toe
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/filterable-employees-table-final">
                        Filterable Employees Table
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
    
}