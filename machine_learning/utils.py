import os
import json

class Utils:
    # print progress
    def printProgressBar (self,iteration, total, prefix = '', suffix = '', decimals = 2, length = 100, fill = '█', printEnd = "\r"):
        """
        Call in a loop to create terminal progress bar
        @params:
            iteration   - Required  : current iteration (Int)
            total       - Required  : total iterations (Int)
            prefix      - Optional  : prefix string (Str)
            suffix      - Optional  : suffix string (Str)
            decimals    - Optional  : positive number of decimals in percent complete (Int)
            length      - Optional  : character length of bar (Int)
            fill        - Optional  : bar fill character (Str)
            printEnd    - Optional  : end character (e.g. "\r", "\r\n") (Str)
        """
        percent = ("{0:." + str(decimals) + "f}").format(100 * (iteration / float(total)))
        filledLength = int(length * iteration // total)
        bar = fill * filledLength + '-' * (length - filledLength)
        print(f'\r{prefix} |{bar}| {percent}% {suffix}', end = printEnd)
        # Print New Line on Complete
        if iteration == total: 
            print()

    # get location
    def getLocation(self, path):
        local_path = os.path.dirname(os.path.abspath(path=path))
        return local_path
    
    # load json
    def load_json(path):
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f)
    
    # get all name subjects
    def get_all_name_subjects(path):
        obj = Utils.load_json(path)
        return [x['name'] for x in obj]
    
    # get all name files
    def get_all_name_files_in_fordel(dir_path):
        return [entry for entry in os.listdir(dir_path) if os.path.isfile(os.path.join(dir_path, entry))]
    
    def get_all_name_fordel(folder_path):
        return [name for name in os.listdir(folder_path) if os.path.isdir(os.path.join(folder_path, name))]
    
    def create_forder(dir_path):
        if not os.path.exists(dir_path):
            os.makedirs(dir_path)
        

# test
# print(Utils.get_all_name_files_in_fordel('./result'))
# Utils.create_forder('./result/abc')
# print(Utils.get_all_name_fordel('./result/'))