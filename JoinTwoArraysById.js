/** 
 @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    var joinedArray = [];
    let auxSet = new Set();
    let auxObject = {}
    for(let i = 0; i < arr1.length; ++i){
        let aux = arr1[i];
        auxSet.add(aux.id);
        auxObject[aux.id] = aux;
    }
    for(let i = 0; i < arr2.length; ++i){
        let aux = arr2[i];
        auxSet.add(aux.id);
        if(auxObject[aux.id]){
            auxObject[aux.id] = {...auxObject[aux.id], ...aux};
        } else {
            auxObject[aux.id] = aux;
        }
    }
    var auxArray = Array.from(auxSet);
    auxArray.sort((a, b)=> a - b);
    for(let i = 0; i < auxArray.length; ++i){
        let aux = auxArray[i];
        joinedArray.push(auxObject[aux]);
    }
    return joinedArray;
};


//let arr1 = [{"id":1,"b":{"b": 94},"v":[4,3],"y":48}];
//let arr2 = [{"id":1,"b":{"c": 84},"v":[1,3]}]
////
//console.log(join(arr1, arr2));
