const db = require('../config/pgconect');

module.exports = {
    async  getLogin(){
      try{
        console.log("Inciando a conexao.")
        await client.connect()
        console.log("Conexao bem sucedida.")
        const resultado = await client.query('select * from professor')
        return table(resultado.rows)
      }
      catch(ex){
        console.log("Ocorreu um erro no getLogin. Erro:" + ex )
      }
      finally {
        await client.end()
        console.log("Cliente Desconectado.")
      }
    },

    async  insLogin(nome, senha, email){
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
    },

  async  delLogin(nome){
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
}
