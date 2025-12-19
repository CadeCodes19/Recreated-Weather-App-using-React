import csv
import json

cities = []

with open("worldcities.csv", newline="", encoding="utf-8") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        cities.append(row["city"])  # change "city" if the column name is different

with open("cities.json", "w", encoding="utf-8") as f:
    json.dump(cities, f, ensure_ascii=False, indent=2)

print(f"{len(cities)} cities saved to cities.json")
