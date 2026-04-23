# Experiment 20: Implement CI/CD Pipeline for Application Deployment

This folder contains the Docker and documentation files added for Experiment 20.

## Purpose

Experiment 20 extends the existing `Testing` module by adding Docker-based containerization and a CI/CD workflow with GitHub Actions.

## Files In This Folder

- `backend.Dockerfile` builds the Flask backend by using `Testing/Backend`
- `frontend.Dockerfile` builds the React frontend by using `Testing/Frontend`
- `README.md` explains the Docker and GitHub Actions steps for this experiment
- `Screenshots/` stores the proof screenshots collected during execution

## Project Modules Used

- `Testing/Backend` contains the Flask backend, routes, and pytest tests
- `Testing/Frontend` contains the React frontend and Vitest tests
- `.github/workflows/ci.yml` contains the GitHub Actions CI/CD pipeline

## Backend Docker Commands

```powershell
cd D:\Theory\FS1\FSD-2
docker build -f Exp20/backend.Dockerfile -t testing-backend .
docker rm -f testing-backend-container
docker run -d --name testing-backend-container -p 5000:5000 testing-backend
docker ps
Invoke-RestMethod http://127.0.0.1:5000/
```

Expected backend response:

```json
{"message":"Backend Server is running"}
```

## Frontend Docker Commands

```powershell
cd D:\Theory\FS1\FSD-2
docker build -f Exp20/frontend.Dockerfile -t testing-frontend .
docker rm -f testing-frontend-container
docker run -d --name testing-frontend-container -p 4173:4173 testing-frontend
docker ps
```

Verify frontend in the browser:

```text
http://127.0.0.1:4173/
```

## GitHub Actions Workflow

The active workflow is stored at `.github/workflows/ci.yml` because GitHub only executes workflows from that location.

### Pipeline Stages

1. `backend-test` installs backend dependencies and runs `pytest`
2. `frontend-test` installs frontend dependencies and runs `npm test`
3. `docker-publish` builds the backend image from `Exp20/backend.Dockerfile` and pushes it to `ghcr.io`
4. `deploy-container` pulls the published backend image, starts a container, and verifies the `/` route

## Submission Proof Collected

- backend container running locally
- backend response at `http://127.0.0.1:5000/`
- frontend container running locally
- frontend preview at `http://127.0.0.1:4173/`
- GitHub Actions workflow result
- GitHub Container Registry package page for the backend image
- Docker images and container screenshots

## Expected Outcome

- backend tests pass
- frontend tests pass
- backend Docker image builds successfully
- backend container runs successfully
- frontend Docker image builds successfully
- frontend container runs successfully
- GitHub Actions CI/CD pipeline completes successfully
