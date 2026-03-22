import { Order } from "../Model/Order.js";

export const ProdectOrder = async(req,res)=>{
        try {

            const userId  = req.user.Id;
            const {ProdectId} = req.params;
            const {OrderDeliverData,OrderStatus} = req.body || {}

            // console.log(userId);
            // console.log(ProdectId);
            
            
            if(!userId || !ProdectId){
                return res.status(400).json({
                    message:"userId and prodect Id not found"
                })
            }
            
            const order = await new Order({
                    Orderby:userId,
                    ProdecOrder:ProdectId,
                    OrderDeliverData:OrderDeliverData,
                    OrderStatus:OrderStatus
            })

            await order.save()

            return res.status(200).json({
                message:"the order not found",
                order
            })

            

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message:"order internal error"
            })
            
        }
}

export const prodectOrder = async(req,res)=>{
        try {
            const prodectId = req.params
        } catch (error) {
            
        }
}



