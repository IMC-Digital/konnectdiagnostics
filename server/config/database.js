// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'infocusr_konnect',
//   password: '}%!Bv]J_FoJ5',
//   database: 'infocusr_konnect'
// });
// -----------------------------------------------------------
// const pool = mysql.createConnection({
  //   host: 'localhost',
  //   user: 'root',
  //   password: '',
  //   database: 'userauthotp'
  // })
  // -----------------------------------------------------------

// const mysql = require('mysql2');

// const createpoolConnection = () => {
//   const pool = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'admin123',
//     database: 'konnect_db0'
//   });

//   pool.connect((err) => {
//     if (err) {
//       console.error('Error connecting to OTP database:', err);
//       process.exit(1);
//     }
//   });

//   return pool;
// };

// module.exports = createpoolConnection;

// -------------------------------------------------
const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  database: 'konnect_db0'
});

const createpoolConnection = () => {
  return pool;
};

module.exports = createpoolConnection;

