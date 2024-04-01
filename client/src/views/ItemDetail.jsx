import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const ItemDetail = () => {
  //Keep track of singular book!!! as an Object with several key: value (property: value) pairs as object literals.

  /* const [itemList, setItemList] = useState([]) */
  const [item, setItem] = useState([])

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:1700/api/items/${id}`)
      .then(res => {
        console.log(res.data)
        setItem(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  //We don't need to invoke useEffect by a change in id here, since we are accessing only one item by id, and it's properties and values. But providing the id will prevent the error.
  //We already have the id from the axios call for details. So we can make an Axios call using that id to the back-end route, and be directed to the corresponding controller function for delete.
  /*   const deleteItem = () => {
    // Delete book from API
    axios
      .delete(`http://localhost:1910/api/properties/${id}`)
      .then(res => {
        console.log(res.data)
        navigate('/') // Navigate to the homepage after deletion
      })
      .catch(err => console.log(err))
  } */

  return (
    <>
      <div className='container'>
        <div className='header-wrapper'>
          {/* Button to navigate to the Catalog page. */}
          <div className='titles'>
            <h1 className='title'>Item Details</h1>
            {/* <h3 className='sub-title'>
            {property.streetNumber} {property.streetName},{' '}
            {property.unitIdentifiers}
          </h3> */}
          </div>
        </div>

        {/*  <header /> */}
        <div className='row'>
          <dl>
            {/* <th scope='row'>{index + 1}</th> */}
            <dt>{item.itemName}</dt>
            <dt>{item.specs}</dt>
            <dt>{item.orderPrice}</dt>
            <dt>{item.itemCount}</dt>
          </dl>

          <div className='link'>
            <Link to={`/items/${item._id}/edit`}>Update Item</Link>
          </div>
          <div className='link'>
            <Link to={`/`}>Back Home</Link>
          </div>
         {/*  <div>
            <button
              className='delete-button'
              onClick={() => deleteItem(item._id)}
            >
              Delete Item
            </button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default ItemDetail
