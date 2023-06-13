import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();
const Blog = db.Blog;

export const blogRepo = {
    // authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

// async function authenticate({ username, password }) {
//     const user = await Blog.findOne({ username });

//     if (!(user && bcrypt.compareSync(password, user.hash))) {
//         throw 'Username or password is incorrect';
//     }

//     // create a jwt token that is valid for 7 days
//     const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.secret, { expiresIn: '7d' });

//     return {
//         ...user.toJSON(),
//         token
//     };
// }

async function getAll() {
    return await Blog.find();
}

async function getById(id) {
    return await Blog.findById(id);
}

async function create(params) {
 
    const blog = new Blog(params);
    // save blog
    await blog.save();
}


async function update(id, params) {
    const blog = await Blog.findById(id);

    // validate
    if (!blog) throw 'Blog not found';




    // copy params properties to blog
    Object.assign(blog, params);

    await blog.save();
}

async function _delete(id) {
    await Blog.findByIdAndRemove(id);
}