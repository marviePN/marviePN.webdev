import React,{Component} from 'react';

class Pm_number2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstNum: '',
            secondNum: ''
        }

    }
    firstnumHandler(e){
        this.setState({firstNum:e.target.value});
    }

    secondnumHandler(e){
        this.setState({secondNum:e.target.value});
    }

    render (){
        return(
            <div>
                {this.state.firstNum}
                {this.state.secondNum}
                    <input type= "number" placeholder = "firstNum" onChange = {(e) => this.firstnumHandler(e)} />
                    <input type= "number" placeholder = "secondNum"  onChange = {(e) => this.secondnumHandler(e)}/>
            </div>
        )
    }
    


}


export default Pm_number2;
