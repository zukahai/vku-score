import matplotlib.pyplot as plt
from scipy import stats
from score import Score

a = Score()
name_subject = 'Đại số tuyến tính'
a.train(name_subject)

x = a.x
y = a.y
x = []
y = []


slope, intercept = 0, 0
try:
  slope, intercept, r, p, std_err = stats.linregress(x, y)
except:
  print('error')

def myfunc(x):
  return slope * x + intercept

mymodel = list(map(myfunc, x))

plt.scatter(x, y)
# title
plt.title(name_subject)
# label x
plt.xlabel('GPA')
# label y
plt.ylabel('Score')
plt.plot(x, mymodel)
print(slope, intercept)
plt.show()

print(myfunc(4))


# https://realpython.com/python-virtual-environments-a-primer/?fbclid=IwAR0AlG4RaVhL18WqddxeZB1hGUHAEVQbA4sb_LabiDBQrzDkh3fCFZQ068c