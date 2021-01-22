import React from 'react'
import './Teacher.css'

export default class Teacher extends React.Component{
  
  render(){
    const {headImg,teacherNickName,focusNUm,isFocus,teacherIntro,belongOrg} =this.props.teacher
    return(
      <div className='Teacher'>
        <div className='teacher-title'>网师</div>
        <div className='teacher-info-container'>
          <div className='teacher-head-part'>
            <div className='teacher-img' style={{background:headImg,backgroundSize:'cover'}}></div>
            <div className='nick-focus-container'>
              <div className='teacher-nick'>{teacherNickName}</div>
              <div className='teacher-focus'>{}</div>
            </div>
          </div>
          <div className='teacher-intro'>{teacherIntro}</div>
          <div className='belong-org'>{belongOrg}</div>
        </div>
      </div>
    )
  }
}