# Module 13 - Object-Relational Mapping (ORM) Challenge: E-commerce Back End

## Description
In the swiftly changing landscape of e-commerce, maintaining a competitive stance is crucial. To address this need, this project delivers a resilient backend infrastructure for an e-commerce website using Express.js, a fast, unopinionated web framework, and Sequelize, a promise-based Node.js ORM. With these technologies at the helm, this system ensures streamlined and efficient interactions with a MySQL database. This backend system not only provides a solid foundation for your internet retail company but also boasts capabilities for seamless creation, update, and deletion of data via API POST, PUT, and DELETE routes that has been tested through Insomnia Core.

Tools & Technologies:

Framework: Express.js
Database: MySQL
ORM: Sequelize
API Testing Tool: Insomnia Core

## User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Usage
Ensure you have Node.js, MySQL, and Insomnia Core installed on your machine.
First create the schema from the MySQL shell 'source schema.sql;'.
Seed the database from the terminal 'npm run seed'.
Start the application ---> start the server 'npm start'.
Test your API routes in Insomnia Core

## Resources
Xpert Learning Assistant

## Screenshot of Mock Logo 
<img src="Develop\insomniaRouteTesting1.png"/>
<img src="Develop\module13_Terminal_Screenshot.png"/>

## Link to Video Demo 
Link: https://drive.google.com/file/d/1yxCx9skbW2cywDL6xdkim3EFUv5DMEZ2/view
