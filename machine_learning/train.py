import json
import time

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
        self.results = {}

        #init result
        for subject_name in self.subjects:
            self.results[subject_name] = {}

        #current time
        self.start_time = time.time()
        print("Start train time:", time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(self.start_time)))
        #progress bar
        self.utils = Utils()
        self.number_of_progress = len(self.subjects) * len(self.subjects);
        self.index_progress = 0

    
    def start(self):
        for name_subject_y in self.subjects:
            for name_subject_x in self.subjects:
                
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
                    mse = np.mean((np.array(y) - slope * np.array(x) - intercept) ** 2)
                except:
                    slope, intercept = 0, 0
               
              
               
                self.results[name_subject_y][name_subject_x] = {
                    'name_subject_x': name_subject_x,
                    'name_subject_y': name_subject_y,
                    'slope': slope,
                    'intercept': intercept,
                    'static': True if (slope != 0 or intercept != 0) else False,
                    # 'x': x,
                    # 'y': y
                }
                self.index_progress += 1
                self.utils.printProgressBar(self.index_progress, self.number_of_progress, prefix = ' Progress:', suffix = 'Complete', length = 50)
        #current time
        self.end_time = time.time()
        self.save_result()
    
    def save_result(self):
        #calculate time
        time_train = self.end_time - self.start_time
        #inital info train
        self.info_train = {
            "number_of_data_train": self.lnr.number_of_file,
            "number_of_subject_train": len(self.subjects),
            "time_train": time_train
        }
        
        timestr = time.strftime("%Y%m%d-%H%M%S")
        #create folder name is timestr
        Utils.create_forder("./result/" + str(timestr))
        #save result
        with open("result/" + str(timestr) + "/result_model.json","w", encoding='utf-8') as jsonfile:
            json.dump(self.results, jsonfile,ensure_ascii=False)
        with open("result/" + str(timestr) + "/info_train.json","w", encoding='utf-8') as jsonfile:
            json.dump(self.info_train, jsonfile,ensure_ascii=False)

        print("End train time:", time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(self.end_time)))
        print("Result file: ", self.utils.getLocation('./result') + "\\result\\" + str(timestr) + ".json")


train = Train()
train.start()