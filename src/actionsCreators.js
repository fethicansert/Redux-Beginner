import * as actions from './actionTypes.js'

// export function bugAdded(description){
//     return {
//         type:actions.BUG_ADDED,
//         payload: { 
//             description:description
//         }
//     }
// };

// export function bugRemoved(id){
//     return {
//         type: actions.BUG_REMOVED,
//         payload: {
//             id:id
//         }
//     }
// }


export const bugAdded = (description) => ({type: actions.BUG_ADDED, payload: {description:description}});

export const bugRemoved = (id) => ({type: actions.BUG_REMOVED, payload: {id: id}});

export const toogleResolved = (id) => ({type: actions.TOGGLE_RESOLVED, payload: {id: id}});