import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "../../feature/userSlice";

export const useProductPage = () => {
  const [gender, setGender] = useState("male");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(10);
  const [totalProduct, setTotalProduct] = useState(0);
  const [textSearch, setTextSearch] = useState("");
  const name = useSelector((state: any) => state.user.name);
  const dispatch = useDispatch();
  const changeName = () => {
    dispatch(updateName("nguyen the thuan"));
  };

  useEffect(() => {
    changeName();
  }, []);

  return { gender, setGender, name, page, setPage, pageSize, setPageSize, totalPages, setTotalPages, totalProduct, setTotalProduct, textSearch, setTextSearch };
};
