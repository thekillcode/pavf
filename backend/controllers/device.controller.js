import { StatusCodes } from '../errors/ApiError.js';

export const getdata = async (req, res, next) => {
  res.status(StatusCodes.CREATED).json({
    message: 'from server',
    data: req.body,
  });
};
