create table shelfie (
    product_id serial primary key,
    product_name varchar(50) not null,
    product_price numeric not null,
    image_url text not null
);