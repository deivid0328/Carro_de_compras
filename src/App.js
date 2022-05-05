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
        ]
    }
    render(){
        return(
            <div>
                <Navbar/>
                <Layout>
                    <Title/>
                    <Productos
                    agregarAlCarro={()=> console.log('no hace naca')}
                    productos={this.state.productos}
                    
                    />
                    <p>Holis putitos</p>
                </Layout>
            </div>
        )
    }
}

export default App;