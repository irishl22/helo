create table users (
    id SERIAL PRIMARY KEY,
    username varchar(20),
    password varchar(20),
    profile_pic text
)

create table posts (
    id SERIAL PRIMARY KEY,
    title varchar(45),
    img text,
    content text,
    author_id int 
);

ALTER TABLE posts ADD CONSTRAINT display_fk0 FOREIGN KEY (author_id) REFERENCES users(id);
