const { response } = require('express');
const db = require('../config/pgconect');

module.exports = {
  async  getCursos(){
    try{
      console.log("Inciando a conexao.")
      await client.connect()
      console.log("Conexao bem sucedida.")
      const resultado = await client.query('select * from cursos')
      return response.json(getCursos)
    }
    catch(ex){
      console.log("Ocorreu um erro no getCursos. Erro:" + ex )
    }
    finally {
      await client.end()
      console.log("Cliente Desconectado.")
    }
  },

  async  insCursos(nome, senha, email){
    try{
      console.log("Inciando a conexao.")
      await client.connect()
      console.log("Conexao bem sucedida.")
      await client.query('insert into cursos("nome", "decricao", "imagen", "status") values ('+"'"+nome+"', '"+decricao+"', '"+imagen+"', '"+status+"' );")
      console.log("Valor inserido na tabela.")
  
      const resultado = await client.query('select * from cursos')
      console.table(resultado.rows)    
    }
    catch(ex){
      console.log("Ocorreu um erro no getCursos. Erro:" + ex )
    }
    finally {
      await client.end()
      console.log("Cliente Desconectado.")
    }
  },

async  delCursos(nome){
  try{
    console.log("Inciando a conexao.")
    await client.connect()
    console.log("Conexao bem sucedida.")
    await client.query("delete from cursos where nome = '"+nome+"';")
    console.log("Valor removido da tabela.")

    const resultado = await client.query('select * from cursos')
    console.table(resultado.rows)    
  }
  catch(ex){
    console.log("Ocorreu um erro no getCursos. Erro:" + ex )
  }
  finally {
    await client.end()
    console.log("Cliente Desconectado.")
  }
}
}