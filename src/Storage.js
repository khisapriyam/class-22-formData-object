
class Storage{

    static has(key){

        return localStorage.getItem(key) ? localStorage.getItem(key) : false;

    }

    static get(key){

        if(this.has(key)){
            return JSON.parse(this.has(key))

        }else{
            return'no data found'
            
        }

    }

    static set(key, data){

        let datas = [];

        if(this.has(key)){
            datas = JSON.parse(this.has(key));

        }

        datas.push(data);
        localStorage.setItem(key, JSON.stringify(datas))


    }

 
}

export default Storage;
