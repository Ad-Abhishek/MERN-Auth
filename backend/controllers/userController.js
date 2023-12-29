import asyncHandler from 'express-async-handler';
// @desc Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).send({
    message: 'Auth User',
  });
});

export { authUser };
