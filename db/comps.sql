-- many to many because many teachers and many students

CREATE TABLE display (
	display_id SERIAL PRIMARY KEY,
	student_id INT,
	teacher_id INT
);

CREATE TABLE teacher (
	teacher_id SERIAL PRIMARY KEY,
	teacher_name varchar(100) NOT NULL
);

CREATE TABLE student (
	student_id SERIAL PRIMARY KEY,
	student_name varchar(80) NOT NULL
);

ALTER TABLE display ADD CONSTRAINT display_fk0 FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id);

ALTER TABLE display ADD CONSTRAINT display_fk1 FOREIGN KEY (student_id) REFERENCES student(student_id);


-- one to many because one user to many posts

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

ALTER TABLE posts ADD CONSTRAINT posts_fk0 FOREIGN KEY (author_id) REFERENCES users(id);

-- one to one because one passport to one person

create table passport (
    pass_id serial primary key,
    date_issued date
)

create table person (
    person_id serial primary key,
    person_name varchar(100),
    pass_id int
)

ALTER TABLE person ADD CONSTRAINT person_fk0 FOREIGN KEY (pass_id) REFERENCES passport(pass_id);


--- sub query

SELECT [column names] 
FROM [table] 
WHERE column_id IN ( SELECT column_id FROM [table2] WHERE [Condition] );
