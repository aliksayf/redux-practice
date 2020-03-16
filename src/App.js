import React from 'react';
import './App.css';
import Counter from'./Counter';
import {connect} from 'react-redux';
import { counterPlus, counterMinus, counterRemove} from './actions';

function App(props) {
    return (
        <div className="App">
            { props.myCounter.map(el => <Counter key={el.id} el={el}/>) }
        </div>
    );
}

const mapStateToProps = state => ({
    myCounter: state.counterList
});

// const mapDispatchToProps = dispatch => ({
//     myCounterPlus: (id) => dispatch(counterPlus(id)),
//     myCounterMinus: (id) => dispatch(counterMinus(id)),
//     myCounterRemove: (id) => dispatch(counterRemove(id))
// })

export default connect( mapStateToProps, null)(App);
