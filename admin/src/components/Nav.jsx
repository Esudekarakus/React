import { NavLink } from "react-router-dom";
import styles from './Nav.module.css';

export function Nav() {

    return (
        <nav className={styles.NavMain}>
            <ul>
                <li>
                    <NavLink to="/">Ana sayfa</NavLink>

                </li>
                <li>
                    <NavLink to="/ürünler">Ürünler</NavLink>

                </li>

            </ul>
        </nav>
    )
}