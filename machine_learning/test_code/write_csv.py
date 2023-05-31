import csv
import os

# Dữ liệu mẫu để ghi tiếp vào file
new_data = [
    ['Sarah', 27, 'UK'],
    ['ssss', 32, 'Germany']
]

# Đường dẫn và tên file CSV
file_path = 'data.csv'

# Kiểm tra xem file đã tồn tại hay chưa
file_exists = os.path.isfile(file_path)

# Mở file CSV để ghi tiếp dữ liệu
with open(file_path, 'a', newline='', encoding='utf-8') as csv_file:
    writer = csv.writer(csv_file)

    # Nếu file chưa tồn tại, ghi dòng header
    if not file_exists:
        header = ['Hải nè', 'Age', 'Country']
        writer.writerow(header)

    # Ghi các dòng dữ liệu mới
    writer.writerows(new_data)

print('Dữ liệu đã được ghi tiếp vào file CSV.')
