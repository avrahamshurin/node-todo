CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    creation_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_completed BOOLEAN DEFAULT FALSE
);

INSERT INTO todos (title, content) 
VALUES('title1', 'content1');

INSERT INTO todos (title, content) 
VALUES('title2', 'content2');