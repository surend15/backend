var connection=require('../db')
const fs = require('fs');
const lin="http://192.168.187.186:8000/";

const Appartment=(im,inn)=>{
    console.log("request file",im,inn);
    var file=im;
    let fname=file.name;
    var print=inn;
    let pname=print.name
    console.log("fliename",file)
    file.mv('appartment/'+fname,function(err){
        if(err){
            return err;
        }else{
            console.log("appart File Uploaded");
            print.mv('appartprint/'+pname,function(err,result){
                if(err){
                    return err;
                }
                else{
                    return result;
                    
                }
            })
        }
    })
}
var ime;
const down=(req,res)=>{
    console.log(ime);
    const testFolder = './appartprint/';
                    res.download(testFolder+ime)
               
}
const read=(req,res)=>{
    console.log("imgname",req.body.imgname)
    if(req.body.imgname){
    const testFolder = './appartment/';
    var a=[];
    let qry='select * from imgs where imgname=?'
    
            fs.readdir(testFolder, (err, files) => {
                files.map(ch=>{
                    if(ch==req.body.imgname){
                        connection.query(qry,[req.body.imgname],function(err,result){
                            if(err){
                                res.send(err)
                            }
                            else{
                                console.log("result",result[0].id);
                                ime=result[0].print
                                console.log(ime);
                                a.push({
                                    cost:result[0].cost,
                                    imgname:`${lin}`+result[0].imgname,
                                    print:`${lin}`+result[0].print,
                                    sqfit:result[0].sqfit
                                })
                                res.send({
                                    status:200,
                                    message:'details collected',
                                    data:a
                                })
                            }
                        })
                    }
                })
                
                })
            }
            else{
                const testFolder = './appartment/';
                var a=[];
                fs.readdir(testFolder, (err, files) => {
                console.log('files',files)


                for(let i=0;i<=files.length;i++){

                a[i]={"img":lin+files[i]};

                };
                res.send(
                {
                    message:"images",
                    data:a
                }

                )
                });
            }
}
    const Cottage=(im,inn)=>{
        console.log("request file",im,inn);
        var file=im;
        let fname=file.name;
        var print=inn;
        let pname=print.name
        console.log("fliename",file)
        file.mv('cottage/'+fname,function(err){
            if(err){
                return err;
            }else{
                console.log("cottage File Uploaded");
                print.mv('cottprint/'+pname,function(err,result){
                    if(err){
                        return err;
                    }
                    else{
                        return result;
                        
                    }
                })
            }
        })
    }
    const cot=(req,res)=>{
        console.log("imgname",req.body.imgname)
        if(req.body.imgname){
        const testFolder = './cottage/';
        var a=[];
        let qry='select * from imgs where imgname=?'
        
                fs.readdir(testFolder, (err, files) => {
                    files.map(ch=>{
                        if(ch==req.body.imgname){
                            connection.query(qry,[req.body.imgname],function(err,result){
                                if(err){
                                    res.send(err)
                                }
                                else{
                                    console.log("result",result[0].imgname);
                                    a.push({
                                        cost:result[0].cost,
                                        imgname:`${lin}`+result[0].imgname,
                                        print:`${lin}`+result[0].print,
                                        sqfit:result[0].sqfit
                                    })
                                    res.send({
                                        status:200,
                                        message:'details collected',
                                        data:a
                                    })
                                }
                            })
                        }
                    })
                    
                    })
                }
                else{
                    const testFolder = './cottage/';
                    var a=[];
                    fs.readdir(testFolder, (err, files) => {
                    console.log('files',files)


                    for(let i=0;i<=files.length;i++){

                    a[i]={"img":lin+files[i]};

                    };
                    res.send(
                    {
                        message:"images",
                        data:a
                    }

                    )
                    });
                }
    }
    const Ecofriend=(im,inn)=>{
        console.log("request file",im,inn);
        var file=im;
        let fname=file.name;
        var print=inn;
        let pname=print.name
        console.log("fliename",file)
        file.mv('eco/'+fname,function(err){
            if(err){
                return err;
            }else{
                console.log("eco File Uploaded");
                print.mv('ecoprint/'+pname,function(err,result){
                    if(err){
                        return err;
                    }
                    else{
                        return result;
                        
                    }
                })
            }
        })
    }
    const ecof=(req,res)=>{
        console.log("imgname",req.body.imgname)
        if(req.body.imgname){
        const testFolder = './eco/';
        var a=[];
        let qry='select * from imgs where imgname=?'
        
                fs.readdir(testFolder, (err, files) => {
                    files.map(ch=>{
                        if(ch==req.body.imgname){
                            connection.query(qry,[req.body.imgname],function(err,result){
                                if(err){
                                    res.send(err)
                                }
                                else{
                                    console.log("result",result[0].imgname);
                                    a.push({
                                        cost:result[0].cost,
                                        imgname:`${lin}`+result[0].imgname,
                                        print:`${lin}`+result[0].print,
                                        sqfit:result[0].sqfit
                                    })
                                    res.send({
                                        status:200,
                                        message:'details collected',
                                        data:a
                                    })
                                }
                            })
                        }
                    })
                    
                    })
                }
                else{
                    const testFolder = './eco/';
                    var a=[];
                    fs.readdir(testFolder, (err, files) => {
                    console.log('files',files)


                    for(let i=0;i<=files.length;i++){

                    a[i]={"img":lin+files[i]};

                    };
                    res.send(
                    {
                        message:"images",
                        data:a
                    }

                    )
                    });
                }
    }
    const Farm=(im,inn)=>{
        console.log("request file",im,inn);
        var file=im;
        let fname=file.name;
        var print=inn;
        let pname=print.name
        console.log("fliename",file)
        file.mv('farm/'+fname,function(err){
            if(err){
                return err;
            }else{
                console.log("farm File Uploaded");
                print.mv('farmprint/'+pname,function(err,result){
                    if(err){
                        return err;
                    }
                    else{
                        return result;
                        
                    }
                })
            }
        })
    }
    const far=(req,res)=>{
        console.log("imgname",req.body.imgname)
        if(req.body.imgname){
        const testFolder = './farm/';
        var a=[];
        let qry='select * from imgs where imgname=?'
        
                fs.readdir(testFolder, (err, files) => {
                    files.map(ch=>{
                        if(ch==req.body.imgname){
                            connection.query(qry,[req.body.imgname],function(err,result){
                                if(err){
                                    res.send(err)
                                }
                                else{
                                    console.log("result",result[0].imgname);
                                    a.push({
                                        cost:result[0].cost,
                                        imgname:`${lin}`+result[0].imgname,
                                        print:`${lin}`+result[0].print,
                                        sqfit:result[0].sqfit
                                    })
                                    res.send({
                                        status:200,
                                        message:'details collected',
                                        data:a
                                    })
                                }
                            })
                        }
                    })
                    
                    })
                }
                else{
                    const testFolder = './farm/';
                    var a=[];
                    fs.readdir(testFolder, (err, files) => {
                    console.log('files',files)


                    for(let i=0;i<=files.length;i++){

                    a[i]={"img":lin+files[i]};

                    };
                    res.send(
                    {
                        message:"images",
                        data:a
                    }

                    )
                    });
                }
    }
    const Modern=(im,inn)=>{
        console.log("request file",im,inn);
        var file=im;
        let fname=file.name;
        var print=inn;
        let pname=print.name
        console.log("fliename",file)
        file.mv('modern/'+fname,function(err){
            if(err){
                return err;
            }else{
                console.log("modern File Uploaded");
                print.mv('modernprint/'+pname,function(err,result){
                    if(err){
                        return err;
                    }
                    else{
                        return result;
                        
                    }
                })
            }
        })
    }
    const mode=(req,res)=>{
        console.log("imgname",req.body.imgname)
        if(req.body.imgname){
        const testFolder = './modern/';
        var a=[];
        let qry='select * from imgs where imgname=?'
        
                fs.readdir(testFolder, (err, files) => {
                    files.map(ch=>{
                        if(ch==req.body.imgname){
                            connection.query(qry,[req.body.imgname],function(err,result){
                                if(err){
                                    res.send(err)
                                }
                                else{
                                    console.log("result",result[0].imgname);
                                    a.push({
                                        cost:result[0].cost,
                                        imgname:`${lin}`+result[0].imgname,
                                        print:`${lin}`+result[0].print,
                                        sqfit:result[0].sqfit
                                    })
                                    res.send({
                                        status:200,
                                        message:'details collected',
                                        data:a
                                    })
                                }
                            })
                        }
                    })
                    
                    })
                }
                else{
                    const testFolder = './modern/';
                    var a=[];
                    fs.readdir(testFolder, (err, files) => {
                    console.log('files',files)


                    for(let i=0;i<=files.length;i++){

                    a[i]={"img":lin+files[i]};

                    };
                    res.send(
                    {
                        message:"images",
                        data:a
                    }

                    )
                    });
                }
    }
    const Palace=(im,inn)=>{
        console.log("request file",im,inn);
        var file=im;
        let fname=file.name;
        var print=inn;
        let pname=print.name
        console.log("fliename",file)
        file.mv('palace/'+fname,function(err){
            if(err){
                return err;
            }else{
                console.log("palace File Uploaded");
                print.mv('palaceprint/'+pname,function(err,result){
                    if(err){
                        return err;
                    }
                    else{
                        return result;
                        
                    }
                })
            }
        })
    }
    const pal=(req,res)=>{
        console.log("imgname",req.body.imgname)
        if(req.body.imgname){
        const testFolder = './palace/';
        var a=[];
        let qry='select * from imgs where imgname=?'
        
                fs.readdir(testFolder, (err, files) => {
                    files.map(ch=>{
                        if(ch==req.body.imgname){
                            connection.query(qry,[req.body.imgname],function(err,result){
                                if(err){
                                    res.send(err)
                                }
                                else{
                                    console.log("result",result[0].imgname);
                                    a.push({
                                        cost:result[0].cost,
                                        imgname:`${lin}`+result[0].imgname,
                                        print:`${lin}`+result[0].print,
                                        sqfit:result[0].sqfit
                                    })
                                    res.send({
                                        status:200,
                                        message:'details collected',
                                        data:a
                                    })
                                }
                            })
                        }
                    })
                    
                    })
                }
                else{
                    const testFolder = './palace/';
                    var a=[];
                    fs.readdir(testFolder, (err, files) => {
                    console.log('files',files)


                    for(let i=0;i<=files.length;i++){

                    a[i]={"img":lin+files[i]};

                    };
                    res.send(
                    {
                        message:"images",
                        data:a
                    }

                    )
                    });
                }
    }
    const Studio=(im,inn)=>{
        console.log("request file",im,inn);
        var file=im;
        let fname=file.name;
        var print=inn;
        let pname=print.name
        console.log("fliename",file)
        file.mv('studio/'+fname,function(err){
            if(err){
                return err;
            }else{
                console.log("studio File Uploaded");
                print.mv('studioprint/'+pname,function(err,result){
                    if(err){
                        return err;
                    }
                    else{
                        return result;
                        
                    }
                })
            }
        })
    }
    const stu=(req,res)=>{
        console.log("imgname",req.body.imgname)
        if(req.body.imgname){
        const testFolder = './studio/';
        var a=[];
        let qry='select * from imgs where imgname=?'
        
                fs.readdir(testFolder, (err, files) => {
                    files.map(ch=>{
                        if(ch==req.body.imgname){
                            connection.query(qry,[req.body.imgname],function(err,result){
                                if(err){
                                    res.send(err)
                                }
                                else{
                                    console.log("result",result[0].imgname);
                                    a.push({
                                        cost:result[0].cost,
                                        imgname:`${lin}`+result[0].imgname,
                                        print:`${lin}`+result[0].print,
                                        sqfit:result[0].sqfit
                                    })
                                    res.send({
                                        status:200,
                                        message:'details collected',
                                        data:a
                                    })
                                }
                            })
                        }
                    })
                    
                    })
                }
                else{
                    const testFolder = './studio/';
                    var a=[];
                    fs.readdir(testFolder, (err, files) => {
                    console.log('files',files)


                    for(let i=0;i<=files.length;i++){

                    a[i]={"img":lin+files[i]};

                    };
                    res.send(
                    {
                        message:"images",
                        data:a
                    }

                    )
                    });
                }
    }
    const signin=(req,res)=>{
        var name=req.body.phone
        var password=req.body.password
        var qry3 ="select * from `login` where phone=? and PASSWORD=?"
        connection.query(qry3,[name,password],function(err, result){
            console.log(name,password);
            if(err){
                res.send({
                    status: 400,
                            message: err,
                            data: []
                })
            }
            else if(result.length>0){
                console.log("hsdgcgvscwc",result)
                res.send({
                    status: 200,
                            message: "success",
                            data: result,
                }),
                 console.log("as------------>")
            }
            else{
                res.send({
                    status:400,
                    message:"invalid username and password",
                    data:[]
                })
            }
                })}

    const register = (req, res) => {
    var qry = "INSERT INTO `login` (name,email,password, phone) VALUES (?,?,?,?)"

    connection.query(qry, [req.body.name, req.body.email,req.body.password, req.body.phone],function (err, result){
       console.log(err)
        if (err) {
           res.send({
                status:400,
                message:"error"

           })
        }
        else (
            res.send({
                status:200,
                message:"success",
                data:result
                           })
        )
    
      })
  
}

