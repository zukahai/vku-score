import json
import os

class Score:
    def __init__(self):
        self.x = []
        self.y = []
    
    def onpen_json(self, filename):
        self.scores = self.read_data(filename)
        self.score10 = self.calulate_score10()

    def read_data(self, filename):
        with open(filename, 'r', encoding="utf8") as myfile:
            data=myfile.read()

        obj = json.loads(data)

        subject_all = obj['scoreAll']
        # for subject in subject_all:
        #     print(subject['name'], subject['scoreT10'], subject['scoreCh'])
        return subject_all
    
    def calulate_score10(self):
        sumTC, sumScore = 0, 0
        for subject in self.scores:
            score_subject = subject['scoreT10']
            if score_subject == '':
                continue
            sumTC += subject['countTC']
            sumScore += float(subject['countTC']) * float(subject['scoreT10'])
        return sumScore / sumTC
    
    def get_value_by_name_subject(self, name):
        for subject in self.scores:
            if subject['name'] == name:
                return subject['scoreT10']
        return 0
    
    def train(self, subject_name):
        dir_path = 'data'
        number_of_file = (len([entry for entry in os.listdir(dir_path) if os.path.isfile(os.path.join(dir_path, entry))]))
        for i in range(1, number_of_file + 1):
            print("=====> " + str(i) + " / " + str(number_of_file))
            indexFile = "0" * (6 - len(str(i))) + str(i);
            filename = 'data/score_' + indexFile + '.json'

            self.onpen_json(filename)
            score_subject = self.get_value_by_name_subject(subject_name)
            print(self.score10, score_subject)
            if score_subject == 0:
                continue
            self.x.append(self.score10)
            self.y.append(score_subject)

    