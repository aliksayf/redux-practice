const initialState = {
    counterList: [
        {
        id: 1,
        counterValue: 4,
        counterName: 'First counter'
        },
        {
        id: 2,
        counterValue: 4,
        counterName: 'Second counter'
        }
]
};

const counterPlus = ({counterList, id}) => {
    return counterList.map(el => ( el.id === id ? {...el, counterValue: el.counterValue + 1} : el ));
};

const counterMinus = ({counterList, id}) => {
    return counterList.map(el => ( el.id === id ? {...el, counterValue: el.counterValue - 1} : el ));
};

const counterRemove = ({counterList, id}) => {
    return counterList.filter(el => el.id !== id );
};

export default function counter (state = initialState, action) {
    switch (action.type) {
        case 'COUNTER_PLUS' :
            return {...state, counterList: counterPlus({counterList: state.counterList, id: action.payload})};

        case 'COUNTER_MINUS' :
            return {...state, counterList: counterMinus({counterList: state.counterList, id: action.payload})};

        case 'REMOVE' :
            return {...state, counterList: counterRemove({counterList: state.counterList, id: action.payload})};

        default:
            return state;

    }
}