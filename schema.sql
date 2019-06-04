create table users (
    id serial primary key,
    first_name varchar(100),
    last_name varchar(100),
    username varchar(200)
);

create table businesses (
    id serial primary key,
    name varchar(200),
    address varchar(200),
    phone varchar(20),
    type varchar(200)
);

create table reviews (
    id serial primary key,
    score integer,
    content text,
    business_id integer references businesses(id),
    user_id integer references users(id)
);

