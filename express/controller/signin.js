module.exports.signin = (req,res) => {
        // console.log(process.env.SECRET)
        const {email,password} = req.body
        let dbemail = "admin@gmail.com"
        let dbpassword = "admin321"
    
        if(email == dbemail && password == dbpassword){
            
            let token = jwt.sign({email:email},process.env.SECRET,{expiresIn:"1h"}); 
    
            res.send({
                result:"success",
                token:token
            })
    
        }else{
            res.status(400).send("failure")
        }
}