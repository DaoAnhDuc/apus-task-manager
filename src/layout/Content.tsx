
import React, { Component } from 'react'
import { ListJobTemplate } from '../features/ListJobTemplate/ListJobTemplate'
import styles from "./Content.module.css"
type Props = {}

type State = {}

export class Content extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className={styles.content}>
          <ListJobTemplate/>
      </div>
    )
  }
}
