# vredu
Project for UGA HAcks 5!

## Backend

- Generate unique codes
- Associate codes with proper environments 
- Retire unused codes

## Frontend 

### Teacher

- Display all environemnts
- generate codes
- close codes when done with them
	- Button
	- On closing the page, [this stackoverflow thread should help](https://stackoverflow.com/questions/7080269/javascript-before-leaving-the-page/7080331)

### Student

- Allow student to enter code
- Load correct environemnt 

### api

- `/code`
	- gives generated code as plain text
	- accepts POST
	- needs following parameters
		- environment: the ID of the selected environment
- `/envlist`
	- gives list of environments as json
	- accepts POST
	- **note: `path` and `imgPath` should be prefixed with `/envs/` and `/img/` respectively**
- `/app/[code]`
	- gets the environment associated with the given code
		- if the code is invalid, gives the error page
	- accepts POST
	- needs the following parameters
		- code: the code entered by the student

### Database

#### envs
```
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| envId       | int(11)      | NO   | PRI | NULL    | auto_increment |
| name        | varchar(32)  | NO   |     | NULL    |                |
| path        | varchar(128) | NO   |     | NULL    |                |
| description | varchar(225) | YES  |     | NULL    |                |
| imgPath     | varchar(128) | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
```

#### codes

```
+-------+------------+------+-----+---------+-------+
| Field | Type       | Null | Key | Default | Extra |
+-------+------------+------+-----+---------+-------+
| code  | varchar(6) | NO   | PRI | NULL    |       |
| envId | int(11)    | YES  | MUL | NULL    |       |
+-------+------------+------+-----+---------+-------+
```