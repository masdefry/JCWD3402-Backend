select * from country as co
join city as ci on ci.country_id = co.country_id 
order by co.country;

select country, city  from country as co
join city as ci on ci.country_id = co.country_id 
order by co.country;

select * from customer as c
left join rental r on r.customer_id = c.customer_id;




-- AGG FUNCTION: COUNT (Menghitung Total)
select count(*) as total_film from film;

select sum(amount) from payment;

select max(amount) from payment;

select count(city) as total_city, country from city 
join country on country.country_id = city.country_id
group by country.country;

select * from actor;
select * from film;
select * from film_actor;
select count(film) as total_film, actor from actor  
join film_actor on actor.actor_id = film_actor.actor_id 
join film on film_actor.film_id = film.film_id
group by actor;