import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col,Image, ListGroup, ListGroupItem, Button, Form} from "react-bootstrap"
import { Link, useNavigate, useParams } from 'react-router-dom'
import {listProductDetails} from '../actions/productActions'
import Rating from '../components/Rating'
import { IoReturnUpBack } from "react-icons/io5";

const ProductDetails = () => {
  const [qty, setQty] = useState(0)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product} = productDetails
  const { id } = useParams();
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch])

   const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  };

  return (
    <div>
      <Link to='/' className='btn btn-light' style={{textTransform:"uppercase",textDecoration:"none",}}><IoReturnUpBack /> Go Back</Link>
        <Row>
          <Col md={6}>
          <Image src={product.image} alt={product.name}  fluid/>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
              </ListGroupItem>
              <ListGroupItem>
                Price: Rs.{product.price}
              </ListGroupItem>
              <ListGroupItem>
                {product.description}
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroupItem>
              <Row>
                <Col>Status</Col>
                <Col>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</Col>
              </Row>
            </ListGroupItem>
            {
              product.countInStock > 0 && (
                <ListGroupItem>
                  <Row>
                    <Col>
                    <Form.Control as="select" value={qty} onChange={(e) =>setQty(e.target.value)}>
                     {
                      [...Array(product.countInStock).keys()].map((x)=>(
                        <option key={x+1} value={x+1}>{x+1}</option>
                      ))
                     }
                    </Form.Control>
                    </Col>
                  </Row>
                </ListGroupItem>
              )
            }
            <ListGroupItem>
              <Button className='btn-block' type='button' onClick={addToCartHandler}>
                Add to Cart
              </Button>
            </ListGroupItem>
          </Col>
        </Row>
    </div>
  )
}

export default ProductDetails