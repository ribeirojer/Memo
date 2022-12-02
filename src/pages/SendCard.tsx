import React from "react";

type Props = {};

const SendCard = (props: Props) => {
  return (
    <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
      <form>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            placeholder="Your Email"
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Your Phone"
            className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
        </div>
        <div className="mb-6">
          <textarea
            rows={6}
            placeholder="Your Message"
            className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-primary border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendCard;
