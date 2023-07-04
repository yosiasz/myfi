import { useEffect, useState } from "react";
import BankService from "../services/banksService";

const ListBanks = () => {
  const [banks, setBanks] = useState([]);

  /*   
    useEffect(() => {
      const fetchBanks = async () => {
        const banks = await BankService.getBanks();
        setBanks(banks);
      };
    }, []); 
  */

  useEffect(() => {
    BankService.getBanks().then((data) => setBanks(data));
  }, []);

  const fetchBanks = () => {
    fetch("http://localhost:5000/banks")
      .then((res) => res.json())
      .then((data) => {
        setBanks(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {banks.map((bank) => (
          <li key={bank.id} className="list-group-item">
            {bank.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListBanks;
