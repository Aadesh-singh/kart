import React, { Component } from 'react';

class Counter extends Component {
        // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    
    render() {
        // console.log(this.props);
                return (
            <div>
                <span style={{fontSize: 16}} className={this.getElementClass()}> {this.formatCount()} </span>
                <button 
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className="btn btn-secondary btn-sm"
                >increment</button>
                <button
                 onClick={() => this.props.onDelete(this.props.counter.id)} 
                 className="btn btn-danger m-2 btn-sm"
                 >Delete</button>
            </div>
        );
    }
    getElementClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        let {value: count} = this.props.counter;
        return count === 0 ? 'zero' : count ;
    }
}

export default Counter;
