from routes import health
from fastapi import FastAPI

app = FastAPI()

app.include_router(health.router)
