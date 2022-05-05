import { Component } from 'react'
import './App.css';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'


class App extends Component{
    state={
        productos:[
            
            { name:'Tomate', price:1500, img:'https://cdn.pixabay.com/photo/2016/03/05/19/03/tomatoes-1238255_960_720.jpg'},
            { name:'Cebolla', price:2500, img:'https://cdn.pixabay.com/photo/2013/02/21/19/14/onion-bulbs-84722_960_720.jpg'},
            { name:'Lechuga', price:500, img:'https://cdn.pixabay.com/photo/2016/03/05/22/01/lettuce-1239155_960_720.jpg'}
        ],

        carro:[

        ],
    }

    agregarAlCarro = (producto)=>{
        const { carro } = this.state
            if(carro.find( x=> x.name === producto.name)){
                const newCarro = carro.map(x => x.name === producto.name
                ? ({
                    ...x,
                    cantidad: x.cantidad + 1
                })
                : x)

                return this.setState({ carro: newCarro })
            }
        return this.setState({
        carro: this.state.carro.concat({
            ...producto,
            cantidad:1,
        })
    })
}


    render(){
        console.log(this.state.carro)
        return(
            <div>
                <Navbar carro={this.state.carro}/>
                <Layout>
                    <Title/>
                    <Productos
                    agregarAlCarro={this.agregarAlCarro}
                    productos={this.state.productos}
                    
                    />
                    <p>Holis putitos</p>
                </Layout>
            </div>
        )
    }
}

export default App;