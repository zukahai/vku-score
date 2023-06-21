import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    # Đọc tệp CSV và chuyển đổi nó thành một danh sách các từ điển
    with open(csv_file_path, 'r', encoding='utf-8-sig') as csv_file:
        csv_data = csv.DictReader(csv_file)
        data = list(csv_data)
        
    data_json = {}
    for x in data:
        name_subject_y = x['name_subject_y']
        name_subject_x = x['name_subject_x']
        
        if name_subject_y not in data_json:
            data_json[name_subject_y] = {}
        
        data_json[name_subject_y][name_subject_x] = {
            'slope': x['slope'],
            'intercept': x['intercept'],
            'mean_squared_error': x['mean_squared_error'],
            'static': x['static']
        }

    with open(json_file_path, 'w', encoding='utf-8-sig') as json_file:
        json.dump(data_json, json_file, ensure_ascii=False)

    print('Dữ liệu đã được ghi tiếp vào file JSON.')

# Đường dẫn của tệp CSV đầu vào
fordel_path = '20230621-234030';
csv_file_path = '../result/' + fordel_path + '/result_train.csv'

# Đường dẫn của tệp JSON đầu ra
json_file_path = '../result/' + fordel_path + '/result_train.json'

# Chuyển đổi tệp CSV thành JSON
csv_to_json(csv_file_path, json_file_path)
