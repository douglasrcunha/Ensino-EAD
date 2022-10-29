const Client = require('pg').Client

const client = new Client({
  user: "postgres",
  password: "dg1407",  
  host: "localhost",
  port: 5432,  
  database: "EnsinoEAD",
});

//client.connect();
//client.query('select * from professor')
//.then(results => {
//const resultado = results.rows
//console.table(resultado)
//})
//.finally(() => client.end())
//getLogin()
//insLogin("Andre", "1234", "andre@andre.com")
//delLogin("Andre")

async function getLogin(){
  try{
    console.log("Inciando a conexao.")
    await client.connect()
    console.log("Conexao bem sucedida.")
    const resultado = await client.query('select * from professor')
    console.table(resultado.rows)
  }
  catch(ex){
    console.log("Ocorreu um erro no getLogin. Erro:" + ex )
  }
  finally {
    await client.end()
    console.log("Cliente Desconectado.")
  }
}

async function insLogin(nome, senha, email){
  try{
    console.log("Inciando a conexao.")
    await client.connect()
    console.log("Conexao bem sucedida.")
    await client.query('insert into professor("nome", "senha", "email") values ('+"'"+nome+"', '"+senha+"', '"+email+"' );")
    console.log("Valor inserido na tabela.")

    const resultado = await client.query('select * from professor')
    console.table(resultado.rows)    
  }
  catch(ex){
    console.log("Ocorreu um erro no getLogin. Erro:" + ex )
  }
  finally {
    await client.end()
    console.log("Cliente Desconectado.")
  }
}

async function delLogin(nome){
  try{
    console.log("Inciando a conexao.")
    await client.connect()
    console.log("Conexao bem sucedida.")
    await client.query("delete from professor where nome = '"+nome+"';")
    console.log("Valor removido da tabela.")

    const resultado = await client.query('select * from professor')
    console.table(resultado.rows)    
  }
  catch(ex){
    console.log("Ocorreu um erro no getLogin. Erro:" + ex )
  }
  finally {
    await client.end()
    console.log("Cliente Desconectado.")
  }
}