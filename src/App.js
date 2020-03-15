import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { counterPlus, counterMinus, counterRemove} from './actions';

function App(props) {
    return (
        <div className="App">

            {
                props.myCounter.map(el =>
                    <div key={el.id}>{el.counterName}
                        <button onClick={()=>props.myCounterMinus(el.id)}>-</button>
                        {el.counterValue}
                        <button onClick={()=>props.myCounterPlus(el.id)}>+</button>
                        <button onClick={()=>props.myCounterRemove(el.id)}>Delete</button>
                    </div>)
            }
        </div>
    );
}

const mapStateToProps = state => ({
    myCounter: state.counterList
});

const mapDispatchToProps = dispatch => ({
    myCounterPlus: (id) => dispatch(counterPlus(id)),
    myCounterMinus: (id) => dispatch(counterMinus(id)),
    myCounterRemove: (id) => dispatch(counterRemove(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
