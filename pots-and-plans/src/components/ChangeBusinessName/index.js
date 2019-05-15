import React from 'react';
import "./style.css";

function ChangeBusinessName(props) {
    
    return (
        <div className="MarkdownEditor">
        <h3>Would you like to change your business name?</h3>
        <textarea
            id="markdown-content"
            onChange={props.handleNameChange}
            defaultValue={props.value}
            placeholder="New business name"
        />
        </div>
    );
};

export default ChangeBusinessName;