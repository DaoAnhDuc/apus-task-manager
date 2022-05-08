import { connect } from 'react-redux'
import React, { Component } from 'react'
import styles from './LeftMenu.module.css';

type Props = {}

type State = {}

export class LeftMenu extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className={styles.leftMenu}>
          <button className={styles.button}>
              <img src="./icons/ClipboardText.svg" className={styles.icons} alt="" />
              <div className={styles.text}>Công việc của tôi</div>
          </button>
          <button className={styles.button}>
              <img src="./icons/Briefcase.svg" className={styles.icons} alt="" />
              <div className={styles.text}>Dự án</div>
          </button>
          <div className={styles.line}></div>
          <button className={styles.button}>
              <img src="./icons/IconAdd.svg" className={styles.icons} alt="" />
              <div className={styles.text}>Dự án</div>
          </button>
      </div>
    )
  }
}