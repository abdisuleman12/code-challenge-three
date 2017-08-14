# Code Challenge 3 - SQL Databases

## Overview

Your front-end developer has created all of the client-side code
necessary to view, add, update, and delete treats from the treats
database. In fact, said developer even stubbed out most of your server-side code, as well! The client side code has been minified, so you don't need to change these files at all. Just fork and clone this repo to get started.

## Database Setup

Create a `treats` database and add the following table to your database:

```SQL
CREATE TABLE treats (
	id SERIAL PRIMARY KEY,
	name varchar(255),
	description text,
	pic varchar(255)
);
```
Insert some starter data:

```SQL
INSERT INTO treats (name, description, pic)
VALUES ('Cupcake', 'A delicious cupcake', '/assets/cupcake.jpg'),
('Donuts', 'Mmmm donuts', '/assets/donuts.jpg');
```

## TODO

### Base Mode
Before we can launch, we at least need to be able to view and add new treats. Finish implementing the following routes in the `server/routes/treats.js` file:

* GET call to `/treats` should return an array of treats (e.g. cupcakes, goldfish, etc) and their image URLs

* POST  call to `/treats` expects treat name, description and link to a url image in an object as follows:

```javascript
{
	name: "NAMEGOESHERE",
	description: "DESCRIPTIONGOESHERE",
	pic: "URLGOESHERE"
}
```

*Note:* you should be able to test by entering the following in the Input fields on the page and hitting "Submit":

- name: "Ice Cream"
- description: "Cold, yummy, and  belongs in my tummy!"
- pic: "/assets/icecream.jpg"

### Hard Mode 
In the `toggle modes` section. Click the `Edit` button. Our client will be ecstatic if we can also deliver the ability to update and delete, but consider these "nice-to-haves".

* PUT to `/treats/:id` updates the treat description

_note_: treat info can be found server-side in req.body

### Pro Mode
**If you're feeling fancy and have some time to spare**, try this one

* DELETE to `/treats/:id` deletes a treat
