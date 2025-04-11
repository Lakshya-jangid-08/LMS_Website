const {clerkClient} = require('../utils/clerkClient');

// Protect Educator routes

const protectEducator = async (req, res, next) => {
  const {authorization} = req.headers;
  if (!authorization) {
    return res.status(401).json({message: 'Unauthorized'});
  }
  try {
    const token = res.auth.userId;
    const user = await clerkClient.users.getUser(token);
    if (user.publicMetadata.role !== 'educator') {
      return res.status(403).json({message: 'unauthorized access'});
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({message: error.message});
  }
}

module.exports = {
    protectEducator
};
