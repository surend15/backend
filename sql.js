var connection=require('./db')

const Sql=(req,res)=>{
    var qr=`SELECT *,DENSE_RANK() OVER(ORDER BY Population DESC)'RANK' FROM city ORDER BY 'Rank'`
    connection.query(qr,(err,result)=>{
        if(err){
            res.send({
                status:400,
                message:'getttetdvfgsvdfugyv',
                data:err
            })
        }
        else{
            res.send({
                status:200,
                message:'getttetdvfgsvdfugyv',
                data:result
            })
        }
    })
}
module.exports={Sql}