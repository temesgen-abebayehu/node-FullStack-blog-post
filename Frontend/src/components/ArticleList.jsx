import { Link } from "react-router-dom";


const ArticleList = ({articles}) => {
    return (
        <div>
            {articles.map(article => (
                <Link key={article.name} className="article-list-item" to={`/article/${article.name}`}>
                    <h2>{article.title}</h2>
                    <p>{article.content[0].substring(0,150)}....</p>
                </Link>
            ))}
        </div>
    );
}

export default ArticleList;