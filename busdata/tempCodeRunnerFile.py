# Extract the key
bus_id = list(bus_data.keys())[0]

# Convert to the desired format
converted_data = {
    "bus_id": bus_id,
    "busNumber": bus_data[bus_id]["bus_no."],
    "routeNumber": bus_data[bus_id]["route_id"],
    "timing": bus_data[bus_id]["bus_shift"],
    "routes": bus_data[bus_id]["stops"]
}

# Print the converted data
print(json.dumps(converted_data, indent=4))