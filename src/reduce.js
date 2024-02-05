import * as actions from './actionTypes.js'

let lastID = 1;

export default function reducer(state = [], action)
{
    //Switch Type
    switch(action.type) {
        case actions.BUG_ADDED :
            return [
                ...state,
                {
                    id:lastID++,
                    description:action.payload.description,
                    resolved:false
                }
            ]
        case actions.BUG_REMOVED :
            return state.filter(bug => bug.id !== action.payload.id);

        case actions.TOGGLE_RESOLVED :
            return state.map(bug => bug.id === action.payload.id ? {...bug,resolved: !bug.resolved} : bug);
        default :
            return state;
    }
}