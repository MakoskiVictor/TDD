export const boomerang = (props) => {
    if(Array.isArray(props) != true) throw new Error ('Props must be an array')
    if(props.length < 3) throw new Error('The array must have at least 3 elements')
    if(props.some((n)=> typeof n !== 'number')) throw new Error('The array must have only numbers')

    let boomerangs = 0;
    for(let i = 0; i < props.length - 1; i++) {
        for(let m = 0; m < props.length; m++) {
            let fijo = props[i];
            let pivote1 = props[m + 1];
            let pivote2 = props[m + 2];
            if(pivote1 != fijo && pivote2 === fijo) {
                boomerangs++;
                i++
            } else {
                i++
            }
        }
    }
    return boomerangs;
}