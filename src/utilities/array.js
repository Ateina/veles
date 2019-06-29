export function RemoveDuplicates(array, fieldName){
    return Array.from(new Set(array.map(pet => pet[fieldName])));
}

export function RemoveMultiDuplicates(array, fieldName){
    let valuesArray = [];
    array.forEach(element => {
        valuesArray= valuesArray.concat(element[fieldName]);
    });
    return Array.from(new Set(valuesArray));
}