import json
import os
from utils import Utils

class Score:
    def __init__(self):
        self.x = []
        self.y = []
        self.rate = Utils.load_json('.env')['rate']
    
    def onpen_json(self, filename):
        self.scores = self.read_data(filename)

    def read_data(self, filename):
        obj = Utils.load_json(filename)

        subject_all = obj['scoreAll']
        # for subject in subject_all:
        #     print(subject['name'], subject['scoreT10'], subject['scoreCh'])
        return subject_all

    
    def get_value_by_name_subject(self, name):
        for subject in self.scores:
            if subject['name'] == name:
                return subject['scoreT10']
        return 0
    
    def train(self, subject_name_x, subject_name_y):
        dir_path = 'data'
        number_of_file = (len([entry for entry in os.listdir(dir_path) if os.path.isfile(os.path.join(dir_path, entry))]))
        #get % train
        number_of_file = int(number_of_file * self.rate['train'])
        self.number_of_file = number_of_file
        for i in range(1, number_of_file + 1):
            # print("=====> " + str(i) + " / " + str(number_of_file))
            indexFile = "0" * (6 - len(str(i))) + str(i);
            filename = 'data/score_' + indexFile + '.json'

            self.onpen_json(filename)
            score_subject_x = self.get_value_by_name_subject(subject_name_x)
            score_subject_y = self.get_value_by_name_subject(subject_name_y)
            if score_subject_x == 0 or score_subject_y == 0:
                continue
            self.x.append(score_subject_x)
            self.y.append(score_subject_y)

    