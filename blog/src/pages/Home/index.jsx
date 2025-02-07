import { useEffect, useState } from "react";
import CardBlog from "../../components/cardBlog";
import getData from "../../utils/fetchData.js";
import "./Home.css";
import { Link } from "react-router";

function Home() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    async function fetch() {
      const response = await getData("/api/blogs?populate=*");

      setBlogData(response.data);
    }

    fetch();
  }, []);

  return (
    <section className="cards-container">
      {blogData.length > 0 ? (
        blogData.map((blog) => (
          <Link to={`/blog/${blog.documentId}`} key={blog.id}>
            <CardBlog blogContent={blog} />
          </Link>
        ))
      ) : (
        <h3>Nenhum Blog Disponível</h3>
      )}
    </section>
  );
}

export default Home;
