import matplotlib.pyplot as plt
import json
import time

import numpy as np
from scipy import stats
from score import Score
from subject import Subject


class Train:
    def __init__(self):
        subject = Subject()
        # get all subjects
        self.subjects = subject.subjects
        # print(self.subjects)
        self.results = {
            "data": [],
            "number_of_data": 0,
            "time_train": 0
        }
        #current time
        self.start_time = time.time()
    
    def start(self):
        for name_subject in self.subjects:
            a = Score()
            a.train(name_subject)
            self.results['number_of_data'] = a.number_of_file;
            x = a.x
            y = a.y
            
            slope, intercept = 0, 0
            try:
                slope, intercept, r, p, std_err = stats.linregress(x, y)
                # check slope is Nan
                if np.isnan(slope) or np.isnan(intercept):
                    slope, intercept = 0, 0
            except:
                slope, intercept = 0, 0
            self.results['data'].append({
                'name': name_subject,
                'slope': slope,
                'intercept': intercept,
            })

            # print(self.results)

        #save self.results to result.json
        # Serializing json
        #current time
        self.end_time = time.time()
        self.results['time_train'] = self.end_time - self.start_time
        timestr = time.strftime("%Y%m%d-%H%M%S")
        with open("result/" + str(timestr) + ".json","w", encoding='utf-8') as jsonfile:
            json.dump(self.results, jsonfile,ensure_ascii=False)



            

train = Train()
train.start()
