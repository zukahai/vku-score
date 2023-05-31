import matplotlib.pyplot as plt
from scipy import stats
import numpy as np

y = [10.0, 8.0, 10.0, 9.6, 10.0, 10.0, 5.0, 7.5, 3.5]
x = [9.3, 9.3, 8.6, 9.8, 8.9, 7.7, 5.3, 8.0, 4.0] 

slope, intercept, r, p, std_err = stats.linregress(x, y)
#mse
mse = np.mean((np.array(y) - slope * np.array(x) - intercept) ** 2)
print(mse)

def myfunc(x):
  return slope * x + intercept

mymodel = list(map(myfunc, x))

plt.scatter(x, y)
plt.plot(x, mymodel)
#title
plt.title("THDC and CTDL&GT")
#label
plt.xlabel("THDC")
plt.ylabel("CTDL&GT")
#show
plt.show()
print(slope, intercept)


# https://realpython.com/python-virtual-environments-a-primer/?fbclid=IwAR0AlG4RaVhL18WqddxeZB1hGUHAEVQbA4sb_LabiDBQrzDkh3fCFZQ068c