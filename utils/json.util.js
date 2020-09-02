class JsonUtil {

    constructor() {
        this.items={};
        this.accountHolder ={};
        this.accounts=[];
        this.accountHolder.accounts = this.accounts
    }

    addItemToObject(prop,value) {
        this.items[prop] = value;
    }

    initializeEmptyObject() {
        this.items={};
    }

    addObjectToArray() {
        this.accountHolder.accounts.push(this.items);
    }

    getJsonString() {
        return JSON.stringify(this.accountHolder,undefined,8);
    }
}

export default new JsonUtil();