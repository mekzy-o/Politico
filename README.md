# Politico

Politico is a platform that enables citizens give their mandate to politicians running for different government offices while building trust in the process through transparency.

[![Build Status](https://travis-ci.org/mekzy-o/Politico.svg?branch=develop)](https://travis-ci.org/mekzy-o/Politico)
[![Maintainability](https://api.codeclimate.com/v1/badges/61add9889ea60f44602c/maintainability)](https://codeclimate.com/github/mekzy-o/Politico/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/mekzy-o/Politico/badge.svg?branch=develop)](https://coveralls.io/github/mekzy-o/Politico?branch=develop)

## Table of Contents
- [Application Features](#application-features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Running the tests](#running-the-tests)
- [Built With](#built-with)
- [Contributing to the Project](#contributing-to-the-project)
- [FAQ](#faq)
- [Application Limitations](#application-limitations)
- [License](#license)
- [Credits](#credits)


## Application features
* Users can register on Politico
* Users can log into Politico
* Users can view all political parties
* Users can view all Candidates contesting
* Users can express interest as politicians
* Admin can view political parties
* Admin can delete political parties
* Admin can edit political parties
* Admin can reject or accept candidates

## API Routes

<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>
<tr><td>POST</td> <td>api/v1/auth/signup</td>  <td>Registers users to politico</td></tr>

<tr><td>POST</td> <td>api/v1/auth/login</td>  <td>Allows Users to sign in</td></tr>

<tr><td>POST</td> <td>api/v1/parties</td> <td>Create or Adds new party to existing parties</td></tr>

<tr><td>GET</td> <td>api/v1/parties</td> <td>Get all existing parties</td></tr>

<tr><td>GET</td> <td>api/v1/parties/:id</td> <td>Get a specific party</td></tr>

<tr><td>PATCH</td> <td>api/v1/parties/:id</td> <td>Modify name of a party<td></tr>

<tr><td>GET</td> <td>api/v1/offices</td> <td>Get all existing offices<td></tr>

<tr><td>GET</td> <td>api/v1/offices/:id</td> <td>Get a specific existing offices</td></tr>

<tr><td>POST</td> <td>api/v1/offices</td> <td>Creates ar Add new office to existing offices</td></tr>
</table>


### Prerequisites
* Install NodeJs and Postgresql locally
* The app returns data in JSON format and require a client device that can parse JSON.

## Getting Started
Follow the steps below to get the app running locally:
```
# Clone the repository
>$ git clone https://github.com/mekzy-o/Politico

# Change directory into it
>$ cd Politico

# Install all dependencies
> npm install


# Start the application in development mode
> $ npm run start

# Open running application on browser
> http:localhost:5000/


```

## API Hosting
Access API documentation through this link [Here](https://mekzy-politico.herokuapp.com/)

* Run the test with the command  
`> $ npm run test`
## Built with

HTML, CSS  
Node.js  
Express  
postgreSQL  

## Contributing to the Project
Contributions are welcome and appreciated. To contribute

- Fork this repository or clone the repository with the command  
`$ git clone https://github.com/mekzy-o/Politico`
- Change directory into the folder with the command  
`cd Politico`
- Create your feature branch and make your contributions to your local copy of the project
- Raise a pull Request against the development branch describing what your feature does and how it can be tested

## FAQ
#### Is this an Open-Source Application?
    Yes it is, and contributing to the development of this
    application is acceptable and by raising a pull request
    

#### Who can contribute?
    Anyone!. This application is open to all those who want to contribute to open-source development and are willing to follow the set standards for contributing.
    

#### What format is the API response in?
    The API response is in JSON format

## Application limitations
* The application will run on a single database and might impact the speed of response
* Users cannot register or login with their social accounts at the moment
## Credits
* StackOverflow
* Reddit
* Andela
* Google