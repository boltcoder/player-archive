const DAO_STATUS  = require('./daoStatus');
const httpStatus = require('http-status');

const formatDAOResponse = (daoResponse={}, res) => {
  const {
    status,
    data
  } = daoResponse;
  switch(status) {
    case DAO_STATUS.ERROR: return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({data:null, message:"Sorry, something went wrong here. Please again after sometime" });
    case DAO_STATUS.NOT_FOUND: return res.status(httpStatus.NOT_FOUND).send({data:null, message:"Not Found" });
    case DAO_STATUS.FOUND: return res.status(httpStatus.OK).send({ data });
    default: return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({data:null });
  }
}

module.exports = formatDAOResponse;