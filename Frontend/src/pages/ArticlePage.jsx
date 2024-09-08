import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import articles from "./article-content";


const ArticlePage = () => {
    const {articleId} = useParams();
    const article = articles.find((article) => articleId === article.name);

    if(!article){
        return <NotFoundPage />;
    }

    return (
        <div>
            <h2>{article.title}</h2>
            {article.content.map((paragraph, index) =>(
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
};

export default ArticlePage;