import React,{Component} from 'react';
import {Model,Botton,Row,Col,Form, Modal, ModalHeader, ModalTitle, FormLabel, Button, ModalFooter} from 'react-bootstrap';


export class AddCoinModel extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Coin',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Name:event.target.Name.value,
                Price:event.target.Price.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('failed');
        })
    }

    render(){
        return(
            <div className='container'>

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-model-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-model-title-vcenter">
            Add Coin

        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label> Coin Name</Form.Label>
                        <Form.Control type="text" name="Name" required
                        placeholder="Coin Name"/>

                    </Form.Group>
                    <Form.Group controlId="Price">
                        <Form.Label> Coin Price</Form.Label>
                        <Form.Control type="text" name="Price" required
                        placeholder="Coin Price"/>

                    </Form.Group>


                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Coin
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
        </Modal.Body>

        <Modal.Footer>
            <Button variant='danger' onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
    
    </Modal>                

            </div>
        )
    }

}