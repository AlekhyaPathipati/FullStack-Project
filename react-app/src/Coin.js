import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import { AddCoinModel } from './AddCoinModel';

export class Coin extends Component{ 

    constructor(props){
        super(props);
        this.state={coins:[],addModelShow:false}
    }
    refreshList(){
        fetch(process.env.REACT_APP_API+'Coin')
        .then(response=>response.json())
        .then(data=>{
            this.setState({coins:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }
    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {coins}=this.state;
        let addMdalClose=()=>this.setState({addModelShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Id</th>
                <th>Name</th>
                <th>price</th>
                <th>Details</th>
                </tr>
                </thead>
                <tbody>
                    {coins.map(coin=>
                        <tr key={coin.Id}>
                            <td>{coin.Id}</td>
                            <td>{coin.Name}</td>
                            <td>Edit / Delete</td>
                        </tr>)}
                </tbody>
                </Table>

                <ButtonToolbar>
                    <Button varient='primary'
                    onClick={()=>this.setState({addModelShow:true})}>
                        Add Coin
                    </Button>
                    <AddCoinModel show={this.state.addModelShow}
                    onHide={addMdalClose}/>
                </ButtonToolbar>

            </div>
        )
    }
}