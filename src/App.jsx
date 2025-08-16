import React from 'react'
import Header from './Header'
import { ColorPicker } from 'antd';

export default function App() {
  return (
    <div>
      <Header/>
      <ColorPicker defaultValue="#000" size='large'/>
    </div>
  )
}
