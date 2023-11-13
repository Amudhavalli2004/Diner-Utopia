import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';



export default function Food({food}) {
    const [quantity, setquantity] = useState(1);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
        <div onClick={handleShow}>
        <h1>{food.name}</h1>
        <img src={food.image} className='img-fluid' style={{height: '200px', width: '200px'}}/>
        </div>
        <div className='flex-container'>
            <div className='w-100 m-1'>
                <p>Quantity</p>
                <select  value={quantity} onChange={(e) => {setquantity(e.target.value)}}>
                    {[...Array(10).keys()].map((x, i)=>{
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>
        </div>
        <div className='flex-container'>
            <div className='m-1 p-2 w-100'>
                <h1>Price: {food.price * quantity}Rs/-</h1>
            </div>
            <div className='m-1 w-100'>
                <button className='btn'> ADD TO CART</button>
            </div>
        </div>

      <Modal show={show} >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={food.image} className='img-fluid ' style={{height: '300px', width: '300px'}}/>
            <p>{food.description}</p>
            </Modal.Body>
        <Modal.Footer onClick={handleClose}>
          <button className='btn' >CLOSE</button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
