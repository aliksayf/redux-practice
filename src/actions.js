export function counterPlus(id) {
    return { type: 'COUNTER_PLUS', payload: id }
}

export function counterMinus(id) {
    return { type: 'COUNTER_MINUS', payload: id}
}

export function counterRemove(id) {
    return { type: 'REMOVE', payload: id}
}


export function counterIncOne(counterId) {
    return (dispatch) => {
        dispatch({type: 'COUNTER_INC_ONE', payload: counterId})
    }
}