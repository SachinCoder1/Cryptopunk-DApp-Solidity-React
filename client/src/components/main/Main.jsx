import React, { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import BtnMain from "../button/Button";

export default function Main() {
  const { state } = useEth();
  const [allNames, setAllNames] = useState([]);
  const [nameInput, setNameInput] = useState("");
  console.log(state.accounts);

  const loadAllNames = async () => {
    console.log(state.contract);
    if (state.contract) {
      console.log("You are inside the loadAllNames starting");
      const totalSupply = await state.contract.methods.getAllPunks().call();
      setAllNames(totalSupply);
      console.log(totalSupply);
      console.log(allNames);
    }
  };

  const handleAddClick = () => {
    console.log(nameInput);
    state.contract.methods
      .mint(nameInput)
      .send({ from: state.accounts[0] }, (error) => {
        console.log("worked");
        if (error) return;
        setAllNames([...allNames, nameInput]);
        setNameInput("");
      });
  };

  useEffect(() => {
    const fetchAllItems = async () => {
      await loadAllNames();
      console.log(state.accounts);
    };
    fetchAllItems();
  }, [state.accounts]);

  return (
    <div className="text-center flex justify-center items-center flex-col">
      <h2 className="text-4xl font-bold py-4">Crypto Punk</h2>
      <p className="text-gray-400 text-center text-base w-96">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        reiciendis at itaque dolorum perspiciatis iste, natus assumenda commodi
        esse aut!
      </p>

      <div className="flex flex-col py-4">
        <label className="text-left" htmlFor="name">
          Name
        </label>
        <input
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          className="py-1.5 outline-green-500 my-1 px-3 rounded-xl border-gray-400 border"
          id="name"
          name="name"
          type="text"
          placeholder="e.g. Steve"
        />
      </div>
      <BtnMain onClick={handleAddClick} text="Add" />

      <div className="flex flex-wrap gap-x-6 justify-around my-20 items-center text-center">
        {allNames?.map((item, index) => (
          <div key={index}>
            <img
              src={`https://avatars.dicebear.com/api/male/${item}.svg`}
              alt={item}
              className="w-40 my-1"
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
