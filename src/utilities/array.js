export function RemoveDuplicates(array, fieldName){
    return Array.from(new Set(array.map(pet => pet[fieldName])));
}