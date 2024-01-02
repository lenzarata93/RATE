const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10); 
    return hashedPassword;
  } catch (error) {
    console.error('Hashing failed:', error);
    throw new Error('Hashing failed');
  }
};

module.exports = hashPassword ;
