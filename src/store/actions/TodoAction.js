//cách viết 1
// export const markCompleted = ()=>{
//     const markCompletedAction = dispatch => {
//         dispatch({
//             type: "MARK_COMPLETED",
//             payload:'myPayload'
//         })
//     }
//     return markCompletedAction
// }

import axios from "axios"
import { ADD_TODOS, DELETE_TODOS, GET_TODOS, MARK_COMPLETED } from "../types"

//cách viết 2
export const markCompleted = (id) => dispatch => {
    dispatch({
        type: MARK_COMPLETED,
        //payload nay truyen vao hàm tương ứng reeducer
        payload: id
    })
}

export const addTodos = newTodos => async dispatch => {
    try {
        await axios.post('https://jsonplaceholder.typicode.com/todos',newTodos)
        dispatch({
        type: ADD_TODOS,
        //payload nay truyen vao hàm tương ứng reeducer
        payload: newTodos
    })
    } catch (error) {
        console.log(error)
    }
    
}
export const deleteTodos = id => async dispatch => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        dispatch({
        type: DELETE_TODOS,
        //payload nay truyen vao hàm tương ứng reeducer
        payload: id
    })
    } catch (error) {
        console.log(error)
    }
    
}

export const getTodos = () => async dispatch => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        dispatch({
            type: GET_TODOS,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}





