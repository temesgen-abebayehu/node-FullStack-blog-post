import axios from "axios";
import React, {useState} from "react";


const AddCommentForm = (({articleName, onArticleUpdated}) => {
    const [name, setName] = useState("");
    const [commentText, setCommentText] = useState("");

    const addComment = async ()=>{
        const responce = await axios.post(`/api/article/${articleName}/comments`, {
            postedBy: name,
            text: commentText,
        });
        const updatedArticle = responce.data;
        onArticleUpdated(updatedArticle);
        setName("");
        setCommentText("");
    };

    return <div id="add-comment-form">
        <h3>Add Comment:</h3>
        <label>
            Name:
            <input 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </label>
        <label>
            Comment:
            <textarea 
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                rows="4"
                cols="50"
            />
        </label>
        <button onClick={addComment}>Add Comment</button>
    </div>
});


export default AddCommentForm;