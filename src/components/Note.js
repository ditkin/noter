import React from 'react'

const Note = ({ notebook, text, title }) => (
    <div
        style={{
            maxWidth: '80%',
            border: '2px solid gray',
            margin: '5px',
            borderRadius: '5px',
        }}
    >
        <div
            style={{
                margin: '5px',
            }}
        >
            <p
                style={{
                    fontSize: '10px',
                    margin: '0 0 0 0',
                }}
            >
                Notebook: {notebook}
            </p>
            <p
                style={{
                    fontWeight: 'bold',
                    margin: '0 0 0 0',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'auto',
                }}
            >
                Title: {title}
            </p>
            <p
                style={{
                    fontSize: '12px',
                    marginTop: '10px',
                    marginLeft: '2px',
                    wordWrap: 'break-word',
                }}
            >
                {text}
            </p>
        </div>
    </div>
)

export default Note
