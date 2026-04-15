    import { Order } from "../Model/Order.js";

    export const ProdectOrder = async (req, res) => {
        try {

            const userId = req.user.Id;
            const { ProdectId } = req.params;
            const { OrderDeliverData, OrderStatus } = req.body || {}

            // console.log(userId);
            // console.log(ProdectId);


            if (!userId || !ProdectId) {
                return res.status(400).json({
                    message: "userId and prodect Id not found"
                })
            }

            const existingOrder = await Order.findOne({
                Orderby: userId,
                ProdecOrder: ProdectId
            })

            if (existingOrder) {
                return res.status(400).json({
                    message: "User is alredy Order this prodect"
                })
            }

            const order = await new Order({
                Orderby: userId,
                ProdecOrder: ProdectId,
                OrderDeliverData: OrderDeliverData,
                OrderStatus: OrderStatus
            })

            await order.save()

            return res.status(200).json({
                message: `Order placed successfully`,
                order
            })



        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "order internal error"
            })

        }
    }

    export const UserOrder = async (req, res) => {
        try {

            const userId = req.user.Id;

            const order = await Order.find({ Orderby: userId }).populate('ProdecOrder')

            if (!order) {
                return res.status(400).json({
                    message: "user order not found"
                })
            }
            return res.status(200).json({
                message: "this is user order",
                order
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "internal server error"
            })
        }
    }

    // export const ProdecOrderget = async (req, res) => {
        
    //     try {
    //         const ProdectId = req.params

    //         const prodectOrder = await Order.find({})
    //     } catch (error) {
            
    //     }

    // }




