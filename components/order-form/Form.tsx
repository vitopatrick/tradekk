const card = [""];

const Form = () => (
  <form className="border border-neutral-50 space-y-4">
    {/* container header */}
    <div className="font-body text-sm bg-blue-400 text-white p-4">
      <p>Secure Checkout. 100% Protected. SSL Protocol.</p>
      <p>
        All information is encrypted and transmitted without risk using a Secure
        Sockets Layer protocol
      </p>
    </div>
    {/* Personal Information */}
    <div>
      <h3 className="font-bold font-head text-2xl">1. Personal Information</h3>
      {/* form input */}
      <div>
        <input
          type="email"
          placeholder="Enter your favorite email address"
          className="border rounded-md text-black p-4 w-full font-body flex-1"
        />
      </div>
      <div className="flex items-center flex-col md:flex-row gap-4 my-3">
        <div className="flex-1 w-full">
          <input
            type="text"
            placeholder="first name"
            className="border rounded-md text-black p-4 w-full font-body flex-1"
          />
        </div>
        <div className="flex-1 w-full">
          <input
            type="text"
            placeholder="Last Name"
            className="border rounded-md text-black p-4 w-full font-body flex-1"
          />
        </div>
      </div>
      {/* shipping address */}
      <div className="space-y-4">
        <div>
          <h3 className="font-bold font-head text-2xl">Shipping Address</h3>
        </div>
        {/* address */}
        <div>
          <input
            type="text"
            placeholder="Address line 1"
            className="border rounded-md text-black p-4 w-full font-body flex-1"
          />
        </div>
        {/* city */}
        <div>
          <input
            type="text"
            placeholder="city"
            className="border rounded-md text-black p-4 w-full font-body flex-1"
          />
        </div>
        {/* state & ZIP code */}
        <div className="flex items-center flex-col md:flex-row gap-4 my-3">
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="State"
              className="border rounded-md text-black p-4 w-full font-body flex-1"
            />
          </div>
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="ZIP code"
              className="border rounded-md text-black p-4 w-full font-body flex-1"
            />
          </div>
        </div>
        {/* country */}
        <div className="flex-1 w-full">
          <input
            type="text"
            placeholder="country"
            className="border rounded-md text-black p-4 w-full font-body flex-1"
          />
        </div>
        {/* second country */}
        <div className="flex-1 w-full">
          <input
            type="text"
            placeholder="country"
            className="border rounded-md text-black p-4 w-full font-body flex-1"
          />
        </div>
        {/* Phone Number */}
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="border rounded-md text-black p-4 w-full font-body flex-1"
          />
        </div>
      </div>
    </div>
    {/* billing information */}
    <div>
      <h3 className="font-bold font-head text-2xl">2. Billing Information</h3>
      <div>
        {/* Card Holder */}
        <div className="flex-1 w-full">
          <input
            type="text"
            placeholder="Cardholder Name"
            className="border rounded-md text-black p-4 w-full font-body flex-1"
          />
        </div>
        {/* card number and cvv */}
        <div className="flex items-center flex-col md:flex-row gap-4 my-3">
          <div className="flex-2 w-full">
            <input
              type="text"
              placeholder="Card Number"
              className="border rounded-md text-black p-4 w-full font-body flex-1"
            />
          </div>
          <div className="flex-3 w-full">
            <input
              type="text"
              placeholder="CVV"
              className="border rounded-md text-black p-4 w-full font-body flex-1"
            />
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-4 my-3">
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="Exp Month"
              className="border rounded-md text-black p-4 w-full font-body flex-1"
            />
          </div>
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="Exp Year"
              className="border rounded-md text-black p-4 w-full font-body flex-1"
            />
          </div>
        </div>
        <div className="flex items-center justify-center my-4">
          <button className="font-bold font-head p-4 bg-blue-400 text-xl text-white">
            Place My Order
          </button>
        </div>
      </div>
    </div>
    {/* T&C */}
    <p className="font-body leading-loose text-xs">
      By clicking the “Place My Order” button above, you are agreeing to our
      Terms of Use and Privacy Policy and to receive our promotional emails.
      Click here to view Disclosures and Disclaimers. Your subscription to Fry's
      Investment Report will automatically renew on an annual basis after your
      initial term until you cancel. Upon renewal for your Fry's Investment
      Report subscription, we will charge you $49.00 (plus any applicable taxes)
      to your payment method on file. This subscription has a 90-Day refund
      policy. You may cancel your subscription at any time by clicking here or
      by contacting our Customer Service team at 800-219-8592 or by emailing
      feedback@investorplace.com. To cancel without incurring such renewal fee,
      you must do so one day prior to the renewal date. You will receive an
      email reminder before your subscription is automatically renewed.
    </p>
  </form>
);

export default Form;
