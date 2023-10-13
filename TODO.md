# Kendama Roundup

#### TODO

- [ ] build front end for the api
- [ ] combined all Kendamas from all online stores into one route
- [ ] combined all products from one store into one route
- [ ] find way to change locale-selector using puppeteer so prices are always in USD
- [ ] when new route is setup, make it automatically create data file for route data.
- [ ] fixed glitch with photo link in scraping krom store

#### In progress...

- [ ] add more stores like Sweets, ~~Krom~~, Occult, Terra, Kendama USA, Cereal

#### Completed

- [x] Added krom miner but only for kendamas so far

- [x] Implemented route for sol kendamas including dynamically scraping multiple pages
- [x] Made it so the miner only makes a request to the url if the date is changed. I will probably realized that the way I did it was horribly buggy.
- [x] Improve limiting of requests to API to keep bandwidth low for webShare. Still a very hacky solution but currently working.
