create schema pessoa:


create table pessoa.post(
    id serial primary key,
    nome da pessoa tex not null,
    data nascimento date default now() 
);
