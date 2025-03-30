const webHook = require('svix')
const User = require('../Models/User.Model')
const config = require('../Config/config')

export const clerkWebHooks = async (req , res) => {
    try {
        const Hook = new webHook(config.CLERK_WEBHOOK_SECRET)
        await Hook.verify(JSON.stringify(req.body),{
            "svix-id" : req.header["svix-id"],
            "svix-timestamp" : req.header["svix-timestamp"],
            "svix-signature" : req.header["svix-signature"]
        })

        const {data, type} = req.body

        switch(type) {
            case 'user.created' : {
                const userData = {
                    _id : data._id,
                    email : data.email_addresses[0].email_address,
                    name : data.first_name + " " + data.last_name,
                    imageUrl : data.image_url,
                }
                await User.create(userData)
                res.json()
                break;
            } 

            case 'user.updated' : {
                const userData = {
                    email : data.email_address[0].email_address,
                    name : data.first_name + " " + data.last_name,
                    imageUrl : data.image_url,
                }
                await User.findByIdAndUpdate(data.id, userData)
                res.json({})
                break;
            }

            case 'user.deleted' : {
                await User.findByIdAndDelete(data.id)
                res.json({})
                break;
            }
            default :
                break;

        }
    } catch (error) {
        res.json({success : false, message : 'error occuiped'})
    }
}