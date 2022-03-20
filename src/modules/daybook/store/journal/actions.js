import journalApi from "@/api/journalApi"

export const loadEntries = async( { commit } ) => {
    const { data } = await journalApi.get('/entries.json')

    if( !data ){
        return commit('setEntries', [])
    } 

    const entries = []
    for( let id of Object.keys( data )) {
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries)
}

export const updateEntry = async( { commit }, entry ) => { //entry parameter
    //Extraer lo que necesitamos -id
    console.log('updating');
    const { id, date, picture, text } = entry
    const dateToSave = { date, picture, text }

    //llamar await journalApi, dataTosave
    const { data } = await  journalApi.put(`/entries/${id}.json`, dateToSave )

    console.log(data);
    //commit updateEntry
    commit('updateEntry', {...entry})

}

export const createEntry = async( { commit }, entry) => {
    // dataToSave
    const { date, text, picture} = entry;
    const dateToSave = { date, picture, text }

    
    const { data } = await  journalApi.post(`/entries.json`, dateToSave )

    entry.id = data.name;

    commit('addEntry', entry)

    return data.name;
}

export const deleteEntry = async( { commit }, id ) => {

        //llamar await journalApi, dataTosave
        const result = await  journalApi.delete(`/entries/${id}.json` )
    
        //commit updateEntry
        commit('deleteEntry', id )

        return id;
    

}