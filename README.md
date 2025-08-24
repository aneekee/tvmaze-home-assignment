## How to Run

### Option 1: Using Docker

```bash
# 1. Pull the project
git clone https://github.com/aneekee/tvmaze-home-assignment.git
cd tvmaze-home-assignment

# 2. Run with Docker Compose
docker-compose up -d --build

```

- Frontend is available at: http://localhost:80/
- Backend Swagger is available at: http://localhost:4000/api

### Option 2: Manual Setup

```bash
# 1. Pull the project
git clone https://github.com/aneekee/tvmaze-home-assignment.git
cd tvmaze-home-assignment

# 2. Run the setup-env.sh
bash ./setup-env.sh

# or, manually create .env files
cd ./backend
cp ./.env.example ./.env
cd ../frontend
cp ./.env.example ./.env

# 3. Install depndencies in the frontend/ and backend/
cd ./backend
npm i
cd ../frontend
npm i

# 4. Run backend and frontend
cd ./backend
npm run start:dev
cd ../frontend
npm run dev
```

- Frontend is available at: http://localhost:5173/
- Backend Swagger is available at: http://localhost:4000/api
