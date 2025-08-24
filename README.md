## How to run

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

Frontend is on the http://localhost:5173/

Backend swagger is on the http://localhost:4000/api
