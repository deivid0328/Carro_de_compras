import { Component } from 'react'
import './App.css';
import Productos from './components/Productos'

class App extends Component{
    state={
        productos:[
            
            { name:'Tomate', price:1500, img:'https://cdn.pixabay.com/photo/2016/03/05/19/03/tomatoes-1238255_960_720.jpg'},
            { name:'Arbejas', price:2500, img:'https://cdn.pixabay.com/photo/2020/03/05/19/13/green-peas-4905250_960_720.jpg'},
            { name:'Lechuga', price:500, img:'https://cdn.pixabay.com/photo/2016/03/05/22/01/lettuce-1239155_960_720.jpg'}
        ]
    }
    render(){
        return(
            <div>
                <Productos
                agregarAlCarro={()=> console.log('no hace naca')}
                productos={this.state.productos}
                
                />
                <p>Holis putitos</p>
            </div>
        )
    }
}

export default App;