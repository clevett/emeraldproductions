# Check if input folder is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <input_folder>"
    exit 1
fi

input_folder="$1"

# Check if input folder exists
if [ ! -d "$input_folder" ]; then
    echo "Folder $input_folder not found!"
    exit 1
fi

# Create wordlists/json directory if it doesn't exist
json_folder="wordlists/json"
mkdir -p $json_folder

# Loop through each CSV file in the folder and its subfolders
find "$input_folder" -name '*.csv' | while read -r input_file; do
    if [ -f "$input_file" ]; then
        # Get file name without extension
        filename=$(basename -- "$input_file")
        filename_no_ext="${filename%.*}"

        # Prepare output file
        output_file="${json_folder}/${filename_no_ext}.json"

        echo "{" > "$output_file"

        # Read each line of the csv file
        while IFS=';' read -r key value; do
            # Remove leading and trailing whitespaces
            key=$(echo "$key" | sed 's/^[ \t]*//;s/[ \t]*$//')
            value=$(echo "$value" | sed 's/^[ \t]*//;s/;;.*//;s/[ \t]*$//')

            # Add key-value pair to the JSON file
            echo "  \"$key\": \"$value\"," >> "$output_file"
        done < "$input_file"

        # Remove the trailing comma from the last line
        sed -i '$ s/,$//' "$output_file"

        echo "}" >> "$output_file"

        echo "Conversion complete. Output saved to $output_file"
    fi
done