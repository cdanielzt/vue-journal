import journalApi from "@/api/journalApi"

export const loadEntries = async( { commit } ) => {
    const { data } = await journalApi.get('/entries.json')
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
    const { id, date, picture, text } = entry
    const dateToSave = { date, picture, text }

    //llamar await journalApi, dataTosave
    const { data } = await  journalApi.put(`/entries/${id}.json`, dateToSave )

    //commit updateEntry
    commit('updateEntry', {...data})

}

export const createEntry = async(/*{ commit }*/) => {

}