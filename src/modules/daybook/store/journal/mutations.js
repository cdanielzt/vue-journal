
export const setEntries = ( state, entries) => {
    state.entries = [ ...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = ( state, entry) => { //Entrada actualizada

    //Buscar la entrada a actualizar y actualizarla
    const index = state.entries.map( e => e.id).indexOf( entry.id)

    state.entries[index] = entry;
    
}

export const addEntry = ( state, entry) => {

    state.entries = [ entry, ...state.entries ]

}

export const deleteEntry = ( state, id ) => {

    state.entries = state.entries.filter( entry => entry.id !== id)

}