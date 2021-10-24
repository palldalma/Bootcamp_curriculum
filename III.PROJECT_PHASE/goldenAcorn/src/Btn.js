import PropTypes from "prop-types";

const Btn = ({ fun, str }) => {
  Btn.protoTypes = {
    fun: PropTypes.func,
    str: PropTypes.string,
  };

  return (
    <button
      onClick={(event) => {
        fun();
      }}
      className={str}
    >
      {str}
    </button>
  );
};

export default Btn;
