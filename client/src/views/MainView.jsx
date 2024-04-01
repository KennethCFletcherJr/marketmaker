import { useState } from 'react'
import React from 'react'
import ItemList from '../components/ItemList.jsx'
import ItemCreate from '../components/ItemCreate.jsx'

const MainView = props => {
  const [itemList, setItemList] = useState([])

  return (
  
    <div className='d-flex'>
      <div className='container' >
        <ItemCreate itemList={itemList} setItemList={setItemList} />
      </div>

      <div className='container'>
        <ItemList itemList={itemList} setItemList={setItemList} />
      </div>
    </div>
    
  )
}

export default MainView
