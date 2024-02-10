import React from 'react'
import styles from './styles.module.scss';
import CustomSelection from '../Component/CustomSelection';

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to task  Management system</h2>
      <div className={styles.dashboard_bg}>
        <div className={styles.filter_container}>
          <div className={styles.section1}>Task</div>
          <div className={styles.section2}>
            <div className='mx-1'>
            <CustomSelection/>

            </div>
            <div className='mx-1'>
            <CustomSelection/>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
