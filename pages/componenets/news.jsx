import { useEffect, useState } from "react";
import Link from "next/link";

const API_NYCKEL = "38240d6d8069b34a52954aac12b5d340fb55e";
//newsdata.io/api/1/news?apikey=$pub_38240d6d8069b34a52954aac12b5d340fb55e&q=pizza

export default function News({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/news?apikey=${API_NYCKEL}&q=${category}`)
      .then((res) => res.json())
      .then((data) => setArticles(data.results));
  }, []);

  return (
    <div>
      {console.log("articles", articles)}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        {articles.map((article) => (
          <div
            className="bg-white p-4 max-w-full rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
            key={article.article_id}
          >
            <Link href={`/article/${article.article_id}`}>
              <h2>{article.title}</h2>
            </Link>
            <img src={article.image_url} alt="" />
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}