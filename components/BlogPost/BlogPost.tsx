import { createClient } from "contentful";

const client = createClient({
  space: "8jtbzgo3lyp6",
  accessToken: "-Qs6oAYublwoj8zau6L1SBaRXHVVgaTntwsrPnozrWo ",
});

const BlogPost = async () => {
  const getBlogEntries = async () => {
    const entries = await client.getEntries({ content_type: "blog" });
    return entries;
  };

  return <div>BlogPost</div>;
};

export default BlogPost;
