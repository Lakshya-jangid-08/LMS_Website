import { Webhook } from 'svix';
import User from '../Models/User.Model.js';
import { CLERK_WEBHOOK_SECRET } from '../Config/config.js';

export const clerkWebHooks = async (req, res) => {
    try {
        const Hook = new Webhook(CLERK_WEBHOOK_SECRET);
        await Hook.verify(JSON.stringify(req.body), {
            'svix-id': req.headers['svix-id'],
            'svix-timestamp': req.headers['svix-timestamp'],
            'svix-signature': req.headers['svix-signature'],
        });

        const { data, type } = req.body;

        switch (type) {
            case 'user.created': {
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: `${data.first_name} ${data.last_name}`,
                    imageUrl: data.image_url,
                };
                await User.create(userData);
                res.json({ success: true });
                break;
            }

            case 'user.updated': {
                const userData = {
                    email: data.email_addresses[0].email_address,
                    name: `${data.first_name} ${data.last_name}`,
                    imageUrl: data.image_url,
                };
                await User.findByIdAndUpdate(data.id, userData);
                res.json({ success: true });
                break;
            }

            case 'user.deleted': {
                await User.findByIdAndDelete(data.id);
                res.json({ success: true });
                break;
            }

            default:
                res.status(400).json({ success: false, message: 'Unhandled event type' });
                break;
        }
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};