import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "../../feature/userSlice";

export const useProductPage = () => {
  const [gender, setGender] = useState("male");
  const [page, setPage] = useState(1);
  const name = useSelector((state: any) => state.user.name);
  const dispatch = useDispatch();
  const changeName = () => {
    dispatch(updateName("nguyen the thuan"));
  };

  useEffect(() => {
    changeName();
  }, []);

  return { gender, setGender, name, page, setPage };
};
