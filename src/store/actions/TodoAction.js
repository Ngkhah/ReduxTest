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

//cách viết 2
export const markCompleted = (id) => dispatch => {
    dispatch({
        type: "MARK_COMPLETED",
        //payload nay truyen vao hàm tương ứng reeducer
        payload: id
    })
}

export const addTodos = newTodos => dispatch => {
    dispatch({
        type: "ADD_TODOS",
        //payload nay truyen vao hàm tương ứng reeducer
        payload: newTodos
    })
}
export const deleteTodos = id => dispatch => {
    dispatch({
        type: "DELETE_TODOS",
        //payload nay truyen vao hàm tương ứng reeducer
        payload: id
    })
}





