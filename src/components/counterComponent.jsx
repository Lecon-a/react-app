import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: this.props.value
    };

    // This is the second method for bind 'this' keyword to event handling function/method
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // This is another way of binding 'this' keyword to event handling method using arrow function
    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
    }

    render() { 

        return (
            <div>
                { this.props.children }
                <button
                    onClick={this.handleIncrement}
                    className={'btn btn-secondary btn-sm' + this.getMaginClass(2)}
                >
                    Increment
                    <span className={this.getBadgeClass() + this.getMaginClass(1)}>{this.formatCount()}</span>
                    Increment
                </button>
            </div>
        );
    }

    getBadgeClass() {
        let classes = "badge bg-";
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    } 

    getMaginClass(m) {
        let margin = ` m-${m}`;
        return margin;
    }

    formatCount() {

        let { value } = this.state;

        return value === 0 ? "Zero" : value;

    }
}
 
export default Counter;