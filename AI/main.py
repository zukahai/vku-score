from score import Score

score = Score()
print(score.count_scoreCh())
print(score.gpa)

score.onpen_json('data/score000002.json')
print(score.count_scoreCh())
print(score.gpa)