# Check if the directory exists
if [ ! -d "$dir_path" ]; then
  echo "Directory $dir_path does not exist."
  exit 1
fi

# Start the index.ts file
echo "export default {" > index.ts

# Loop over the .json files in the directory and its subdirectories
find "$dir_path" -name '*.json' | while read -r file; do
  # Extract the base name of the file (without the .json extension)
  base=$(basename "$file" .json)

  # Split the base name at _ to get the language and category
  IFS='_' read -r language1 language2 category <<< "$base"

  # Format the language name
  language_name="$language1 - $language2"

  # Read the contents of the file
  contents=$(cat "$file")

  # Add the contents of the file to index.ts under the appropriate keys
  # Note the quotes around the property name
  echo "  \"$base\": [{" >> index.ts
  echo "    \"name\": \"$language_name\"," >> index.ts
  echo "    \"category\": \"$category\"," >> index.ts
  echo "    \"list\": $contents" >> index.ts
  echo "  }]," >> index.ts
done

# End the index.ts file
echo "}" >> index.ts