import { createStore } from "vuex";

export const store = createStore({
    state:{
        number: 0
    },
    mutations: {
        increment(state){
            state.number ++
        },
        decrement(state){
            state.number <= 0 ? state.number = 0 :state.number --
        },
        reset(state){
            state.number = 0
        },
        setValue(state,payload){
            state.number = payload
        }
    }
    
})