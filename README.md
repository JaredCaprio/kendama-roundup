## Kendama Roundup API Documentation

Welcome to the Kendama Roundup API documentation. This API allows you to retrieve product data from many different Kendama online stores, including details about kendama products, apparel, and accessories. The API leverages Puppeteer, a headless browser automation library, to scrape product data from the website.

### Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Examples](#examples)
- [License](#license)

### Getting Started

To get started with the Kendama Roundup API, follow the installation steps provided below. This API allows you to fetch product data from many different Kendama websites, including product names, photos, and prices.

### Installation

Clone the repository to your local machine:

```
git clone https://github.com/JaredCaprio/lotus-kendamas-api.git
```

Install the required dependencies using npm:

```
cd kendama-roundup
npm install
```

Start the API server:

```
npm start
```

The API server should now be running on http://localhost:8080.

### Usage

Kendama Roundup API provides endpoints to fetch product data for different categories: kendamas, apparel, and accessories. The API internally uses Puppeteer to scrape the product data from various online kendama stores.

The API currently only includes product information from [Sol Kendamas](https://www.solkendamas.com). and [Lotus Kendamas](https://lotuskendamas.com/) but I have plans to add more in the future.

### Endpoints

##### Lotus

    GET lotus/kendamas: Fetches product data from lotus for kendamas.
    GET lotus/apparel: Fetches product data from lotus for apparel.
    GET lotus/accessories: Fetches product data from lotus for accessories.

##### Sol

    GET sol/kendamas: Fetches product data from sol for kendamas.
    GET sol/apparel: Fetches product data from sol for apparel.
    GET sol/accessories: Fetches product data from sol for accessories.

### Examples

Here are some example API requests using curl:

Fetch kendama product data:

```
curl http://localhost:8080/sol/kendamas
```

Fetch apparel product data:

```
curl http://localhost:8080/lotus/apparel
```

Fetch accessories product data:

```
curl http://localhost:8080/lotus/accessories
```

### License

This project is licensed under the MIT License. See the LICENSE file for more details.
