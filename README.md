# GitHub Monorepo System Project Setup

Welcome to the GitHub Monorepo System project! This guide is designed to help you set up the project on your local machine seamlessly.

## Prerequisites

Before you begin, ensure that you have the following installed:

- Git
- NodeJS
- Docker
- Docker Compose

## Installation

### 1. Clone the Repository
First, you need to clone the repository from GitHub.
`bash
git clone https://github.com/mssnzz/GithubMono.git
`

### 2. Navigate to the Project Directory
Once the repository is cloned, navigate into the project directory.
`bash
cd GithubMono
`

### 3. Install Dependencies
With a monorepo structure, dependencies might be managed at the root level as well as in individual packages. Ensure you install all necessary dependencies.
`bash
npm install
`

### 4. Set Up Docker
Build the Docker images for both development and production.
For development:
\```bash
docker-compose -f docker-compose.dev.yml up --build
\```
For production:
`bash
docker-compose -f docker-compose.prod.yml up --build
`

## Running the Project

### Development

To run the project in development mode, use the following command:
`bash
npm run dev
`

### Testing

For running tests, especially for the backend, execute:
`bash
npm run test:backend
`

