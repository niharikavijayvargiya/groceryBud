import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import ShowGrocery from "./ShowGrocery";
import toast, { Toaster } from "react-hot-toast";

const AddGrocery = () => {
  const [groceryInput, setGroceryInput] = useState("");
  const [groceryData, setGroceryData] = useState(
    JSON.parse(localStorage.getItem("groceryData")) || []
  );

  useEffect(() => {
    localStorage.setItem("groceryData", JSON.stringify(groceryData));
  }, [groceryData]);

  const addedSuccesFully = () => toast.success("Added Successfully");
  const deletedSuccesFully = () => toast.error("Delete Successfully");

  const handleData = () => {
    if (!groceryInput.trim()) return;
    let obj = {
      id: uuidv4(),
      name: groceryInput,
      checkVal: false,
    };
    setGroceryData([...groceryData, obj]);
    setGroceryInput("");

    addedSuccesFully();
  };

  const handleDelete = (id) => {
    let filterData = groceryData.filter((ele) => {
      return ele.id != id;
    });

    setGroceryData(filterData);
    deletedSuccesFully();
  };

  const handleCheckBox = (id) => {
    console.log("inside ck");
    let updatedData = groceryData.map((ele) => {
      if (ele.id === id) {
        ele.checkVal = !ele.checkVal;
      }
      return ele;
    });
    setGroceryData(updatedData);
  };

  return (
    <div
      style={{
        width: "45%",
        margin: "auto",
        // marginTop: "100px",
        textAlign: "center",
        padding: "10px 0 20px 0",
      }}
    >
      <h1 style={{ padding: "40px 80px 60px", fontSize: "3rem"  }}>GROCERY BUD</h1>
      <input
      style={{
        padding: "10px 80px",
        marginLeft: "20px"
      }}
        type="text"
        value={groceryInput}
        onChange={(e) => {
          setGroceryInput(e.target.value);
        }}
      />
      <button className="button-59" onClick={handleData}>Add items</button>

      {groceryData.map((item) => {
        return (
          <ShowGrocery
            key={item.id}
            item={item}
            onDelete={() => handleDelete(item.id)}
            checkBox={() => handleCheckBox(item.id)}
          />
        );
      })}

      <Toaster
        toastOptions={{
          duration: 1500,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default AddGrocery;
