import Action from './';

export function increment(data) {
    return {
        type: Action.INCREMENT,
        text: data
    }
}

export function decrement(data) {
    return {
        type: Action.DECREMENT,
        text: data
    }
}