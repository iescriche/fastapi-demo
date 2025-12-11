import pickle
import numpy as np

# Datos de ejemplo
X = np.array([
    [100, 3, 1],
    [120, 4, 2],
    [80, 2, 1],
    [200, 5, 3]
])

y = np.array([100000, 150000, 80000, 250000])

model = LinearRegression()
model.fit(X, y)

# Guardamos el modelo
with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

print("Modelo guardado como model.pkl")
