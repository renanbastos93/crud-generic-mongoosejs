"use strict";
const ObjectId = require('mongoose').Types.ObjectId;

class CRUD {
    constructor(model){
        this.model = model;
    };
    insert(data){
        return this.model.save(new this.model(data));
    };
    listSeekLimit(seek={}, limit, sorted, fields={}){
        sorted = sorted || {$natural:1};
        return this.model
            .find(seek)
            .limit(Number(limit))
            .select(Object.assign({_id:0}, fields))
            .sort(sorted);
    };
    listLastForSeek(seek={}, limit, fields={}){
        return this.model
        .find(seek)
        .limit(Number(limit))
        .select(Object.assign({_id:0}, fields))
        .sort({$natural:-1});
    };
    listAllForPage(seek={}, limit, page, sorted, fields={}){
        sorted = sorted || {$natural:1};
        return this.model
            .find(seek)
            .skip(limit * (page - 1))
            .limit(Number(limit))
            .select(Object.assign({_id:0}, fields))
            .sort(sorted);
    };
    findOneUpdate(seek=undefined, data, upSert=true){
        return this.model
            .findOneAndUpdate(seek, data, {new: upSert});
    };
    remove(fields){
        fields["_id"] = (fields["_id"] === "_id") ? ObjectId(fields["_id"]) : null;
        (fields["_id"] == null) ? delete fields["_id"] : null
        return this.model
            .remove(field)
    };
};

module.exports = CRUD;
