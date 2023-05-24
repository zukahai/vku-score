import json
import os

class Score:
    def __init__(self):
        self.valueCh = {
            'A': 4,
            'B': 3,
            'C': 2,
            'D': 1,
            'F': 0,
            '': 0
        }
        self.x = []
        self.y = []

        self.scores = self.read_data('data/score_000001.json')
        self.gpa = self.calulate_gpa()
    
    def onpen_json(self, filename):
        self.scores = self.read_data(filename)
        self.gpa = self.calulate_gpa()

    def read_data(self, filename):
        with open(filename, 'r', encoding="utf8") as myfile:
            data=myfile.read()

        obj = json.loads(data)

        subject_all = obj['scoreAll']
        # for subject in subject_all:
        #     print(subject['name'], subject['scoreT10'], subject['scoreCh'])
        return subject_all
    
    def count_scoreCh(self):
        count = {
            'A': 0,
            'B': 0,
            'C': 0,
            'D': 0,
            'F': 0,
            '': 0
        }

        for score in self.scores:
            if score['scoreCh'] != '':
                count[score['scoreCh']] += score['countTC']
        return count
    
    def calulate_gpa(self):
        count = self.count_scoreCh()
        sumTC, sumScore = 0, 0
        for key in count:
            sumTC += count[key]
            sumScore += count[key] * self.valueCh[key]
        return sumScore / sumTC
    
    def get_value_by_name_subject(self, name):
        for subject in self.scores:
            if subject['name'] == name:
                return self.valueCh[subject['scoreCh']]
        return 0
    
    def train(self, subject_name):
        dir_path = 'data'
        number_of_file = (len([entry for entry in os.listdir(dir_path) if os.path.isfile(os.path.join(dir_path, entry))]))
        for i in range(1, number_of_file + 1):
            indexFile = "0" * (6 - len(str(i))) + str(i);
            filename = 'data/score_' + indexFile + '.json'

            self.onpen_json(filename)
            print(self.gpa, self.get_value_by_name_subject(subject_name))
            self.x.append(self.gpa)
            self.y.append(self.get_value_by_name_subject(subject_name))

    