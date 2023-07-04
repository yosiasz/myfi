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

/* export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});  */

const getBanks = () => {
  fetch("http://localhost:5000/banks")
  .then((res) => res.json())
  .then((data) => {
    //setBanks(data.results);
    return data.results as Promise<Array<IBankData>>;
  })
  .catch((err) => {
    console.log(err.message);
  });  
  //const data = await fetch('http://localhost:5000/banks');
  //return await data.json();
/*   .catch((err) => {
    console.log(err.message);
  });  */
}

const getBanksv2 = async () => {
  fetch("http://localhost:5000/banks")
  .then((res) => res.json())
  .then((data) => {
    //setBanks(data.results);
    return data.json();
  })
  .catch((err) => {
    console.log(err.message);
  });
};

/*   get,
  create,
  update,
  remove,
  removeAll,
  findByTitle, */

const BankService = {
  getBanks,
  getBanksv2,
};

export default BankService;