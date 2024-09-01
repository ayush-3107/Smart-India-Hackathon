import json
import random
import os

def add_fields_to_json(json_file):
    if not os.path.exists(json_file):
        print(f"Error: The file '{json_file}' does not exist.")
        return

    try:
        with open(json_file, 'r') as file:
            data = json.load(file)
        print("File read successfully.")
    except Exception as e:
        print(f"Error reading the file: {e}")
        return

    def add_fields(entry):
        entry['distance'] = random.randint(50, 100)  # Distance in km
        entry['shift'] = random.choice(['morning', 'evening', 'afternoon'])
        entry['expectedtime'] = random.randint(30, 200)  # Expected time in minutes

    for entry in data:
        add_fields(entry)

    try:
        with open(json_file, 'w') as file:
            json.dump(data, file, indent=4)
        print(f"File updated and saved as '{json_file}'.")
    except Exception as e:
        print(f"Error writing to the file: {e}")

# Example usage
add_fields_to_json('/Users/apple/SIH/Smart-India-Hackathon/Backend/AI_model/crew_dashboard.json')
