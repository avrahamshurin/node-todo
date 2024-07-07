CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users (first_name, last_name, email, password) 
VALUES('user1_fn', 'user1_ln', 'user1@email.com', '$2b$10$Qcv/Zuz6L9GdgY1eHXoYleq4yApIhq213yQcLUOfqbVKcXM8T/hnC');

INSERT INTO users (first_name, last_name, email, password) 
VALUES('user2_fn', 'user2_ln', 'user2@email.com', '$2b$10$kXJUU8epu7E/3hYdf8DlyuoKV955eIqORxa1GQJr9bLOA0JQJ5m2e');

CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    creation_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_completed BOOLEAN DEFAULT FALSE,
    user_id INTEGER,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO todos (title, content, user_id) 
VALUES('title1', 'content1', 1);

INSERT INTO todos (title, content, user_id) 
VALUES('title2', 'content2', 1);

INSERT INTO todos (title, content, user_id) 
VALUES('title2', 'content2', 2);