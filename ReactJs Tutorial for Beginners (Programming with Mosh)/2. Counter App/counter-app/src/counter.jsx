import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 1,
        imageUrl: 'https://picsum.photos/200'
    };

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    };

    render() { 

        const classes = "badge m-2 ";
        classes += (this.state.count === 0) ? "warning" : "primary";

        return (
            <div>
                <img src={this.state.imageUrl}/>
                <span className={classes} style={this.styles}>
                    {this.formatCount()}
                </span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

}
 
export default Counter;