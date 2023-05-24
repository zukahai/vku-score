import matplotlib.pyplot as plt
from scipy import stats

x = [10, 8, 10, 9.6, 10, 10, 5, 6] 
y = [9.3, 9.3, 8.6, 9.8, 8.9, 10, 6, 7]

slope, intercept, r, p, std_err = stats.linregress(x, y)

def myfunc(x):
  return slope * x + intercept

mymodel = list(map(myfunc, x))

plt.scatter(x, y)
plt.plot(x, mymodel)
plt.show()
print(slope, intercept)


# https://realpython.com/python-virtual-environments-a-primer/?fbclid=IwAR0AlG4RaVhL18WqddxeZB1hGUHAEVQbA4sb_LabiDBQrzDkh3fCFZQ068c