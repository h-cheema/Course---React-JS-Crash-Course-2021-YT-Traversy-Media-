import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: this.props.value
        // tags: ["tag1", "tag2", "tag3"]
    };

    // constructor() {
    //     super();
    //     this.handleIncrement.bind(this);
    // }

    handleIncrement = (product) => {
        // console.log('Increment Clicked', this)
        // console.log(product)
        // this.state.count++;
        this.props.value = 0;
        this.setState({ value: this.state.value + 1 })
    }

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>; // Empty arrays
        { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
    }

    render() { 

        console.log('props', this.props)

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

                <button 
                    onClick={() => this.handleIncrement(product)}
                    className={}>Increment</button>

                <button 
                    onClick={this.props.onDelete}
                    className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        const classes = "badge m-2 ";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

}
 
export default Counter;