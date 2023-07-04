import pandas as pd
import json
import os

def excel_to_json(file_path):
    excel_data = pd.read_excel(file_path, sheet_name=None)
    json_data = {}

    for sheet_name, sheet_data in excel_data.items():
        # Không thực hiện đối với các sheet có sheet_name không bắt đầu từ chữ số
        if sheet_name[0].isdigit() == False:
            continue

        # Xóa các dòng có cột thứ 3 rỗng
        sheet_data = sheet_data.dropna(subset=[sheet_data.columns[2]])

        sheet_data = sheet_data.iloc[3:, :8]  # Bắt đầu từ dòng thứ 4

        # Đặt tên các cột
        column_names = ['id', 'maHP', 'name', 'countTC', 'scoreT10', 'scoreCh', 't4', 'group']
        sheet_data.columns = column_names[: len(sheet_data.columns)]

        # Gán giá trị 0 cho cột 'maHP' hoặc 'group' nếu là NaN
        sheet_data['maHP'] = sheet_data['maHP'].fillna(0)
        sheet_data['group'] = sheet_data['group'].fillna(0)

        json_data[sheet_name] = sheet_data.to_dict(orient='records')

    for sheet_name, sheet_data in json_data.items():
        json_file_path = f"output/{sheet_name}.json"

        jon_data = {
            "scoreAll": sheet_data
        }

        with open(json_file_path, 'w', encoding='utf-8-sig') as json_file:
            json.dump(jon_data, json_file, ensure_ascii=False)

    print("Chuyển đổi thành công ", file_path)

def convert_folder_to_json(folder_path):
    for file_name in os.listdir(folder_path):
        file_path = os.path.join(folder_path, file_name)
        if file_name.endswith('.xlsx'):
            excel_to_json(file_path)

# Đường dẫn tới thư mục chứa các file Excel
folder_path = "./ScoreTN2023"

# Gọi hàm để chuyển đổi từng file trong thư mục
convert_folder_to_json(folder_path)

# excel_to_json(folder_path)
