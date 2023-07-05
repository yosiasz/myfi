import { useEffect, useState } from "react";
import BankService from "../services/bankService";
import IBankData from "../services/models/Bank";

const ListBanks = () => {
  const [banks, setBanks] = useState<IBankData[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("");

  useEffect(() => {
    BankService.getBanks().then((data) => setBanks(data));
  }, []);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {banks.map((bank, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={bank.id}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {bank.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListBanks;
