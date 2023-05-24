import json

class Score:
    def __init__(self):
        self.value = {
            'A': 4,
            'B': 3,
            'C': 2,
            'D': 1,
            'F': 0,
            '': 0
        }

        self.scores = self.read_data('data/score000001.json')
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
            sumScore += count[key] * self.value[key]
        return sumScore / sumTC

    