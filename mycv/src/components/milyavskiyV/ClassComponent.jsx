import React from "react";
class ClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ...props
        }
    }
    addItem(){
        const current = this.state.count
        this.setState({count: current+1})
    }
    removeItem(){
        const current = this.state.count
        this.setState({count: current-1})
    }


    render(){
        return (
             <>
                 {this.state.count}
                <button type="button" onClick={this.addItem.bind(this)}>+</button>
                <button type="button" onClick={this.removeItem.bind(this)}>-</button>
            </>
        )
    }

}
export default ClassComponent
