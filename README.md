## QURAN NEXT API

## Setup Env Variables
- Create a `.env` file
- Copy the variables in `.env.example` to the `.env` file
- Add the actual values to the variables

### How to use the API
- To use No Cache, you can do it in two ways

- Pass in headers

```bash
    Cache-Control: no-cache
```

- Pass in query params

```bash
    /chapters?cache_control=no-cache
```

### Logs
- Logs are printed on console and also logged to a log file in the root directory `logs/app.log`.