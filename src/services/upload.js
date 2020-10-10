import Images from '../models/images'
import fs from 'fs'

export default {

    async uploadImage(image) {
        const buffer = Buffer.from(image, 'base64');

        const id = uuid();
        return Images.create({image: buffer, uuid: id})
            .then(image => {
                return {_id: image.uuid}
            })
            .catch(err => {
               return {err: err}
            });
    },
    async getImage(id) {
        return Images.findOne({uuid: id}).exec()
            .then(doc => {
                return doc.image;
            })
            .catch(err => {
                return {err: err}
            });

    },
    async getInfo(id) {
        return Images.findOne({uuid: id}).exec()
            .then(doc => {
                return doc;
            })
            .catch(err => {
                return {err: err}
            });

    }
}

function uuid() {
    return 'xxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
