import jwt from 'jsonwebtoken'

export const Authentication = async(req,res,next)=>{
        try {
            
            const token = req.cookies.token

            if(!token){
                return res.status(400).json({
                    message:"the token is not provide"
                })
            }

            const decode = jwt.verify(token,process.env.JWT_SCREAT_KEY)

            req.user = decode

            next()

        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message:"this use is token internal error"
            })
            
        }
}