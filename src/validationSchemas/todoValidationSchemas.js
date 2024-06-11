const createTodoValidationSchema = {
    title: {
        notEmpty: true
    },
    content: {
        notEmpty: true
    }   
}

const editTodoValidationSchema = {
    title: {
        notEmpty: true
    },
    content: {
        notEmpty: true
    }   
}

export {
    createTodoValidationSchema,
    editTodoValidationSchema
}