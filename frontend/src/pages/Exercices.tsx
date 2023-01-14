import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const Exercices = (props: Props) => {
  const { subject } = useParams();
  return (
    <div>
      <p>{subject}</p>
    </div>
  );
};

export default Exercices;
