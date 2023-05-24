import matplotlib.pyplot as plt
from scipy import stats
from score import Score

a = Score()
a.train('Tin học đại cương')

x = a.x
y = a.y

slope, intercept, r, p, std_err = stats.linregress(x, y)

def myfunc(x):
  return slope * x + intercept

mymodel = list(map(myfunc, x))

plt.scatter(x, y)
# title
plt.title('Tin học đại cương')
# label x
plt.xlabel('GPA')
# label y
plt.ylabel('Score')
plt.plot(x, mymodel)
plt.show()
print(slope, intercept)


# https://realpython.com/python-virtual-environments-a-primer/?fbclid=IwAR0AlG4RaVhL18WqddxeZB1hGUHAEVQbA4sb_LabiDBQrzDkh3fCFZQ068c