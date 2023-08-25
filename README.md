## Lotus Kendamas API Documentation

Welcome to the Lotus Kendamas API documentation. This API allows you to retrieve product data from the Lotus Kendamas online store, including details about kendama products, apparel, and accessories. The API leverages Puppeteer, a headless browser automation library, to scrape product data from the website.

### Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Examples](#examples)
- [License](#license)

### Getting Started

To get started with the Lotus Kendamas API, follow the installation steps provided below. This API allows you to fetch product data from the Lotus Kendamas website, including product names, photos, and prices.

### Installation

Clone the repository to your local machine:

```
git clone https://github.com/JaredCaprio/lotus-kendamas-api.git
```

Install the required dependencies using npm:

```
cd lotus-kendamas-api
npm install
```

Start the API server:

```
npm start
```

The API server should now be running on http://localhost:8080.

### Usage

The Lotus Kendamas API provides endpoints to fetch product data for different categories: kendamas, apparel, and accessories. The API internally uses Puppeteer to scrape the product data from the Lotus Kendamas website.

### Endpoints

    GET /kendamas: Fetches product data for kendamas.
    GET /apparel: Fetches product data for apparel.
    GET /accessories: Fetches product data for accessories.

### Examples

Here are some example API requests using curl:

Fetch kendama product data:

```
curl http://localhost:8080/kendamas
```

Fetch apparel product data:

```
curl http://localhost:8080/apparel
```

Fetch accessories product data:

```
curl http://localhost:8080/accessories
```

### License

This project is licensed under the MIT License. See the LICENSE file for more details.
