import { disclosures } from "@/lib/disclosures";

const Disclosures = () => {
  return (
    <div className="my-3">
      {/* header */}
      <div className="text-center space-y-4">
        <h2 className="font-head text-3xl md:text-5xl font-bold">
          PART 1: DISCLOSURES ABOUT OUR BUSINESS
        </h2>
        <p className="font-body text-xl">
          The first and most important rule of investing is, in our view, the
          most obvious:
        </p>
      </div>
      {/* disclosures */}
      <div>
        {disclosures.map((disclosure) => (
          <SingleDisclosure
            title={disclosure.title}
            body={disclosure.body}
            key={disclosure.title}
          />
        ))}
      </div>
    </div>
  );
};

const SingleDisclosure = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className="my-3 p-5">
      <h4 className="font-head text-center text-2xl font-bold">{title}</h4>
      <p className="font-body leading-loose">{body}</p>
    </div>
  );
};

export default Disclosures;
