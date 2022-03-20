
export const setEntries = ( state, entries) => {
    state.entries = [ ...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = ( state, entry) => { //Entrada actualizada

    //Buscar la entrada a actualizar y actualizarla
    const index = state.entries.findIndex(element => element.id === entry.id)

    state.entries[index] = entry;
    
}

export const addEntry = (/*state*/) => {
    
}