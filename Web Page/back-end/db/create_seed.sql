drop table if exists users;
drop table if exists records;
drop table if exists images;


create table users (
    user_id serial primary key,
    auth0 text,
    firstname text,
    lastname text,
    email text
);

create table records (
    record_id serial primary key,
    user_id integer,
    image_id integer,
    record time
);

create table images (
    image_id serial primary key,
    statename text
);