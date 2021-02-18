const bcrypt = require('bcrypt');

const password = '12345678';

const salt = bcrypt.genSaltSync();

console.log({ salt });

const hash = bcrypt.hashSync(password, salt);

console.log({ hash });

function compare(password, hash) {
  const salt = hash.slice(0, 29);
  return hash === bcrypt.hashSync(password, salt)
}

console.log(compare('12345678', hash))
