import json

class Subject:
    def __init__(self):
        self.subjects = self.load_data('subject/subjects.json')
        # print(self.subjects)

    def load_data(self, filename):
        with open(filename, 'r', encoding="utf8") as myfile:
            data=myfile.read()
        obj = json.loads(data)
        return [x['name'] for x in obj]

a = Subject()