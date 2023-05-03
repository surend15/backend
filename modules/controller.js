const image=(req,res)=>{
    // app.post('/upload', (req, res) => {
        // Log the files to the console
        console.log("request file",req.files);
        var file=req.files.productimage;
        var filename=file.name;
        console.log("fliename",filename)
        
        file.mv('uploads/'+filename,function(err){
            if(err){
                res.send(err)
            }else{
                res.send({
                    status:200,
                    message:"Success"
                })
                console.log("File Uploaded");
            }
        })
        //All good
        
    // });
        
    
}

const upload=(req,res)=>{
    const http = require("http");
    const fs = require("fs");
    const path = require("path");
    const url = require("url");
    
    // Creating server to accept request
    http.createServer((req, res) => {
    
        // Parsing the URL
        var request = url.parse(req.url, true);
    
        // Extracting the path of file
        var action = request.pathname;
    
        // Path Refinements
        var filePath = path.join(__dirname,
                action).split("%20").join(" ");
    
        // Checking if the path exists
        fs.exists(filePath, function (exists) {
    
            if (!exists) {
                res.writeHead(404, {
                    "Content-Type": "text/plain" });
                res.end("404 Not Found");
                return;
            }
    
            // Extracting file extension
            var ext = path.extname(action);
    
            // Setting default Content-Type
            var contentType = "text/plain";
    
            // Checking if the extension of
            // image is '.png'
            if (ext === ".png") {
                contentType = "image/png";
            }
    
            // Setting the headers
            res.writeHead(200, {
                "Content-Type": contentType });
    
            // Reading the file
            fs.readFile(filePath,
                function (err, content) {
                    // Serving the image
                    res.end(content);
                });
        });
    })
    
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
module.exports = { register,signin,image,upload};
