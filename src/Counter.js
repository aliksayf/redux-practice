import React from 'react';
import {connect} from 'react-redux';
import { counterPlus, counterMinus, counterRemove, counterEdit } from './actions';


function Counter(props) {


    return (

        <div >

                <div>
                    {props.el.counterName}
                    <button onClick={()=>props.myCounterMinus(props.el.id)}>-</button>
                    {props.el.counterValue}
                    {props.el.edit && <span>{props.el.counterName}</span>}
                    {!props.el.edit && <input disabled={props.el.edit} value={props.el.counterName}/>}
                    <button onClick={()=>props.myCounterPlus(props.el.id)}>+</button>
                    {props.el.edit && <button onClick={() => props.myCounterEdit(props.el.id)}>Edit</button>}
                    {!props.el.edit && <button onClick={() => props.myCounterEdit(props.el.id)}>Save</button>}
                    <button onClick={()=>props.myCounterRemove(props.el.id)}>Delete</button>
                </div>

        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    myCounterPlus: (id) => dispatch(counterPlus(id)),
    myCounterMinus: (id) => dispatch(counterMinus(id)),
    myCounterRemove: (id) => dispatch(counterRemove(id)),
    myCounterEdit: (id) => dispatch(counterEdit(id)),
})

export default connect(null, mapDispatchToProps)(Counter);
