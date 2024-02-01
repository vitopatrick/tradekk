import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

const productsOne = [
  {
    title: "Trial",
    about: "Try 1 month of MarketSmith for only $29.95. Cancel any time.",
    price: "$29.25",
    other: "For the first month",
    subHeader: "Billed at $149.95/month after the trial period ends.",
  },
  {
    title: "Monthly",
    about: "Get unlimited access to MarketSmith for one low monthly price.",
    price: "$149.95/month",
    other: "",
    subHeader: "",
  },
  {
    title: "Annual",
    about:
      "Save over 16% off the monthly price when you sign up for an annual membership!",
    price: "$1,499/year",
    other: "Save $300 annually",
    subHeader: "",
  },
];

const productsTwo = [
  {
    header: "Free App for Smartphones and Tablets",
    subHeader: "Access MarketSmith on the go with our free app.",
  },
  {
    header: "Free Product Coaching",
    subHeader: "Get personalized coaching to enhance your trading strategies.",
  },
  {
    header: "Free Weekly Webinars for Members",
    subHeader: "Join our weekly webinars to stay updated on market trends.",
  },
  {
    header: "Free Welcome Kit and Quarterly Stock Guide",
    subHeader: "Receive a welcome kit and a quarterly stock guide at no cost.",
  },
];

const SubscribePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 to-orange-500">
      <Navbar />
      <div className="text-center space-y-3">
        <h4 className=" font-head text-2xl font-bold">
          Here to guide you into our best-selling product that best suits your
          startup requirements
        </h4>
        <p className="font-body">
          Our New Year Trial period ends 15/02/2024. Afterwards
        </p>
        <p className="font-body">
          Here’s our Subscription Plan to enable you to join our trading
          service, which we offer other services and product varieties to guide
          you through the investment journey for the year
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:w-[80%] mx-auto my-6">
        {productsOne.map((product) => (
          <div
            key={product.title}
            className="bg-white p-4 h-[500px] flex flex-col justify-evenly rounded"
          >
            <h4 className="font-head font-bold text-2xl">{product.title}</h4>

            <p className="font-body">{product.about}</p>
            <div>
              <p className="font-head font-bold text-2xl">{product.price}</p>
              <p className="font-body">{product.other}</p>
            </div>

            <div className="space-y-3">
              <Link
                href={{
                  pathname: "/pay",
                  query: { title: product.title, price: product.price },
                }}
                className="bg-orange-500 p-4 rounded block text-center text-black font-head font-bold"
              >
                Subscribe
              </Link>
              <p className="font-body">{product.subHeader}</p>
            </div>
          </div>
        ))}
      </div>
      <h4 className="text-center font-head text-2xl font-bold">
        Additional Features for MarketSmith Members
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-4 p-4 gap-4">
        {productsTwo.map((product) => (
          <Link
            href="/contact"
            key={product.header}
            className="bg-white p-4 space-y-4 flex flex-col justify-evenly rounded text-center"
          >
            <div>
              <img
                src="/logo.png"
                alt={`${product.header.substring(0, 14)}...`}
              />
            </div>
            <h4 className="font-head font-bold text-2xl">{product.header}</h4>
            <h4 className="font-body font-bold text-xl">{product.subHeader}</h4>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SubscribePage;
