import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 to-orange-500 py-4">
      <div className="md:w-[50%] p-4 mx-auto bg-white">
        <h4 className="font-head font-bold text-4xl text-center">Contact</h4>
        {/* form */}
        <div className="my-3 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-neutral-100 text-black p-4 w-full font-body flex-1"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="bg-neutral-100 text-black p-4 w-full font-body flex-1"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-neutral-100 text-black p-4 w-full font-body flex-1"
          />
          <textarea
            placeholder="Subject"
            className="bg-neutral-100 text-black p-4 w-full font-body flex-1"
          />

          <button className="p-4 font-head text-white bg-orange-500 rounded font-bold w-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
