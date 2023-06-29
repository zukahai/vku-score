from utils import Utils
import json
import numpy

# Xoa het static trong linear regression bang False
def remove_false():
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

# Lay danh sach mon hoc
def get_all_subject_name():
    subject = {}
    list_studen = Utils.get_all_name_files_in_fordel('./data_preprocessing/output/')
    print(len(list_studen))
    for student in list_studen:
        list_subject_class = Utils.load_json('./data_preprocessing/output/' + student)['scoreAll']
        for sj in list_subject_class:
            countTC = 0 if sj['countTC'] != sj['countTC'] else sj['countTC']
            subject[sj['name']] = {
                'id': sj['id'],
                'name': sj['name'],
                'countTC': countTC,
            }

    with open('./subject/all.json', 'w', encoding='utf-8-sig') as f:
        json.dump(subject, f, ensure_ascii=False)

    array = []
    id_subject = 1
    for sj in subject:
        array.append({
            'id': id_subject,
            'name': sj,
            'countTC': subject[sj]['countTC']
        })
        id_subject += 1

    with open('./subject/all_subject.json', 'w', encoding='utf-8-sig') as f:
        json.dump(array, f, ensure_ascii=False)
    print(len(subject))

get_all_subject_name()
