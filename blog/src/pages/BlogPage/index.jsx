import { useParams } from "react-router";
import Markdown from "react-markdown";
import "./BlogPage.css";
import { useEffect, useState } from "react";
import getData from "../../utils/fetchData.js";

function BlogPage() {
  const { documentId } = useParams();
  const [blogContentData, setblogContentData] = useState({});

  useEffect(() => {
    async function fetch() {
      const response = await getData(`/api/blogs/${documentId}`);

      setblogContentData(response.data);
    }

    fetch();
  }, []);

  return (
    <section className="blog-content-container">
      <Markdown>{blogContentData.content}</Markdown>
    </section>
  );
}

export default BlogPage;
