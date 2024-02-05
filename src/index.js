import store from "./store";
import { bugAdded, bugRemoved, toogleResolved } from "./actionsCreators";


const unsubscribe = store.subscribe(() => { //I should clear unsubscribe if unmounted this component We don't want to create memory leak
    console.log("Some thing Change", store.getState());
})

store.dispatch(bugAdded('BUG_1'));
// console.log(store.getState());
// store.dispatch(bugRemoved(1));

// store.dispatch(bugAdded('BUG_2'));

store.dispatch(toogleResolved(1));
// console.log(store.getState());


