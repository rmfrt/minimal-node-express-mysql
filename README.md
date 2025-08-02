# Minimal Node.js, Express, and MySQL App

## Description

This is a minimal example application for testing the integration of Node.js, Express, and MySQL. It verifies database connectivity and displays simple data.

## Installation

### Requirements

- Node.js (version ≥ 14.0.0)
- MySQL
- Docker (optional, for containerized execution)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/rmfrt/minimal-node-express-mysql
   cd minimal-node-express-mysql
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and set environment variables:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=rootpassword
   DB_NAME=testdb
   ```

4. Start the application:

   ```bash
   npm start
   ```

## Usage

- Visit `http://localhost:3000` for the main test page.
- Visit `/data` to fetch data from the `table_test` table.

## Docker Deployment

1. Build the Docker image:

   ```bash
   docker build -t node_app .
   ```

2. Run the container:

   ```bash
   docker run -p 3000:3000 --env-file .env node_app
   ```

## Project Structure

- `app.js`: Main application file.
- `.env`: Environment variables.
- `Dockerfile`: Docker image definition.
- `package.json`: Project dependencies and scripts.
