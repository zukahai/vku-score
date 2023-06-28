from utils import Utils
import json

old_json = Utils.load_json('./result/20230626-040332/result_train.json')

new_json = {}

for subject_y in old_json:
    new_json[subject_y] = {}
    for subject_x in old_json[subject_y]:
        if old_json[subject_y][subject_x]['static'] == 'True':
            new_json[subject_y][subject_x] = old_json[subject_y][subject_x]

# save file
with open('./result/20230626-040332/result_train_new.json', 'w', encoding='utf-8-sig') as f:
    json.dump(new_json, f, ensure_ascii=False)
