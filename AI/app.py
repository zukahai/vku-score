import tkinter as tk
from tkinter import ttk
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from scipy import stats
import json
from unidecode import unidecode

def load_data(filename):
    with open(filename, 'r', encoding="utf8") as myfile:
        data=myfile.read()
    obj = json.loads(data)
    return obj

data = load_data('./result/20230525-171908.json')['data']
subject_json = load_data('./subject/subjects.json')
subjects = [subject['name'] for subject in subject_json]

# sort subjects ignore utf8
subjects.sort(key=lambda x: unidecode(x))

def search_data(data, name_subject_x, name_subject_y):
    for i in range(len(data)):
        if data[i]['name_subject_x'] == name_subject_x and data[i]['name_subject_y'] == name_subject_y:
            return data[i]


def handle_selection():
    selected_subject_1 = subject1_combobox.get()
    selected_subject_2 = subject2_combobox.get()
    print("Ngôn ngữ được chọn:", selected_subject_1)
    print("Tên được chọn:", selected_subject_2)
    
    # Dữ liệu mẫu
    x = [10, 8, 10, 9.6, 10, 10, 5, 6]
    y = [9.3, 9.3, 8.6, 9.8, 8.9, 10, 6, 7]

    dependent = search_data(data, selected_subject_2, selected_subject_1)
    if (dependent != None):
        x = dependent['x']
        y = dependent['y']
    print(dependent)

    slope, intercept, r, p, std_err = stats.linregress(x, y)

    def myfunc(x):
        return slope * x + intercept

    mymodel = list(map(myfunc, x))

    fig = plt.figure(figsize=(5, 4), dpi=100)
    plt.scatter(x, y)
    plt.plot(x, mymodel)
    plt.title(selected_subject_1 + "and" + selected_subject_2)
    plt.xlabel(selected_subject_2)
    plt.ylabel(selected_subject_1)
    
    canvas = FigureCanvasTkAgg(fig, master=root)
    canvas.draw()
    canvas.get_tk_widget().grid(row=3, columnspan=2, padx=5, pady=5)

root = tk.Tk()
root.title("Recommed")

# Tạo Combobox cho lựa chọn môn học 1
subject1_label = ttk.Label(root, text="Môn học 1:")
subject1_label.grid(row=0, column=0, padx=5, pady=5, sticky=tk.W)

subject1_combobox = ttk.Combobox(root, values=subjects)
subject1_combobox.grid(row=0, column=1, padx=5, pady=5)

# Tạo Combobox cho lựa môn học 2
subject2_label = ttk.Label(root, text="Môn học 2:")
subject2_label.grid(row=1, column=0, padx=5, pady=5, sticky=tk.W)

subject2_combobox = ttk.Combobox(root, values=subjects)
subject2_combobox.grid(row=1, column=1, padx=5, pady=5)

# Tạo nút để xử lý sự kiện khi người dùng chọn ngôn ngữ và tên
select_button = ttk.Button(root, text="Chọn", command=handle_selection)
select_button.grid(row=2, columnspan=2, padx=5, pady=5)

root.mainloop()

