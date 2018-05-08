import {Map} from "immutable"
export function appReducer(state = Map({
    clicked : 0,
    textValue: ""
}), action){
    switch (action.type){
        case "clicked": {
            return state.set("clicked", state.get("clicked") + 1)
        }
        case "textChanged": {
            return state.set("textValue", action.value)
        }
    }
    return state;
}