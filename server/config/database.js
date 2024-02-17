// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'infocusr_konnect',
//   password: '}%!Bv]J_FoJ5',
//   database: 'infocusr_konnect'
// });
// -----------------------------------------------------------
// const otpdb = mysql.createConnection({
  //   host: 'localhost',
  //   user: 'root',
  //   password: '',
  //   database: 'userauthotp'
  // })
  // -----------------------------------------------------------

const mysql = require('mysql2');

const createOtpDbConnection = () => {
  const otpdb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'konnect_db0'
  });

  otpdb.connect((err) => {
    if (err) {
      console.error('Error connecting to OTP database:', err);
      process.exit(1);
    }
  });

  return otpdb;
};

module.exports = createOtpDbConnection;
