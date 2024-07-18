import PropTypes from "prop-types";


const ShowGrocery = ({ item, onDelete, checkBox }) => {
  //   const [chekVal, setChekVal] = useState(false);
  //   console.log(onDelete);
  //   const handleCheckBox = () => {
  //     setChekVal(!chekVal);
  //   };
  const { name, checkVal } = item;
  //   console.log(item);
  return (
    <div
      style={{
        marginTop: "10px",
        padding: "10px",
        justifyContent: "space-between",
        display: "flex",
        width: "60%",
        margin: "auto",
        // border: "1px solid black",
      }}
    >
      <input type="checkbox" checked={checkVal} onChange={checkBox} />

      <span style={{ fontSize: "20px" }}>
        {checkVal ? <del style={{ color: "red" }}>{name}</del> : <span style={{ color: "green" }}>{name}</span>}
      </span>

      <button
        style={{
          color: "white",
          backgroundColor: "black",
          border: "none",
          padding: "8px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

ShowGrocery.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  checkBox: PropTypes.func.isRequired,
};

export default ShowGrocery;

