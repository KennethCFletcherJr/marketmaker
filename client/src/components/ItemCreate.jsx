//We'll need useState to track User Input
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
/* import ItemList from './ItemList.jsx'; */

function ItemCreate (props) {
  const { itemList, setItemList } = props

  /* const [properties, setProperties] = useState([]) */

  const [itemName, setItemName] = useState('')
  const [specs, setSpecs] = useState('')
  const [orderPrice, setOrderPrice] = useState(0)
  const [itemCount, setItemCount] = useState(0)

  const [errors, setErrors] = useState({})

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

  const submitHandler = e => {
    e.preventDefault()

    axios
      .post('http://localhost:1700/api/items', {
        itemName,
        specs,
        orderPrice,
        itemCount
      })

      .then(res => {
        /*   console.log(res);
        console.log(res.data); */
        setItemList([...itemList, res.data])
        navigate('/')
      })
      .catch(err => {
        console.log(err)
        setErrors(err.response.data.errors)
      })
  }
  return (
    <>
      <div className='container pt-0 my-5'>
        <div className='header-wrapper2'>
          {/* Button to navigate to the Catalog page. */}
          <div className='titles'>
            <h1 className='title'>Welcome to MarketMaker, Jim!!!</h1>
            <hr />
            <h3 className='sub-title'>List Your Price!!!</h3>
          </div>
        </div>

        <div className='row'>
          
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
                    {errors.itemName && (
                      <span className='error'>{errors.itemName.message}</span>
                    )}
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
                    {errors.specs && (
                      <span className='error'>{errors.specs.message}</span>
                    )}
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
                    {errors.orderPrice && (
                      <span className='error'>{errors.orderPrice.message}</span>
                    )}
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
                    {errors.itemCount && (
                      <span className='error'>{errors.itemCount.message}</span>
                    )}
                    </div>
                  </div>
                </div>
                <button className="btn btn-success">Add Item</button>
              </form>
            </div>
          
        </div>
      </div>
    </>
  )
}

export default ItemCreate
