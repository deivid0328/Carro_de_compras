import { Component } from 'react'
import Carro from './Carro'

const styles={
    detallesCarro:{
        background:'#fff',
        position:'absolute',
        marginTop:'30px',
        boxShadow:' 1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius:'5px',
        width:'300px',
        right:'50px',

    }
}



class DetallesCarro extends Component{
    render(){
    const { carro } = this.props
        return(
            
            <div style={styles.detallesCarro}>
                <ul>
                    {carro.map(x => <li key={x.name}> <img src={x.img} alt={x.name} width='50' height='32'/>
                    {x.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro