import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Wrapper } from "./Calendar";

type Props = {};

const Calendary = (props: Props) => {
  const [date, setDate] = useState(new Date());

  return (
    <Wrapper>
      <Calendar onChange={() => setDate} value={date} />
    </Wrapper>
  );
};

export default Calendary;
