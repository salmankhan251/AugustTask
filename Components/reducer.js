import {combineReducers} from 'redux';
import {PLACE_ORDER} from './Action';
const taskReducer = (state=[], action)=>{
        switch(action.type){
            case (PLACE_ORDER): state= state.concat(action.payload);
                break;
            default:
                return state
        }

    },
    reducers=combineReducers({
        PlaceOrder:taskReducer
    });
export default (reducers);
