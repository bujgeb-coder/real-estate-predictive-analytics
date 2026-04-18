import pandas as pd
import json
from sklearn.linear_model import LinearRegression

# Example dataset
data = pd.read_csv("housing_data.csv")

features = ["current_price", "mortgage_rate", "employment_growth", "supply_index"]
target = "future_price"

X = data[features]
y = data[target]

model = LinearRegression()
model.fit(X, y)

model_data = {
    "intercept": float(model.intercept_),
    "coefficients": {
        feature: float(coef)
        for feature, coef in zip(features, model.coef_)
    }
}

with open("model.json", "w") as f:
    json.dump(model_data, f, indent=2)

print("Model saved to model.json")
