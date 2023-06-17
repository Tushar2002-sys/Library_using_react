import json

# Load the JSON file
with open('https://openlibrary.org/subjects/fiction.json') as file:
    data = json.load(file)

# Iterate over each book and display the relevant information
for book in data['books']:
    title = book['title']
    author = book['author']
    publication_year = book['publication_year']

    print(f"Title: {title}")
    print(f"Author: {author}")
    print(f"Publication Year: {publication_year}")
    print()