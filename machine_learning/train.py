import json
import time
import os
import csv
import numpy as np
from scipy import stats
from utils import Utils
from linear_regression import LinearRegression
import warnings
warnings.filterwarnings("ignore")


class Train:
    def __init__(self):
        # get all subjects
        self.subjects = Utils.get_all_name_subjects('./subject/subjects.json')
        #linear regression
        self.lnr = LinearRegression()

        #current time
        self.start_time = time.time()
        print("Start train time:", time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(self.start_time)))
        #progress bar
        self.utils = Utils()
        self.number_of_progress = len(self.subjects) * len(self.subjects);

    #init new train
    def init_new_train(self):
        self.name_fordel_train = time.strftime("%Y%m%d-%H%M%S")
        self.info_train = {
            "index_subject_x": 0,
            "index_subject_y": 0,
            "sum_time_train": 0,
            "number_of_train": 0,
            "complete": False
        }
        self.index_train = {
            "index_subject_x": 0,
            "index_subject_y": 0
        }
        self.index_progress = 0
        self.sum_time_train = 0
        self.number_of_train = 1
        Utils.create_forder("./result/" + str(self.name_fordel_train))
        with open("result/" + str(self.name_fordel_train) + "/info_train.json","w", encoding='utf-8') as jsonfile:
            json.dump(self.info_train, jsonfile,ensure_ascii=False)

    def load_progress_old_train(self):
        fordel_train = Utils.get_all_name_fordel("./result/")
        if len(fordel_train) == 0:
            self.init_new_train()
            return
        name_fordel_old_train = fordel_train[-1]
        obj = Utils.load_json("./result/" + str(name_fordel_old_train) + "/info_train.json")
        if obj["complete"]:
            self.init_new_train()
        else:
            self.index_train = {
                "index_subject_x": obj["index_subject_x"],
                "index_subject_y": obj["index_subject_y"]
            }
            self.sum_time_train = obj["sum_time_train"]
            self.name_fordel_train = name_fordel_old_train
            self.number_of_train = obj["number_of_train"] + 1
            self.index_progress = obj["index_subject_y"] * len(self.subjects) + obj["index_subject_x"]

    def add_new_data_train(self, new_data):
        # Đường dẫn và tên file CSV
        file_path = './result/' + str(self.name_fordel_train) + '/result_train.csv'
        # Kiểm tra xem file đã tồn tại hay chưa
        file_exists = os.path.isfile(file_path)
        # Mở file CSV để ghi tiếp dữ liệu
        with open(file_path, 'a', newline='', encoding='utf-8-sig') as csv_file:
            writer = csv.writer(csv_file)
            # Nếu file chưa tồn tại, ghi dòng header
            if not file_exists:
                header = ['name_subject_y', 'name_subject_x', 'slope', 'intercept', 'mean_squared_error', 'static']
                writer.writerow(header)
            # Ghi các dòng dữ liệu mới
            writer.writerows(new_data)
    def start(self):
        self.load_progress_old_train()
        index_subject_x = self.index_train["index_subject_x"]
        index_subject_y = self.index_train["index_subject_y"]
        while index_subject_y < len(self.subjects):
            name_subject_x = self.subjects[index_subject_x]
            name_subject_y = self.subjects[index_subject_y]
    
            self.lnr.solve_relationship_subject(name_subject_x, name_subject_y)
            x = self.lnr.x
            y = self.lnr.y
            
            slope, intercept, mse = 0, 0, 0
            try:
                slope, intercept, r, p, std_err = stats.linregress(x, y)
                # check slope is Nan
                if np.isnan(slope) or np.isnan(intercept):
                    slope, intercept = 0, 0
                #get MSE of linear regression
                mse = np.mean((np.array(y) - (slope * np.array(x) + intercept)) ** 2)
            except:
                slope, intercept = 0, 0
            
            # Dữ liệu mẫu để ghi tiếp vào file
            new_data = [
                [name_subject_y, name_subject_x, slope, intercept, mse, True if slope != 0 or intercept != 0 else False]
            ]

            self.add_new_data_train(new_data)

            self.index_progress += 1
            #print progressbar
            self.utils.printProgressBar(self.index_progress, self.number_of_progress, prefix = ' Progress:', suffix = 'Complete', length = 50)
    
            index_subject_x += 1
            if index_subject_x == len(self.subjects):
                index_subject_y += 1
                index_subject_x = 0

            self.update_infomation_train(index_subject_x, index_subject_y)
        self.done_train()
    
    def update_infomation_train(self, index_subject_x, index_subject_y):
        #calculate time
        self.end_time = time.time()
        time_train = self.end_time - self.start_time
        #inital info train
        self.info_train = {
            "index_subject_x": index_subject_x,
            "index_subject_y": index_subject_y,
            "sum_time_train": self.sum_time_train + time_train,
            "number_of_train": self.number_of_train,
            "complete": False
        }
        
        #save info train
        with open("result/" + str(self.name_fordel_train) + "/info_train.json","w", encoding='utf-8') as jsonfile:
            json.dump(self.info_train, jsonfile,ensure_ascii=False)

    def done_train(self):
        self.info_train = {
            "number_of_train": self.number_of_train,
            "number_of_subject_train": len(self.subjects),
            "number_of_data_train": self.lnr.number_of_file,
            "sum_time_train": self.sum_time_train + time.time() - self.start_time,
            "complete": True
        }
        with open("result/" + str(self.name_fordel_train) + "/info_train.json","w", encoding='utf-8') as jsonfile:
          
            json.dump(self.info_train, jsonfile,ensure_ascii=False)
        print("End train time:", time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(self.end_time)))
        

train = Train()
train.start()