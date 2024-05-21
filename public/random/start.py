import os

folder_path = "path_ke_folder_dengan_file"
prefix_to_remove = "igcdn"

# Mendapatkan daftar file dalam folder
file_list = os.listdir(folder_path)

# Mengubah nama file yang mengandung teks "igcdn"
for filename in file_list:
    if prefix_to_remove in filename:
        new_filename = filename.replace(prefix_to_remove, "")
        os.rename(os.path.join(folder_path, filename), os.path.join(folder_path, new_filename))
        print(f"File {filename} telah diubah menjadi {new_filename}")
