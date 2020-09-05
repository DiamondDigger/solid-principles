//Dependency inversion principle

class Fetch{
    request(url) {
        return Promise.resolve('data from fetch ')
    }
}

class LocalStorage{
    get(){
        const dataFromStorage = 'data from local storage'
        return dataFromStorage
    }
}

class FetchClient{
     constructor(){
         this.fetch = new Fetch()
     }
     clientGet(url){
        return this.fetch.request(url)
     }
}

class LocalStorageClient{
    constructor(){
        this.localStorage = new LocalStorage()
    }
    clientGet(key){
        return this.localStorage.get(key)
    }
}

class Database{
    constructor(client){
        this.client = client
    }

    getData(key){
        return this.client.clientGet(key)
    }
}

const db = new Database(new LocalStorageClient())
console.log(db.getData('something could be there'))
