import ArticleList from "../components/ArticleList";
import articles from "./article-content";


const ArticlesListPage = () => {
    return (
        <div>
            <h1>Articles</h1>
            <ArticleList articles={articles}/>
        </div>
    );
};

export default ArticlesListPage;