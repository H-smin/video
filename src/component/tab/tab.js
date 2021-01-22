import React from 'react'
import './tab.css'

export default class Tab extends React.Component {
  constructor(props) {
    super()
    this.state = {
      initTab: 1
    }
  }
  changeClass = (idx) => {
    this.setState({
      initTab: idx
    })
  }
  render() {
    return (
      <div className='Tab'>
        <div className='tab-box '>
          <div onClick={() => this.changeClass(1)} className={this.state.initTab === 1 ? 'directory tab-common high-light' : 'directory tab-common '} >目录</div>
          <div onClick={() => this.changeClass(2)} className={this.state.initTab === 2 ? 'evaluation tab-common high-light' : 'evaluation tab-common'}>评价<span>(999)</span></div>
          <div onClick={() => this.changeClass(3)} className={this.state.initTab === 3 ? 'recommend tab-common high-light' : 'recommend tab-common'} >推荐</div>
        </div>
        <div className='cover-container'>
          <div className='laminated'></div>
          <div className='cover'></div>
          <div className='lesson-title'>
            <div className='cover-title'>心的视界摄影零基心的视界摄影零基心的视界摄影零基心的视界摄影零基</div>
            <div className='time'>全部20课时</div>
          </div>
        </div>
        <div className='tab-directory'></div>
      </div>
    )
  }
}