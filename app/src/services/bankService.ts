import IBankData from "./models/Bank";
import http from 'http';

const options = {
  host: 'localhost',
  port: 8080,
  path: '/banks',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

const getBanks = () => {
  return fetch("http://localhost:5000/banks")
  .then((res) => res.json())
  .then((data) => {
    return data.results;
  })
  .catch((err) => {
    console.log(err.message);
  });
}


/*   
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle, 
*/

const BankService = {
  getBanks,
};

export default BankService;