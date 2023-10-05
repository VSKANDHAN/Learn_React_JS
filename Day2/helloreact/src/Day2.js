import React from 'react'
import ReactDOM from 'react-dom'
import profile from './profile.jpg'
const root=document.getElementById('root')
let name='KANDHAN VS'
let role='MERN Stack Developer'
let skills=['HTML','CSS','JS','BOOTSTRAP','JQUERY','REACT JS','NODE JS','EXPRESS','MONGODB','PYTHON','PHP','MYSQL','ARDUINO']
let formatedSkills=skills.map((e)=><li>{e}</li>)
const imgStyle={
  'borderRadius':'50%',
  'width':'250px',
  'height':'250px'

}

const userCard=(
  <div className='user-card'>
  <div className='profile'>
    <img style={imgStyle} src={profile} alt='profile'/>
  </div>
  <div className='profile-name'>
    <h1>{name}</h1>
    <h3>{role}</h3>
  </div>
  <div className='skills'>
    <h1>SKILLS</h1>
    <ul>{formatedSkills}</ul>
  </div>
  </div>
)

ReactDOM.render(userCard,root)