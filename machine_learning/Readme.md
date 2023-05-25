<div align="center">

# Áp dụng Machine learing vào việc gợi ý học cải thiện
</div>

## Mục lục

1. [Giới thiệu](1-giới-thiêu)<br>
   1.1. [Giới thiệu về Machine learning](#11-giới-thiệu-về-machine-learning) <br>
   1.2. [Giới thiệu về Linear regression](#12-giới-thiệu-về-linear-regression)
2. [Áp dụng Machine Learning vào việc gợi ý học cải thiện](#2-áp-dụng-machine-learning-vào-việc-gợi-ý-học-cải-thiện)<br>
   2.1. [Cái nhìn tổng quan về học cải thiện](#21-cái-nhìn-tổng-quan-về-học-cải-thiện) <br>
   2.2. [Ý tưởng dùng Linear regression](#22-ý-tưởng-dùng-linear-regression) <br>
   2.3. [Triển khai](#23-triển-khai) 
3. [Kết luận](#3-kết-luận)

---------------------------------------

## 1. Giới thiệu
### 1.1. Giới thiệu về Machine learning
Machine learning (học máy) là một lĩnh vực trong trí tuệ nhân tạo (AI) tập trung vào việc phát triển các hệ thống có khả năng học hỏi và cải thiện hiệu suất từ dữ liệu mà không cần lập trình cụ thể. Thay vì được lập trình để thực hiện một nhiệm vụ cụ thể, các hệ thống máy học được huấn luyện trên dữ liệu và kinh nghiệm để tự động tìm ra các quy tắc, mẫu và mối quan hệ trong dữ liệu.

<div align = "center">
  <img align="center" src= "./demo/ML.png" />
</div>
<br>

Các hệ thống máy học sử dụng các thuật toán và mô hình tương tự để phân tích dữ liệu, nhận diện mẫu và tạo ra dự đoán hoặc quyết định. Các thuật toán máy học có thể được chia thành ba loại chính: học giám sát (supervised learning), học không giám sát (unsupervised learning) và học bán giám sát (semi-supervised learning).

### 1.2. Giới thiệu về Linear regression
Linear regression (hồi quy tuyến tính) là một phương pháp trong machine learning được sử dụng để dự đoán giá trị của một biến phụ thuộc dựa trên một hoặc nhiều biến độc lập. Nó xác định mối quan hệ tuyến tính giữa biến độc lập và biến phụ thuộc và sử dụng mô hình này để dự đoán giá trị của biến phụ thuộc cho các giá trị mới của biến độc lập.

<div align = "center">
  <img align="center" src= "./demo/LR.png" />
</div>
<br>

Trong hồi quy tuyến tính, chúng ta tìm kiếm một đường thẳng (trong trường hợp hồi quy tuyến tính đơn giản) hoặc một mặt phẳng (trong trường hợp hồi quy tuyến tính đa biến) mà có thể phù hợp với dữ liệu một cách tốt nhất. Đường thẳng hoặc mặt phẳng này được sử dụng để dự đoán giá trị của biến phụ thuộc dựa trên giá trị của biến độc lập. Quá trình tìm kiếm đường thẳng/mặt phẳng phù hợp được thực hiện bằng cách tối thiểu hóa sai số giữa giá trị dự đoán và giá trị thực tế của biến phụ thuộc trong tập dữ liệu huấn luyện.

## 2. Áp dụng Machine Learning vào việc gợi ý học cải thiện
### 2.1. Cái nhìn tổng quan về học cải thiện
Trong môi trường đại học, việc học cải thiện và ưu tiên môn học không chỉ dựa trên điểm số mà còn phụ thuộc vào nhiều yếu tố khác như sở thích, mục tiêu nghề nghiệp, khả năng học tập, và nguồn lực có sẵn.

Hãy xem xét trường hợp của sinh viên Peter với điểm Tiếng Anh 1, Tiếng Anh 2 và Tiếng Anh 3 đạt điểm C. Mặc dù điểm số của Peter không cao, việc học cải thiện trong môn Tiếng Anh vẫn có thể khả thi nếu Peter có sự quyết tâm và tư duy đúng đắn. Tuy nhiên, cần lưu ý rằng việc học cải thiện một môn từ điểm C lên điểm B có thể đòi hỏi nỗ lực lớn hơn so với việc nâng điểm môn khác từ B lên A.

**khi sinh viên quyết định học cải thiện nên ưu tiên vào việc nâng cao điểm số của những môn học mà sinh viên có thế mạnh nhưng điểm chưa cao.**

### 2.2. Ý tưởng dùng Linear regression
Sẽ có nhiều bạn đặt câu hỏi là "Một số môn sinh viên điểm chưa cao, mà lại là thế mạnh của sinh viên đó", có phải là hơi trái ngược hay không, nếu là thế môn học thuộc thế mạnh thì điểm chắc hẳn phải cao chứ. Điều này hoàn toàn có thể xảy ra, một số môn là thế mạnh, là sở thích của người đó nhưng có rất nhiều lí do mà sinh viên đó phải chịu điểm không cao như là quên thi, bị đình chỉ thi, hoặc có thể là "Học tài thi phận"

**Để tính toán, phân tích về độ ưu tiên học cải thiện, ta cần dự đoán được điểm của từng học phần bằng cách tìm độ phụ thuộc giữa các học phần, dựa vào điểm của rất nhiều sinh viên khác.**

Thông thường sẽ có những học phần có tính gắn kết với nhau, nếu sinh viên học giỏi môn này thì cũng sẽ học tốt được môn kia. Ví dụ như sinh viên đó giỏi tiếng Anh và điểm tiếng Anh 1 và tiếng Anh 2 cũng người đó được điểm A thì khả năng cao sinh viên đó học tiếng Anh 3 được điểm A hoặc điểm B là rất cao

Ví dụ dưới đây là sự phụ thuộc của điểm học phần THDC (tin học đại cương) và điểm học phần CTDL&GT (Cấu trúc dữ liệu và giải thuật)

<div align = "center">
  <img align="center" src= "./demo/demo.png" />
</div>
<br>

### 2.3. Triển khai

Nếu ta có rất nhiều bảng điểm thực tế của N sinh viên, dựa vào đó ta sẽ tìm được tính phụ thuộc của điểm từng cặp học phần mà sinh viên phải học.

Với mỗi cặp môn học (sub_x, sub_y), dựa và bảng điểm của N sinh viên, ta sẽ có N cặp tạo độ (x, y). Áp dụng linear regression ta sẽ tính được phương trình **y = a*x + b** về sự phụ thuộc của y vào x, ;úc này điểm của học phần sub_y sẽ phụ thuộc vào điểm của học phần sub_x. Từ đó khi có điểm của học phần sub_x, ta có thể dự đoán được điểm của của sub_y của bất kì sinh viên nào.

Nếu sinh viên đã học được M hoặc phần. Với mỗi học phần, ta sẽ áp dụng Linear regression để tính được điểm dự đoán của học phần đó với M - 1 học phần khác. So sánh điểm dự đoán trung bình và điểm thực tế, tính độ chênh lệch là hiệu cùng trung bình điểm dự đoán và điểm thực tế. Những học phần nào có độ chệnh lệch càng lớn thì càng ưu tiền học lại.


## 3. Kết luận
Trên đây là cách áp dụng linear regression trong machine learning để gợi ý học cải thiện. Có thể vẫn nhiều sai sót, rất mong nhận được sự góp ý chân thành của mọi người.
