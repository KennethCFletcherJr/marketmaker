import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
/* @import "bootstrap/scss/bootstrap"; */

function ItemList (props) {
  const { itemList, setItemList } = props

  const navigate = useNavigate()

  const { id } = useParams

  useEffect(() => {
    axios
      .get('http://localhost:1700/api/items')
      .then(res => {
        console.log(res.data)
        setItemList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  //   const deleteButton = itemIdFromBelow => {
  //     let filteredItems = items.filter(
  //       item => item._id !== itemIdFromBelow
  //     )
  //     setItemList(filteredItems)
  //     //store.id is from the map() function, mapping through and displaying the whole list. storeId is the id entered by the deleteButton().
  //     /* const removeBox = (idFromBelow)=>{
  // let filteredBoxArray = arrayStringColorBox.filter((box)=>box.id !== idFromBelow);
  // setArrayStringColorBox(filteredBoxArray); */

  //     axios
  //       .delete(`http://localhost:1700/api/${itemIdFromBelow}`)
  //       // .delete(`http://localhost:9000/api/stores/${store.id}` */)
  //       /*  .delete(`/${id}`)*/
  //       .then(res => {
  //         console.log(res.data)

  //         navigate(`/`) // Navigate to the homepage after deletion
  //       })
  //       .catch(err => console.log(err))
  //   }

  return (
    <>
      <div className='container  my-5 pt-0'>
        <div className='titles'>
          <h1 className='title'>Items Listed!!!</h1>
          <hr />
          <h3 className='sub-title'>All Items</h3>
        </div>

        <div className='row'>
          <div className='col-6'>
            {/* {itemList.map((item, _id) => (
              <ul key={_id}>
                <li>
                  <Link to={`/items/${item._id}/details`}>{item.itemName}</Link>
                </li>
                <li>Specs: {item.specs}</li>
                <li>Order Price: {item.orderPrice}</li>
                <li>Item Count: {item.itemCount}</li>
              </ul>
            ))} */}

            {itemList.map((item, _id) => (
              <dl key={_id}>
                <dt>
                  <Link to={`/items/${item._id}/details`}>{item.itemName}</Link>
                </dt>
                <dt>Specs: {item.specs}</dt>
                <dt>Order Price: {item.orderPrice}</dt>
                <dt>Item Count: {item.itemCount}</dt>
              </dl>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemList
