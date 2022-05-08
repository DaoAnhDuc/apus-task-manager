
import React, { Component } from 'react'
import styles from './Header.module.css';

type Props = {}

type State = {}

export class Header extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className={styles['apus-header']}>
                <div className={styles['apus-header-left']}>
                    <img src="./icons/SquaresFour.svg" className={styles['square-four']} alt="" />
                    <img src="./icons/Logo.svg" className={styles['logo']} alt="" />
                    <div style={{ marginLeft: 20 }} className={styles.text}>Edufit</div>
                    <img src="./icons/ArrowsClockwise.svg" className={styles.icons} alt="" />
                    <div style={{ marginLeft: 20 }} className={styles.text}>BizApp Công việc</div>
                    <img src="./icons/ArrowsClockwise.svg" className={styles.icons} alt="" />
                </div>
                <div className={styles['apus-header-right']}>
                    <img src="./icons/Flag.svg" className={styles['flag']} alt="" />
                    <span style={{ marginLeft: 5 }} className={`${styles.text}`}>VI</span>
                    <img src="./icons/Zoom.svg" className={styles.icons} alt="" />
                    <img src="./icons/Gear.svg" className={styles.icons} alt="" />
                    <img src="./icons/MagnifyingGlass.svg" className={styles.icons} alt="" />
                    <img src="./icons/Question.svg" className={styles.icons} alt="" />
                    <img src="./icons/Bell.svg" className={styles.icons} alt="" />
                    <img src="./icons/DotsThreeCircle.svg" className={styles.icons} alt="" />
                    <img  className={styles.avatar} src="https://phunugioi.com/wp-content/uploads/2020/10/hinh-anh-avatar-nam-dep.jpg" alt="" />
                </div>
            </div>
        )
    }
}