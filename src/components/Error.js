import React from "react";
import { useSelector } from "react-redux";

export default function Error() {
  const data = useSelector((state) => state.user);
  const error = data.errors;
  console.log(error);
  return (
    <ul>
      {error.email && <li>{error.email}</li>}
      {error.username && <li>{error.username}</li>}
    </ul>
  );
}
