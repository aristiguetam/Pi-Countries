import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createactivity } from "../../../actions/index";
// import Alert from "../../alert/Alert";

export const useActivity = (initialInput, validateInput) => {
  const [input, setInput] = useState(initialInput);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateInput(input));
  };

  const handleDelete = (e) => {
    setInput({
      ...input,
      countries: input.countries.filter((x) => x !== e),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createactivity(input));
    setInput(initialInput);
    setState(true);
    // alert("successfully created");
  };

  return {
    input,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    navigate,
    setInput,
    handleSelect,
    handleDelete,
    state,
    setState,
  };
};
