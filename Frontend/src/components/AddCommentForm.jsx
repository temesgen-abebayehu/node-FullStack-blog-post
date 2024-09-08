import axios from "axios";
import React, {useState} from "react";


const AddCommentForm = (({articleName, onArticleUpdated}) => {
    const [name, setName] = useState("");
    const [commentText, setCommentText] = useState("");

    const addComment = async ()=>{
        const responce = await axios.post(`/api/article/${articleName}`, {
            postedBy: name,
            text: commentText
        });
        const updatedArticle = responce.data;
        onArticleUpdated(updatedArticle);
    }

    return <div className="add-commont-form">

    </div>
});