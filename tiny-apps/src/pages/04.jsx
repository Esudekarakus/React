import { useState } from "react";
import styles from '../Components/TicTacToe.module.css';
export default function Page04(){
    return(
        <>
            <h1>Tic Tac Toe</h1>
            <div className={styles.TicTacToe}>
                <div className={styles.Board}>
                    <div >1item</div>
                    <div>2item</div>
                    <div>3item</div>
                    <div>4item</div>
                    <div>5item</div>
                    <div>6item</div>
                    <div>7item</div>
                    <div>8item</div>
                    <div>9item</div>
                </div>
                
            </div>
        </>
       
    )
}