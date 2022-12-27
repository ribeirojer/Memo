import React from "react";

type Props = {};

const SendCard = (props: Props) => {
  return (
    <div>
      <form>
        <div>
          <input type="text" placeholder="Your Name" />
        </div>
        <div>
          <input type="email" placeholder="Your Email" />
        </div>
        <div>
          <input type="text" placeholder="Your Phone" />
        </div>
        <div>
          <textarea rows={6} placeholder="Your Message"></textarea>
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default SendCard;
