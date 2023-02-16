import produceData from '../mockData/produce.json'; 

const POPULATE = "populate/POPULATE";

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData 
    }
}

const produceReducer = (state = {}, action) => {
    // Object.freeze(state);
    // const nextState = {...state} 
    switch (action.type) {
        case POPULATE:
            // action.produce.map((produce) => {
            //     return nextState[produce.id] = action.produce; 
            // })
            // return nextState; 
            const nextState = {};
                action.produce.forEach(produce => {
                nextState[produce.id] = produce;
            });
            return nextState; 
        default: 
            return state; 
    }
}

export default produceReducer; 