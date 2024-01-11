import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
const client = createClient({
  space: "8jtbzgo3lyp6",
  accessToken: "-Qs6oAYublwoj8zau6L1SBaRXHVVgaTntwsrPnozrWo  ",
});

const getEntries = async () => {
  const entries = await client.getEntries({ content_type: "blog" });

  return entries;
};

async function TradingDetails() {
  const blogEntries = await getEntries();

  const options = {
    renderNode: {
      "embedded-asset-block": (node: any) => {
        const { title, file } = node.data.target.fields;
        const imageUrl = file.url.startsWith("//")
          ? `https:${file.url}`
          : file.url;
        const altText = title || "Image";

        return (
          <div className="relative w-full flex items-center justify-center">
            <Image
              src={imageUrl}
              alt={altText}
              width={file.details.image.width / 3}
              height={file.details.image.height / 3}
              className="rounded-md"
              objectFit="cover"
            />
          </div>
        );
      },
    },
  };

  return (
    <div>
      {/* header */}
      <div
        style={{
          backgroundImage: `url('https://s3.amazonaws.com/marketingassets.cloudsna.com/prod/images/tradestops/2301TDP-New-Millionaires/bg.png')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {/* container */}
        <div className="py-4 mx-auto md:w-[70%] text-center font-head font-bold text-white space-y-5">
          <h3>Brought to You By TradeSmith…</h3>
          <h1 className="text-yellow-500 text-5xl font-extrabold leading-normal">
            The <h4>10,000 New Millionaires</h4> Project
          </h1>
          <p className="text-2xl font-extrabold">
            "This is the largest and most important undertaking in our firm's
            history. And I want you to be a part of it…"
          </p>
          <p className="text-2xl">– TradeSmith CEO, Keith Kaplan</p>
        </div>
      </div>
      {/* body */}
      <main className="md:w-[70%] mx-auto p-4 space-y-5 [&>p]:font-body [&>p]:text-xl [&>h2]:font-head [&>h2]:text-4xl [&>h2]:text-center">
        {documentToReactComponents(
          blogEntries.items[0].fields.article as any,
          options
        )}
      </main>
      <Footer />
    </div>
  );
}

export default TradingDetails;
