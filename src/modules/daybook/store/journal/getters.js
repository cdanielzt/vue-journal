
// export const myGetter = ({ commit }) => {
    // return state;
// }
//Función que regresa otra función
export const getEntriesByTerm = ( state ) => ( term = '') => {
    
    if( term.length === 0 ) return state.entries

    return state.entries.filter( entry => entry.text.toLowerCase().includes( term.toLowerCase() ) )

}

export const getEntriesById = ( /*{ commit }*/) => {
    
}