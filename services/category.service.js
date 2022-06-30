const {formatResponse} = require("../helpers/utility")
const Category = require("../model/categories")
const categoriesData = require("../categories.json")

async function insertCategories() {
    try {
        await Category.find({}).deleteMany();
        await Category.insertMany(categoriesData);
        return formatResponse("success", "Inserted successfully")
    } catch (error) {
        return formatResponse("success", "", {error},500)
    }

}

async function findRequested(params) {
    try {
        const {id, level, parent_id, limit, first} = params;
        let query;
        if (first) query = Category.findOne({});
        else query = Category.findOne({});
        if (id) query.where('id').equals(id);
        if (level) query.where('level').equals(level);
        if (parent_id) query.where('parent_id').equals(parent_id);
        if (limit) query.limit(limit);
        const data = await query.exec()
        return formatResponse("success", "", {data})
    } catch (error) {
        return formatResponse("success", "", 500, {error})
    }

}

module.exports = {
    insertCategories,
    findRequested
}



