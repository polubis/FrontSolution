export const updateObject = (oldObject, updatedValues) => { // method which helps you update a store
    return {
        ...oldObject,
        ...updatedValues
    };
}