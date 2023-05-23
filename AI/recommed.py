import json

class Recommend:
    def __init__(self):
        self.scores = self.read_data('data/score.json')

    def read_data(self, filename):
        with open(filename, 'r', encoding="utf8") as myfile:
            data=myfile.read()

        obj = json.loads(data)

        subject_all = obj['scoreAll']
        for subject in subject_all:
            print(subject['name'], subject['scoreT10'], subject['scoreCh'])
        return subject_all