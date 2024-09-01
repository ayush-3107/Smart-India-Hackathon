import json
import os

def update_addresses(json_file, available_tags, output_file):
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

    def update_address(entry, tag_index):
        if 'address' in entry:
            entry['address'] = available_tags[tag_index]
    
    tag_index = 0
    def traverse_and_update(data):
        nonlocal tag_index
        if isinstance(data, dict):
            for key, value in data.items():
                if key == 'address':
                    update_address(data, tag_index)
                    tag_index = (tag_index + 1) % len(available_tags)  # Cycle through available_tags
                else:
                    traverse_and_update(value)
        elif isinstance(data, list):
            for item in data:
                traverse_and_update(item)

    traverse_and_update(data)

    try:
        with open(output_file, 'w') as file:
            json.dump(data, file, indent=4)
        print(f"File updated and saved as '{output_file}'.")
    except Exception as e:
        print(f"Error writing to the file: {e}")

# Example usage
available_tags = [
    "Regal", "New Delhi Railway Station", "Police Station Paharganj", "D.B. Gupta Market", 
    "Sarai Rohilla / Anand Parvat", "Zakhira", "Punjabi Bagh", "Wazirpur Depot", 
    "Pitampura K.D. Block", "Rohini Sector 7/8 X-ing", "Vidya Vihar", "Rohini Sector 15 Pocket-D2", 
    "Rohini Sector 11", "Rohini Sector 16", "Anand Vihar ISBT (Viveka Nand ISBT)", "Delhi Gate", 
    "I.T.O. (AGCR)", "Rainy Well", "Shakar Pur", "Hasan Pur Depot (Patparganj Depot)", 
    "ISBT Maharana Pratap Bus (T)", "Shyam Giri Mandir", "Seelam Pur", "Swarn Cinema", 
    "Jagat Puri A-Block", "ISBT Ring Road", "Metro Train Depot", "Shastri Park", "Dharampura", 
    "Seelampur Metro Station", "Seelam Pur Petrol Pump", "Welcome Metro Station", "Kanti Nagar Extension", 
    "Jharkhandi", "East Azad Nagar", "Krishna Nagar A Block", "Hans Apartment", "Arjun Nagar", 
    "Radheypuri", "Jagatpuri F-Block", "Hassanpur Village", "Gazipur Depot", "Karampura Terminal", 
    "West Patel Nagar", "Pusa Road Telephone Exchange", "Sadhu Vaswani Marg Petrol Pump", "Mandir Marg", 
    "Shivaji Stadium", "Mandi House", "Pragati Maidan", "Road Bridge East", "Pusta X-ing (N.H. 24)", 
    "Mayur Vihar Ph-I", "Hindon Regulator", "Noida Sector 15 Metro Station", "Noida Sector 3 / Naya Bans", 
    "Harola Village / Rajni Gandha Chowk", "Noida Sector 19 Telephone Exchange", "Noida Sector 10-21", 
    "Noida Sector 12 Chora More", "Shiv Mandir Sector 22", "Noida Sector 23 Chowk", 
    "Noida Sector 53 Chowk", "Noida Sector 32 Terminal", "Hoshiyar Pur Village", 
    "Noida Sector 35/51", "Noida Sector 34 U.P. Roadways Terminal", "New Delhi Railway Station Gate 1", 
    "Punjabi Bagh Terminal", "Madi Pur JJ Colony", "Peera Garhi", "Jwala Puri", "Lokesh Cinema", 
    "Swarn Park", "Mundka", "New Delhi Railway Station Gate 2", "Kendriya Terminal Church Road", 
    "Talkatora Garden", "Bharat Sadhu Samaj"
]

update_addresses('crew_data.json', available_tags, 'new.json')
