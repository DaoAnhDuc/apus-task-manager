import React, { Component } from 'react'
import styles from "./ListJobTemplate.module.css"
type Props = {}

type State = {}

export class ListJobTemplate extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className={`apus-wrapper-content`}>
        <div className={`apus-header`}>
          <div className={`apus-header-title`}>template công việc</div>
          <div ><button className={`apus-btn-primary`}>Thêm template</button></div>
        </div>
        <div className={`apus-main `}>
          <table className={`apus-table`}>
            <thead>
              <tr>
                <th className={styles.columnCheckbox}>
                  <div className={styles.wrapperCheckbox}>
                    <input type={'checkbox'}></input>
                  </div>
                </th>
                <th>
                  <div className={styles.wrapText}>
                    Tên template công việc
                  </div>
                </th>
                <th>
                  <div>
                    Công việc theo
                  </div>
                </th>
                <th>
                  <div>Trạng thái</div>
                </th>
                <th></th>
                <th className={styles.columnAdd}>
                  <div className={styles.wrapperAdd}>
                    <img src="./icons/Plus.svg" alt="" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,].map((item) => {
                  return (
                    <tr>
                      <td className={styles.columnCheckbox}> <div className={styles.wrapperCheckbox}>
                        <input type={'checkbox'}></input>
                      </div></td>
                      <td >
                        <div className={styles.wrapText}>
                          Phân tích thị trường 6 tháng đầu năm khu vực Hà Nội Phân tích thị trường 6 tháng đầu năm khu vực Hà Nội Phân tích thị trường 6 tháng đầu năm khu vực Hà Nội
                        </div>
                      </td>
                      <td>
                        <div>
                          Kiểu dự án
                        </div>
                      </td>
                      <td>
                        <div>
                          Active
                        </div>
                      </td>
                      <td>
                        <div>
                          <button>
                            <img src="./icons/Edit.svg" alt="" />
                          </button>
                          <button>
                            <img src="./icons/Trash.svg" alt="" />
                          </button>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                  )
                })
              }


            </tbody>
          </table>
        </div>
      </div>
    )
  }
}