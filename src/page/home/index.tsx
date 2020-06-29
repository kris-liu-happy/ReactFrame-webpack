import * as React from 'react'
import styles from './index.module.css'

interface Props {
  [propName: string]: any;
}
class Home extends React.Component<Props, {}> {
    goAbout() {
      this.props.history.push('/layout/About')
      console.log(this.props)
    }
    render() {
      return (
        <div>
            <p className={styles.home_welcome} onClick={() => {this.goAbout()}}>欢迎来到qq图书馆</p>
        </div>
      )
    }
  }
  export default Home
