import tkinter as tk
from tkinter import ttk
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from scipy import stats

def handle_selection():
    selected_language = language_combobox.get()
    selected_name = name_combobox.get()
    print("Ngôn ngữ được chọn:", selected_language)
    print("Tên được chọn:", selected_name)
    
    # Dữ liệu mẫu
    x = [10, 8, 10, 9.6, 10, 10, 5, 6]
    y = [9.3, 9.3, 8.6, 9.8, 8.9, 10, 6, 7]

    slope, intercept, r, p, std_err = stats.linregress(x, y)

    def myfunc(x):
        return slope * x + intercept

    mymodel = list(map(myfunc, x))

    fig = plt.figure(figsize=(5, 4), dpi=100)
    plt.scatter(x, y)
    plt.plot(x, mymodel)
    plt.title("THDC and CTDL&GT")
    plt.xlabel("THDC")
    plt.ylabel("CTDL&GT")
    
    canvas = FigureCanvasTkAgg(fig, master=root)
    canvas.draw()
    canvas.get_tk_widget().grid(row=3, columnspan=2, padx=5, pady=5)

root = tk.Tk()
root.title("Recommed")

# Tạo Combobox cho lựa chọn ngôn ngữ
language_label = ttk.Label(root, text="Ngôn ngữ:")
language_label.grid(row=0, column=0, padx=5, pady=5, sticky=tk.W)

language_combobox = ttk.Combobox(root, values=["Java", "C++", "Python", "GoLang"])
language_combobox.grid(row=0, column=1, padx=5, pady=5)

# Tạo Combobox cho lựa chọn tên
name_label = ttk.Label(root, text="Tên:")
name_label.grid(row=1, column=0, padx=5, pady=5, sticky=tk.W)

name_combobox = ttk.Combobox(root, values=["Hải", "Nam", "Gôn"])
name_combobox.grid(row=1, column=1, padx=5, pady=5)

# Tạo nút để xử lý sự kiện khi người dùng chọn ngôn ngữ và tên
select_button = ttk.Button(root, text="Chọn", command=handle_selection)
select_button.grid(row=2, columnspan=2, padx=5, pady=5)

root.mainloop()

