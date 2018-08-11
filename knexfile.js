// Update with your config settings.


const devDbConfig ={
  client:'pg',
  connection:{
    host:'127.0.0.1',
    port:'5432',
    user:'dba_bookbook',
    password:'passpass',
    database:'bookbook'
  },

  migrations : {
    directory: './src/databases/migrations'
  },

  seeds : {
    directory: './src/databases/seeds'
  }
}

module.exports = {
  development: devDbConfig
};
