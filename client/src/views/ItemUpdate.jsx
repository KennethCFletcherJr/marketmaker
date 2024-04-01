import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const ItemUpdate = props => {
  /*  const [property, setProperty] = useState({}); */
  const [itemList, setItemList] = useState([])

  const { id } = useParams()

  const [itemName, setItemName] = useState('')
  const [specs, setSpecs] = useState('')
  const [orderPrice, setOrderPrice] = useState(0)
  const [itemCount, setItemCount] = useState(0)

  const navigate = useNavigate()

  const itemNameHandler = e => {
    setItemName(e.target.value)
  }

  const specsHandler = e => {
    setSpecs(e.target.value)
  }

  const orderPriceHandler = e => {
    setOrderPrice(e.target.value)
  }

  const itemCountHandler = e => {
    setItemCount(e.target.value)
  }

  useEffect(() => {
    axios
      .get(`http://localhost:1700/api/items/${id}`)
      .then(res => {
        console.log('Testing1')
        setItemName(res.data.itemName)
        setSpecs(res.data.specs)
        setOrderPrice(res.data.orderPrice)
        setItemCount(res.data.itemCount)
      })

      .catch(err => {
        console.log(err)
      })
  }, [id])

  /*  const deleteButton = itemIdFromBelow => {
        let filteredItems = items.filter(
          item => item._id !== itemIdFromBelow
        )
        setItemList(filteredItems)
        
        axios
          .delete(`http://localhost:1700/api/${itemIdFromBelow}`) */

  //       // .delete(`http://localhost:1700/api/items/${_id}` */)
  //       /*  .delete(`/${id}`)*/

  /* const deleteButton = _id => {
      
        itemList => itemList.id !== item._id;
      
      setItemList([ ...itemList , item.id ])
      
      axios
        .delete(`http://localhost:1700/api/${id}`)

          .then(res => {
            console.log(res.data)
            navigate(`/`) // Navigate to the homepage after deletion
          })
          .catch(err => console.log(err))
      } */

  /* const deleteItem = () => {
        // Delete book from API
        axios
          .delete(`http://localhost:1910/api/properties/${id}`)
          .then(res => {
            console.log(res.data)
            navigate('/') // Navigate to the homepage after deletion
          })
          .catch(err => console.log(err))
      } */

  const deleteButton = id => {
    // Delete book from API
    axios
      .delete(`http://localhost:1700/api/items/${id}`)
      .then(res => {
        console.log(res.data)
        navigate('/') // Navigate to the homepage after deletion

        /*  setItemList([...itemList, res.data]) */
        /*  setItemList([res.data]) */
      })
      .catch(err => console.log(err))
  }

  const submitHandler = e => {
    e.preventDefault()

    axios
      .put(`http://localhost:1700/api/items/${id}`, {
        itemName,
        specs,
        orderPrice,
        itemCount
      })

      .then(res => {
        console.log(res)
        console.log(res.data)
        navigate(`/`)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <div className='container'>
        {/*  < class='row'> */}
        <div className='header-wrapper2'>
          {/* Button to navigate to the Catalog page. */}
          <div className='titles'>
            <h1 className='title'>Item Update</h1>
            <h3 className='sub-title'>List Your Price!!!</h3>
          </div>
        </div>

        <div className='form-wrapper'>
          <form onSubmit={submitHandler}>
            <div className='section-wrapper'>
              <div className='section1'>
              <div className='col d-flex flex-column'>
                <label className='label' htmlFor='itemName'>
                  Item Name:{' '}
                </label>
                <input
                  className='input-wrapper'
                  type='text'
                  name='itemName'
                  value={itemName}
                  onChange={itemNameHandler}
                ></input>
                {/* {errors.itemName && (
                <span className='error'>{errors.itemName.message}</span>
              )} */}
                <label className='label' htmlFor='specs'>
                  Specs:{' '}
                </label>
                &nbsp;
                <input
                  className='input-wrapper'
                  type='text'
                  name='specs'
                  value={specs}
                  onChange={specsHandler}
                ></input>
                &nbsp;&nbsp;
                {/* {errors.specs && (
                <span className='error'>{errors.specs.message}</span>
              )} */}
                <label className='label' htmlFor='orderPrice'>
                  Order Price:{' '}
                </label>
                &nbsp;
                <input
                  className='input-wrapper'
                  type='number'
                  name='orderPrice'
                  value={orderPrice}
                  onChange={orderPriceHandler}
                ></input>
                &nbsp;&nbsp;
                {/* {errors.orderPrice && (
                <span className='error'>{errors.orderPrice.message}</span>
              )} */}
                <label className='label' htmlFor='itemCount'>
                  Item Count:{' '}
                </label>
                &nbsp;
                <input
                  className='input-wrapper'
                  type='number'
                  name='itemCount'
                  value={itemCount}
                  onChange={itemCountHandler}
                ></input>
                &nbsp;&nbsp;
                {/*  {errors.itemCount && (
                <span className='error'>
                  {errors.itemCount.message}
                </span>
              )} */}
              </div>
              </div>
            </div>
            <button className="btn btn-primary" >UPDATE</button>
            <button className="btn btn-danger" onClick={() => deleteButton(id)}>
              Delete
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ItemUpdate

//onSubmit={submitHandler}
