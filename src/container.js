/* export const container = (props) => {
    if(Array.isArray(props) != true) throw new Error('Should recibe an array')
    if(props.some(e => typeof e != 'number')) throw new Error('The array only should have numbers')
    if(props.some((e) => e % 1 != 0 || e < 0)) throw new Error('The numbers must be whole and positives')

    let contained = 0;
    for(let i = 0; i < props.length; i++) {
        if(props[i] > props[i+1] < derecha) {
            if(props[i] < derecha) {
                let diferencia = props[i] - props[i+1]
                contained = contained + diferencia;
                i++
            } else {
                if(adicionalDerecha != undefined && derecha < adicionalDerecha) {
                    if(props[i] < adicionalDerecha) {
                        let diferencia = props[i] - props[i+1]
                        let diferencia2 = props[i] - derecha;
                        contained = contained + diferencia + diferencia2;
                        i++
                    } else {
                        let diferencia = props[i] - props[i+1]
                        let diferencia2 = adicionalDerecha - derecha;
                        contained = contained + diferencia + diferencia2;
                        i++
                    }
                    
                } else {
                    let diferencia = derecha - props[i+1]
                    contained = contained + diferencia;
                    i++
                }
            }
        }
        i++
    }

    return contained;
}; */

export const container = (props) => {
    if(Array.isArray(props) != true) throw new Error('Should recibe an array')
    if(props.some(e => typeof e != 'number')) throw new Error('The array only should have numbers')
    if(props.some((e) => e % 1 != 0 || e < 0)) throw new Error('The numbers must be whole and positives')

    let contained = 0;
    for(let i = 0; i < props.length; i++) {
        let izquierda = props[i];
        let centro = props[i+1];
        let derecha = props[i+2];
        let adicionalDerecha = props[i+3]
        if(izquierda > centro < derecha) {
            if(izquierda < derecha) {
                let diferencia = izquierda - centro
                contained = contained + diferencia;
                i++
            } else {
                if(adicionalDerecha != undefined && derecha < adicionalDerecha) {
                    if(izquierda < adicionalDerecha) {
                        let diferencia = izquierda - centro
                        let diferencia2 = izquierda - derecha;
                        contained = contained + diferencia + diferencia2;
                        i++
                    } else {
                        let diferencia = izquierda - centro
                        let diferencia2 = adicionalDerecha - derecha;
                        contained = contained + diferencia + diferencia2;
                        i++
                    }
                    
                } else {
                    let diferencia = derecha - centro
                    contained = contained + diferencia;
                    i++
                }
            }
        }
        i++
    }

    return contained;
};