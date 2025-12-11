from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class House(BaseModel):
    size: float
    rooms: int
    bathrooms: int

@app.post("/predict")
def predict(data: House):
    # EJEMPLO → fórmula simple
    prediction = data.size * 1200 + data.rooms * 5000 + data.bathrooms * 8000
    return {"prediction": prediction}
