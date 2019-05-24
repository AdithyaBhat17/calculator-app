import { initialState } from '../App'

const handleNumber = (value, state) => {
    if(state.currentValue === '0')
        return {
            currentValue: `${value}`
        }        
    return {
        currentValue: `${state.currentValue}${value}`
    }
}

const handleEqual = (state) => {
    const { previousValue, operator, currentValue } = state
    const previous = parseFloat(previousValue)
    const current = parseFloat(currentValue)
    const resetState = {
        operator: null,
        previousValue: null
    }

    switch(operator) {
        case '+':
            return {
                currentValue: previous + current,
                ...resetState
            }
        case '-':
            return {
                currentValue: previous - current,
                ...resetState
            }
        case '*':
            return {
                currentValue: previous * current,
                ...resetState
            }
        case '/': 
            return {
                currentValue: previous / current,
                ...resetState
            }
        default:
            return state
    }
}

const calculator = (type, value, state) => {
    switch(type) {
        case 'number':
            return handleNumber(value, state)
        case 'operator':
            return {
                previousValue: state.currentValue,
                operator: `${value}`,
                currentValue: '0'
            }
        case 'equals':
            return handleEqual(state)
        case 'reset':
            return initialState
        case 'posneg':
            return {
                currentValue: `${parseFloat(state.currentValue) * -1}`
            }
        case 'percentage':
            
        default: 
            return state
    }
}

export default calculator