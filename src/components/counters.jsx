import React, { Component } from 'react';
import Counter from './counterComponent';


class Counters extends Component {

    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 }
        ]
    }
    render() { 
        return (
            <React.Fragment>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} value={counter.value} id={counter.id}>
                        <h4>{ `Counter #${counter.id}` }</h4>
                        </Counter>
                )}
            </React.Fragment>
        );
    }
}
 
export default Counters;