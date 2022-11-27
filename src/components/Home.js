import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchPost } from "redux/actions/postAction";

const Demo = () => {
  const dispatch = useDispatch();
  const { loading, errors, res } = useSelector(
    (state) => ({
      loading: state.postReducer.loading,
      errors: state.postReducer.error,
      res: state.postReducer.res,
    }),
    shallowEqual
  );

  const data = () => {
    dispatch(fetchPost());
  };

  useEffect(() => {
    data();
  }, []);
  console.log(res);

  return <h1>Home Screen</h1>;
};

export default Demo;
