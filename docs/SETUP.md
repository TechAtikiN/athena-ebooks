# Setup Guide

#### Below are the steps to setup the project on your local machine.

<details>
<summary>Prerequisites</summary>

> Make sure you have the following installed on your machine before proceeding with the installation.
<br>

### Node.js

- [ ] Node.js (v16 or later)
  - [Download from here](https://nodejs.org/en/download/)

### MongoDB Atlas Account

- [ ] MongoDB Atlas Account
  - [Create an account](https://www.mongodb.com/cloud/atlas)
- [ ] Set Up a New Database Cluster
- [ ] Get the DB Connection String

### UploadThing Account

- [ ] Create a new account on UploadThing
  - [Create an account](https://uploadthing.com/)
- [ ] Create a Project 
- [ ] Get API Key/secret

</details>

---
<details>
<summary>Env variables</summary>

> Make sure you have required environment variables set up before starting the server.
<br>
### Google OAuth

- [ ] **GOOGLE_CLIENT_ID** and **GOOGLE_CLIENT_SECRET**
  - [Create a new project](https://console.developers.google.com/)
  - [Retrieve Client ID and Client Secret](https://console.developers.google.com/apis/credentials)

### Nodemialer

- [ ] Nodemailer Email and Password
  - **SMTP_EMAIL** - Your email address
  - **SMTP_PASSWORD** - From your google account, create an app password for nodemailer

### Others

- [ ] **DATABASE_URL** - MongoDB Connection String
- [ ] **UPLOADTHING_SECRET** - UploadThing API Secret
- [ ] **UPLOADTHING_APP_ID** - UploadThing App ID
- [ ] **NEXTAUTH_SECRET** - A random string for NextAuth
- [ ] **BASE_API_URL** - The base URL of the API
> Example: `http://localhost:3000/api/graphql`

</details>

---

## Installation

1. Clone the repository
> Alternatively, you can download the repository as a zip file

```bash
git clone https://github.com/TechAtikiN/athena-ebooks
```

1. Install dependencies

> **Note**: This project uses `yarn` as the package manager. 

```bash
cd athena-ebooks
yarn 
```

1. Duplicate the information from the .env.example file into a new file named .env in the root directory and add the required values.

2. Start the server

```bash
yarn dev
```

> The server will start at `http://localhost:3000`

## API Documentation

Apollo Server provides a GraphQL playground for testing the API.
It can be accessed at `http://localhost:3000/api/graphql`

## Database Schema
The database schema documentation can be found in the [SCHEMA.md](./SCHEMA.md) file.