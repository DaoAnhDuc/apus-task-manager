
import { Component } from 'react'
import { Content } from '../layout/Content';
import { Header } from '../layout/Header';
import { LeftMenu } from '../layout/LeftMenu';
import styles from './HomePage.module.css';

type Props = {}

type State = {}

export class HomePage extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div id="apus-home-page" className={styles['apus-home-page']}>
                <div className={styles['apus-home-container']}>
                    <div className={styles['apus-home-header']}>
                        <Header />
                    </div>
                    <div className={styles['apus-home-main']}>
                        <div className={styles['apus-home-sider']}>
                            <LeftMenu />
                        </div>
                        <div className={styles['apus-home-content']}>
                            <Content />
                            <div className={styles.copyright}>Copyright © 2021. Bản quyền site thuộc về Công ty EDUFIT</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}