const img=()=>{
    connection.query('select * from login ')
}

const Image = (req, res) => {
    let ty=req.body.what
    console.log(ty);
    console.log("files",req.files);
    console.log("body",req.body);
    var inn= req.files.productimage;
    
    var im=req.files.productitem;
    
    connection.query(`select * from imgs where imgname='${im.name}'`,(err,result)=>{
        if(err){
            res.send(err)
        }
        else if(result.length>0){
            res.send({
                status:400,
                message:'img already found'
            })
            
        }
        else{
            console.log("body",req.body);
            console.log("files",req.files);
            var qry = "INSERT INTO `imgs` (imgname,sqfit,cost,print) VALUES (?,?,?,?)"
        connection.query(qry, [im.name,req.body.sqfit,req.body.cost,inn.name],function (err, result){
            if(err){
                res.send({
                    status:400,
                    message:"error"
               })
            }
            else if(ty=='appart'){
                console.log('appart')
                let result=Appartment(im,inn);
                res.send({
                    status:200,
                    data:result
                })
    
            }
            else if(ty=='cot'){
                let result=Cottage(im,inn);
                res.send({
                    status:200,
                    data:result
                })
            }
            else if(ty=='eco'){
                let result=Ecofriend(im,inn);
                res.send({
                    status:200,
                    data:result
                })
            }
            else if(ty=='far'){
                let result=Farm(im,inn);
                res.send({
                    status:200,
                    data:result
                })
            }
            else if(ty=='mod'){
                let result=Modern(im,inn);
                res.send({
                    status:200,
                    data:result
                })
            }
            else if(ty=='pal'){
                let result=Palace(im,inn);
                res.send({
                    status:200,
                    data:result
                })
            }
            else if(ty=='stu'){
                let result=Studio(im,inn);
                res.send({
                    status:200,
                    data:result
                })
            }
        })
         }
    })
}
module.exports = { register,signin,Appartment,down,read,Cottage,cot,Ecofriend,ecof,Farm,far,Modern,mode,Palace,pal,Studio,stu,Image};
