import { clerkClient } from '@clerk/express';

const updateEducator = async (req, res) => {
    try {
        const userId = req.auth.userId; // Assuming you have a way to get the userId from the request
        await clerkClient.users.updateUserMetadata(userId, {
            public_metadata: {
                role: 'educator',
            },
        });
        res.json({ message: 'You can now create courses', success: true });
        console.log('Educator updated successfully');
    } catch (error) {
        console.error('Error updating educator:', error);
        console.log('Error updating educator:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    updateEducator,
};