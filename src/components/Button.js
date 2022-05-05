import { Component } from 'react'

const styles={
    button:{
        backgroundColor:'#0A283E',
        color:'#fff',
        border:'none',
        padding:'15px 20px',
        cursor:'pointer',
        borderRadius:'5px',
    }
}

class Button extends Component{
    render(){
        return(
            <button  {...this.props} style={styles.button}/>
        )
    }
}

export default Button