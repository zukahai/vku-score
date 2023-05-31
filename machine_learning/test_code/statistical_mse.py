from utils import Utils
import numpy as np

last_file = Utils.get_all_name_files_in_fordel("../result/")[-1]
data_last_file = Utils.load_json("../result/" + last_file)
mses = [lnr['mse'] for lnr in data_last_file['data']]
statistical_mse = np.mean(np.array(mses))
print(len(mses))