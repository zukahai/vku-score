import os
from utils import Utils

class LinearRegression:
    def __init__(self):
        self.x = []
        self.y = []
         # get all name file in dir_path
        dir_path = 'data'
        self.file_names = [entry for entry in os.listdir(dir_path) if os.path.isfile(os.path.join(dir_path, entry))]
        #get number of file train
        self.number_of_file = len(self.file_names)
    
    def onpen_json(self, filename):
        self.scores = self.read_data(filename)

    def read_data(self, filename):
        obj = Utils.load_json(filename)
        subject_all = obj['scoreAll']
        return subject_all

    
    def get_value_by_name_subject(self, name):
        for subject in self.scores:
            if subject['name'] == name:
                return 0 if subject['scoreT10'] == "" else float(subject['scoreT10'])
        return 0
    
    def solve_relationship_subject(self, subject_name_x, subject_name_y):
        self.x, self.y = [], []
        for index in range(self.number_of_file):
            filename = 'data/' + self.file_names[index]

            self.onpen_json(filename)
            score_subject_x = self.get_value_by_name_subject(subject_name_x)
            score_subject_y = self.get_value_by_name_subject(subject_name_y)
            if score_subject_x == 0 or score_subject_y == 0:
                continue
            # add x, y to linear regression
            self.x.append(score_subject_x)
            self.y.append(score_subject_y)

    