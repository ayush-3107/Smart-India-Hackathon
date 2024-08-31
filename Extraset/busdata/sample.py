import random
import json
from faker import Faker
from datetime import datetime, timedelta

# Initialize Faker object for generating random names
faker = Faker('en_IN')

# List of possible bus stops in Delhi
bus_stops = [
    'Kashmere Gate', 'Rajiv Chowk', 'Sarojini Nagar', 'AIIMS', 'Nehru Place',
    'Hauz Khas', 'Saket', 'Lajpat Nagar', 'Karol Bagh', 'Janakpuri'
]

# Function to generate random ID
def generate_id():
    return f'DTC{random.randint(100,999)}{faker.lexify("???").upper()}'

# Function to generate a bus number
def generate_bus_number():
    return f'DL{random.randint(10, 99)} S {random.randint(1000, 9999)}'

# Function to generate random route short number
def generate_route_short_number():
    return random.randint(100, 999)

# Function to generate random start time and end time (end time 2 to 5 hours after start time)
def generate_times():
    start_time = faker.date_time_this_year().time()
    hours_added = random.randint(2, 5)
    end_time = (datetime.combine(datetime.today(), start_time) + timedelta(hours=hours_added)).time()
    return start_time.strftime('%H:%M:%S'), end_time.strftime('%H:%M:%S')

# Generate 500 unique bus numbers and create 2 entries for each (one driver and one conductor)
bus_data = []
for _ in range(600):
    bus_num = generate_bus_number()
    route_short_num = generate_route_short_number()
    starting_point = random.choice(bus_stops)
    start_time, end_time = generate_times()

    # Generate entry for Driver
    name_driver = faker.name()
    id_driver = generate_id()
    bus_data.append({
        'Name': name_driver,
        'ID': id_driver,
        'RouteShortNum': route_short_num,
        'BusNum': bus_num,
        'CrewRole': 'Driver',
        'StartingPoint': starting_point,
        'StartTime': start_time,
        'EndTime': end_time
    })

    # Generate entry for Conductor
    name_conductor = faker.name()
    id_conductor = generate_id()
    bus_data.append({
        'Name': name_conductor,
        'ID': id_conductor,
        'RouteShortNum': route_short_num,
        'BusNum': bus_num,
        'CrewRole': 'Conductor',
        'StartingPoint': starting_point,
        'StartTime': start_time,
        'EndTime': end_time
    })

# Save the data to a JSON file
with open('bus_service_data.json', 'w') as json_file:
    json.dump(bus_data, json_file, indent=4)

print("Data generation complete! The file 'bus_service_data.json' has been created.")
