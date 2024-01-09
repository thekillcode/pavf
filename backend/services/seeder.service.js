import _ from 'lodash';
import Role from '../models/Role.js';
import User from '../models/User.js';

export const createSeederRole = async (name) => {
  const newRole = await new Role({
    name: name,
    slug: _.kebabCase(name),
  }).save();

  return newRole;
};

export const createSeederUser = async (userData) => {
  const { username, email, password, role } = userData;

  const userRole = await Role.findOne({ slug: role });
  const newUser = await new User({
    username: username,
    email: email,
    password: password,
    role: userRole._id,
  }).save();

  return newUser;
};
