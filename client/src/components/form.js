import { useState } from "react";

const Form = (props) => {
    const [posts, setPosts] = useState({
        Date: "",
        Title: "",
        Content: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleDateChange = (event) => {
        const date = event.target.value;
        setPosts((posts) => ({ ...posts, date }));

    }

    const handleTitleChange = (event) => {
        const title = event.target.value;
        setPosts((post) => ({ ...post, title }));

    }

    const handleContentChange = (event) => {
        const content = event.target.value;
        setPosts((post) => ({ ...post, content }));

    }



    //A function to handle the post request
    const postBlogPost = (newPost) => {
        return fetch('http://localhost:4002/form', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(newPost)
      }).then((response) => {
          return response.json()
      }).then((data) => {
        console.log("From the post ", data);
        props.addPost(data);
      
    });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postBlogPost(posts);
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Date</label>
                <input
                    type="Date"
                    id="add-date"
                    placeholder=""
                    required
                    value={posts.date}
                    onChange={handleDateChange}

                />
                <label>Title</label>
                <input
                    type="text"
                    id="add-title"
                    placeholder=""
                    required
                    value={posts.title}
                    onChange={handleTitleChange}
                />
                <label>Content</label>
                <input
                    type="text"
                    id="add-content"
                    placeholder=""
                    required
                    value={posts.content}
                    onChange={handleContentChange}
                />
            </fieldset>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;