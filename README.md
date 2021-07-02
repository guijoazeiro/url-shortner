# Node.js URL Shortener API

This is an URL shortener service.

## Run Locally

Clone the project

```bash
  git clone https://github.com/guijoazeiro/url-shortner
```


Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## API Reference

### Shorten URL

```http
  POST /api/short
```

| Field | Type   | Description  |
| :---- | :----- | :----------- |
| Body  | `json` | Original Url |

**Example:**

```http
POST http://localhost:3000/api/short
Content-Type: application/json

{
    "origUrl": "https://www.google.com/"
}

```

### Get item

```http
  GET /:id
```

| Parameter | Type     | Description     |
| :-------- | :------- | :-------------- |
| `id`      | `string` | Unique URL Code |

**Example:**

```http
GET http://localhost:3000/ujC4biHI7
```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

| Variable    | Description             |
| :---------- | :---------------------- |
| `MONGO_URI` | MongoDB URI             |
| `BASE`      | Base URL for Shortening |