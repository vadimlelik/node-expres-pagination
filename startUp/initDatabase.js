import User from '../Model/User.js'
import {defaultUser} from '../mock/index.js'


export const initDataBase = async () => {
    const user = User.find()
    if (user.length !== defaultUser.length) {
        createInitialEntity(User, defaultUser)
    }
}

async function createInitialEntity(Model, data) {
    await Model.collection.drop()
    return Promise.all(data.map(async (item) => {
        try {
            delete item.id
            const newItem = new Model(item)
            await newItem.save()
            return newItem
        } catch (e) {
            return e
        }
    }))

}