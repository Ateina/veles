export function RemoveDublicates(array, fieldName){
    return Array.from(new Set(array.map(pet => pet[fieldName])));
}