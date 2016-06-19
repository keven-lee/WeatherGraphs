import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:  
        //makes new array like map
        return [ action.payload.data, ...state ];
    }
    return state;
}