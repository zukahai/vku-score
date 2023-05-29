# Hỗ trợ tính điểm GPA và gợi ý học cải thiện cho sinh viên VKU

## Mục lục

- [1. Giới thiệu](#1-giới-thiệu)
    - [1.1. Giới thiệu VKU Score](#11-giới-thiệu-vku-score)
    - [1.2. Các chức năng của VKU Score](#12-các-chức-năng-của-vku-score)
        - [1.2.1 Tính GPA của sinh viên](#121-tính-gpa-của-sinh-viên)
        - [1.2.2 Tính điểm sau khi học cải thiện](#122-tính-điểm-sau-khi-học-cải-thiện)
        - [1.2.3 Gợi ý những học phần nên cải thiện](#123-gợi-ý-những-học-phần-nên-cải-thiện)
- [2. Hướng dẫn sử dụng](#2-hướng-dẫn-sử-dụng)
    - [2.1. Cách lấy danh sách điểm](#21-cách-lấy-danh-sách-điểm)
        - [2.1.1. Đăng nhập vào hệ thống đào tạo của sinh viên VKU](#211-đăng-nhập-vào-hệ-thống-đào-tạo-của-sinh-viên-vku)
        - [2.1.2. Truy cập vào trang điểm của sinh viên VKU](#212-truy-cập-vào-trang-điểm-của-sinh-viên-vku)
        - [2.1.3. Sao chép mã hỗ trợ lấy danh sách điểm học phần](#213-sao-chép-mã-hỗ-trợ-lấy-danh-sách-điểm-học-phần)
        - [2.1.4. Sử dụng Developer Tools để tải file điem.json](#214-sử-dụng-developer-tools-để-tải-file-điemjson)
    - [2.2. Sử dụng VKU Score](#22-sử-dụng-vku-score)
        - [2.2.1. Tải dữ liệu điểm lên hệ thống](#221-tải-dữ-liệu-điểm-lên-hệ-thống)
        - [2.2.2. Tính GPA của sinh viên](#222-tính-điểm-gpa)
        - [2.2.3. Xem điểm sau khi cải thiện](#223-xem-điểm-sau-khi-cải-thiện)
        - [2.2.4. Gợi ý đánh giá học phần](#224-gợi-ý-đánh-giá-học-phần)
    - [2.3. Tiện ích bổ sung cho VKU SCORE](#23-tiện-ích-bổ-sung-cho-vku-score)
        - [2.3.1. Đánh giá lớp học phần](#231-đánh-giá-lớp-học-phần)
        - [2.3.2. Đánh giá sự cần thiết của học phần](#232-đánh-giá-sự-cần-thiết-của-học-phần)
<hr>

## 1. Giới thiệu
### 1.1. Giới thiệu VKU Score


Hiện nay, một số sinh viên tại Trường Đại học Công Nghệ Thông Tin Và Truyền Thông Việt Hàn - Đại Học Đà Nẵng (VKU) đang gặp khó khăn khi tính toán điểm trung bình tích luỹ (GPA) của mình. Nhiều sinh viên mong muốn cải thiện GPA, nhưng chưa biết chính xác điểm GPA sẽ thay đổi như thế nào sau khi họ nỗ lực cải thiện. Nhận thấy nhược điểm này, nhóm sinh viên VKU-GomChoi đã phát triển một công cụ có tên gọi "VKU Score" nhằm hỗ trợ sinh viên trong việc quản lý điểm số của mình.

Đặc biệt, công cụ "VKU Score" sử dụng kiến thức và công nghệ học máy (Machine Learning) để cung cấp gợi ý cho sinh viên về những học phần nên học cải thiện. Bằng cách phân tích dữ liệu điểm số và tín chỉ của sinh viên, công cụ có khả năng đưa ra đề xuất về những môn học có tiềm năng tăng điểm GPA cao nhất khi được cải thiện. Điều này giúp sinh viên có một hướng dẫn cụ thể và hiệu quả để lập kế hoạch học tập của mình.

Công cụ "VKU Score" không chỉ giúp sinh viên tính toán và dự đoán điểm GPA sau khi cải thiện, mà còn giúp họ hiểu rõ hơn về quá trình tính điểm và quy trình đánh giá học tập tại Trường Đại học Công Nghệ Thông Tin Và Truyền Thông Việt Hàn - Đại Học Đà Nẵng. Điều này cho phép sinh viên có cái nhìn tổng quan về tình hình học tập của mình và đưa ra các quyết định thông minh để nâng cao điểm số và GPA.

Công cụ "VKU Score" là một giải pháp hữu ích và tiện lợi cho sinh viên VKU. Nhóm VKU-GomChoi đã tạo công cụ này không chỉ giúp tính toán điểm GPA một cách chính xác, mà còn cung cấp gợi ý và hướng dẫn cho sinh viên về cách cải thiện kết quả học tập của mình.

### 1.2. Các chức năng của VKU Score
#### 1.2.1 Tính GPA của sinh viên
Công cụ "VKU Score" là một giải pháp đáng tin cậy để tính toán điểm GPA của sinh viên tại Trường Đại học Văn Lang (VKU) với độ chính xác 100%. Các thao tác cực kì đơn giản, tất cả sinh viên VKU có thể thực hiện nhanh chóng và dễ dàng.

#### 1.2.2 Tính điểm sau khi học cải thiện
Nếu bạn đang có nhu cầu học cải thiện nhưng chưa biết được GPA sau khi cải thiện là bao nhiều, hãy cho chúng tôi biết mong muốn của bạn, VKU Score sẽ giúp bạn tính GPA sau khi cải thiện. Bạn chỉ cần chon điểm bạn mong muốn mà bạn muốn cải thiện của mỗi học phần.
#### 1.2.3 Gợi ý những học phần nên cải thiện
Công cụ VKU Score sẽ xem xét các thông tin từ bảng điểm của bạn, chẳng hạn như điểm số hiện tại của các học phần, số tín chỉ, và điểm GPA hiện tại. Bằng cách phân tích và xử lý dữ liệu này, VKU Score sẽ xây dựng một mô hình linear regression để dự đoán điểm GPA sau khi cải thiện.

Mô hình linear regression có thể tìm ra một mối quan hệ tuyến tính giữa các yếu tố đầu vào và điểm GPA. Dựa vào mô hình này, VKU Score sẽ đưa ra gợi ý cho bạn về những học phần có tiềm năng cao để cải thiện điểm GPA của bạn.
## 2. Hướng dẫn sử dụng
### 2.1. Cách lấy danh sách điểm

#### 2.1.1. Đăng nhập vào hệ thống đào tạo của sinh viên VKU
Truy cập vào trang [đăng nhập](https://daotao.vku.udn.vn/sv) của VKU. Người dùng cần có tài khoản của sinh viên trường VKU để thực hiện bước này.
<div align="center">
   <img src="https://i.ibb.co/RgvZjzh/image.png" alt="image" border="0">
</div>

#### 2.1.2. Truy cập vào trang điểm của sinh viên VKU
Sau khi đăng nhập thành công, truy cập vào trang [điểm](https://daotao.vku.udn.vn/sv/diem) của VKU. Tiếp theo người dùng cần đánh giá học phần và đánh giá sự cần thiết của tẩt cảp học phần.

<div align="center">
<img src="https://i.ibb.co/CzBqD45/image.png" alt="image" border="0">
</div>

#### 2.1.3. Sao chép mã hỗ trợ lấy danh sách điểm học phần

<i  class="text-danger" > Chúng tôi cam kết 100% không thu thập dữ liệu người dùng. Đoạn code này mục đích chỉ lấy thông tin điểm của người dùng ở phía frontend và không can thiệp vào hệ thống của trường. </i>

người dùng cần sao chép đoạn mã phía dưới để làm bước tiếp theo.
<details>
<summary> 🔴 Hiện thị mã tại đây 🔽 </summary>
<p>

```javascript
function decodeHtmlEntities(text) {
    const entities = [
        ['amp', '&'],
        ['apos', "'"],
        ['lt', '<'],
        ['gt', '>'],
        ['quot', '"'],
    ];
    for (let i = 0; i < entities.length; i++) {
        text = text.replace(new RegExp(`&${entities[i][0]};`, 'g'), entities[i][1]);
    }
    return text;
}
let table = document.getElementsByTagName('table');
let tableScore = table[1];
let elementScores = tableScore.getElementsByClassName('pointer');
let scoreAll = [];
for (let tr of elementScores) {
    let score = {};
    let tdList = tr.getElementsByTagName('td');

    score.id = tdList[0] ? tdList[0].innerHTML : '';
    if (score.id !== '') {
        score.id = parseInt(score.id);
    }
    // Remove unnecessary span tag in the "name" field
    let nameField = tdList[1] ? tdList[1].innerHTML : '';
    score.name = nameField.replace(/<[^>]+>/g, '').trim();
    // xoá tất cả các ký tự đặc biệt
    score.name = decodeHtmlEntities(nameField.replace(/<[^>]+>/g, '').replace('!!', '')).trim();

    if (score.name === '') {
        continue;
    }
    score.countTC = tdList[2] ? tdList[2].innerHTML : '';
    if (score.countTC !== '') {
        score.countTC = parseInt(score.countTC);
    }
    score.countLH = tdList[3] ? tdList[3].innerHTML : '';
    if (score.countLH !== '') {
        score.countLH = parseInt(score.countLH);
    }
    score.scoreCC = tdList[4] ? tdList[4].innerHTML.trim() : '';
    if (score.scoreCC !== '') {
        score.scoreCC = parseFloat(score.scoreCC);
    }
    score.scoreBT = tdList[5] ? tdList[5].innerHTML : '';
    if (score.scoreBT !== '') {
        score.scoreBT = parseFloat(score.scoreBT);
    }
    score.scoreGK = tdList[6] ? tdList[6].innerHTML : '';
    if (score.scoreGK !== '') {
        score.scoreGK = parseFloat(score.scoreGK);
    }
    score.scoreCK = tdList[7] ? tdList[7].innerHTML : '';
    if (score.scoreCK !== '') {
        score.scoreCK = parseFloat(score.scoreCK);
    }
    // Extract values from <b> tags in scoreT10 and scoreCh fields
    let scoreT10Field = tdList[8] ? tdList[8].innerHTML : '';
    let scoreT10Match = scoreT10Field.match(/<b>(.*?)<\/b>/);
    score.scoreT10 = scoreT10Match ? scoreT10Match[1] : '';
    if (score.scoreT10 !== '') {
        score.scoreT10 = parseFloat(score.scoreT10);
    }
    let scoreChField = tdList[9] ? tdList[9].innerHTML : '';
    let scoreChMatch = scoreChField.match(/<b[^>]*>(.*?)<\/b>/);
    score.scoreCh = scoreChMatch ? scoreChMatch[1] : '';
    scoreAll.push(score);
}
let duplicate = {};
scoreAll.forEach((score) => {
    if (!duplicate[score.name]) {
        duplicate[score.name] = score;
    } else {
        if (score.scoreT10 > duplicate[score.name].scoreT10) {
            duplicate[score.name] = score;
        }
    }
});
scoreAll = Object.values(duplicate);
let dataDownload = {
    scoreAll,
};
let json = JSON.stringify(dataDownload);
const blob = new Blob([json], { type: 'application/json' });
const url = URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'diem.json';
link.click();
URL.revokeObjectURL(url);
link.remove();
```
</p>
</details>

#### 2.1.4. Sử dụng Developer Tools để tải file điem.json

Mở chế độ `Developer Tools` của trình duyệt.
   
Các cách mở `Developer Tools`:
- Bấm tổ hợp phím `F12` hoặc `Fn + F12`(nếu thiết bị cần thêm phím `Fn`) trên bàn phím
- Trên trình duyệt Chrome, Edge, Opera, Vivaldi, Brave, Coc Coc, Yandex, Firefox ...: Nhấn tổ hợp phím `Ctrl + Shift + I` hoặc `F12`
- Trên trình duyệt Safari: Nhấn tổ hợp phím `Option + Command + I`
- Hoặc có thể click chuột phải vào trang web 
  - Nếu sử dụng ngôn ngữ tiếng Anh: Chọn `Inspect` hoặc `Inspect Element`
  - Nếu sử dụng ngôn ngữ tiếng Việt: Chọn `Kiểm tra` hoặc `Kiểm tra phần tử`

Sau khi mở `Developer Tools` thành công, chọn tab `Console`, dán đoạn mã vừa sao chép vào `Console` rồi nhấn `Enter`
<div align="center">
<img src="https://i.ibb.co/j9tcg4b/image.png" alt="image" border="0">
</div>

Ngay lập tức, file điểm sẽ được tải xuống máy tính của người dùng với tên là `diem.json`

<div align="center">
<img src="https://i.ibb.co/QCzyV7y/image.png" alt="image" border="0">
</div>

### 2.2. Sử dụng VKU Score
#### 2.2.1. Tải dữ liệu điểm lên hệ thống

Truy cập trang chủ của [VKU SCORE](https://nam077.github.io/vku-score-v2)

```
https://nam077.github.io/vku-score-v2   
```
Bấm vào nút `Chọn file` và chọn file `diem.json` vừa tải xuống ở bước trên hoăc kéo thả file `diem.json` vào ô chọn file

<div align="center">
<img src="https://i.ibb.co/3mYVvnn/image.png" alt="image" border="0">
</div>

Sau khi xong dữ liệu điểm sẽ được hiển thị trên trang web.

<div align="center">
<img src="https://i.ibb.co/m9f2XQB/image.png" alt="image" border="0">
</div>

#### 2.2.2. Tính điểm GPA
Sau khi bằm vào trang web, và chọn file `diem.json` vừa tải xuống ở bước trên hođc kéo thả file `diem.json` vào ô chọn file, điểm GPA của bạn lập tức được tính ở phần GPA cũ.
<div align="center">
<img src="https://i.ibb.co/m9f2XQB/image.png" alt="image" border="0">
</div>
Điểm GPA này được tính dựa trên những học phần mà bạn đã có điểm (Những học phần trường VKU chưa vào điểm sẽ không được tính).


Bạn cũng có thể thêm những học phần chưa vào điểm, hoặc những học phần của học kì tiếp theo vào, VKU Score sẽ tính điểm GPA cho bạn.

#### 2.2.3. Xem điểm sau khi cải thiện

Ở giao diện chính của [VKU SCORE](https://nam077.github.io/vku-score-v2), người dùng có thể xem điểm sau khi cải thiện bằng cách
đổi các điểm ở mỗi hàng ở cột `Thay đổi` 

<div align="center">
<img src="https://i.ibb.co/YBPvycv/image.png" alt="image" border="0">
</div>

Sau khi thay đổi giá trị thì hệ thống sẽ tự động tính toán điểm của người dùng và hiển thị `GPA Mới`

<div align="center">
<img src="https://i.ibb.co/4p5L0y8/image.png" alt="image" border="0">
</div>       

#### 2.2.4. Gợi ý đánh giá học phần

Ở giao diện chính của [VKU SCORE](https://nam077.github.io/vku-score-v2) người dùng có thể xem gợi ý đánh giá học phần bằng cách nhấn vào nút `Gợi ý cải thiện học phần` 
ở góc dưới bên phải của trang web.
 
<div align="center">
<img src="https://i.ibb.co/qkr8nXD/image.png" alt="image" border="0">
</div>

Công cụ này sẽ dựa trên dữ liệu điểm của người dùng sau đó tự động tính toán các thế mạnh của người dùng và đưa ra gợi ý đánh giá học phần. 

Sau khi đã tính toán xong một `Popup` sẽ hiện ra. Với một bảng là dữ liệu các học phần gợi ý cải thiện. Được hiển thị theo độ ưu tiên từ trên xuống dưới.

<div align="center">
<img src="https://i.ibb.co/0tgFhf2/image.png" alt="image" border="0">
</div>

Người dùng cũng có thể thay đổi các giá trị điểm của các học phần ở cột `Thay đổi` để xem điểm của người dùng sẽ thay đổi như thế nào khi người dùng cải thiện điểm của các học phần đó.

<div align="center">
<img src="https://i.ibb.co/GJVzFNd/image.png" alt="image" border="0">
</div>

### 2.3. Tiện ích bổ sung cho VKU SCORE

Truy cập vào <a href=https://daotao.vku.udn.vn/sv>https://daotao.vku.udn.vn/sv/</a>

Sau đó tiến hành đăng nhập tài khoản vào

Truy cập vào <a href="https://daotao.vku.udn.vn/sv/diem">https://daotao.vku.udn.vn/sv/diem</a>

Ở tab hiện tại đang truy cập đến `https://daotao.vku.udn.vn/sv/diem` Ấn `F12` hoặc chuột phải vào trang rồi click vào `Inspect Element` để vào Development tool của trình duyệt.

#### 2.3.1. Đánh giá lớp học phần
Mở file <a href=https://github.com/Nam077/VKU_ToolAuto_Danh_Gia_Hoc_Phan/blob/master/toolDanhGiaLopHocPhan.js>`toolDanhGiaLopHocPhan.js`</a> sau đó copy nội dung. Quay trở lại trình duyệt ở DevTool bấm vào mục Console sau đó dán nội dụng vào. Tiến hành nhấn nút `Enter` để tool tiến hành quét các học phần, sau đó  sẽ tự động đánh giá các học phần chưa đánh giá.

#### 2.3.2 Đánh giá sự cần thiết của học phần
Mở file <a href=https://github.com/Nam077/VKU_ToolAuto_Danh_Gia_Hoc_Phan/blob/master/toolDanhGiaSuCanThiet.js>`toolDanhGiaSuCanThiet.js`</a>sau đó copy nội dung. Quay trở lại trình duyệt ở DevTool bấm vào mục Console sau đó dán nội dụng vào. Tiến hành nhấn nút `Enter` để tool tiến hành quét các học phần, sau đó  sẽ tự động đánh giá các học phần chưa đánh giá.

 > ⚠️: Lưu ý mọi người không được spam quá nhiều lần tránh việc web trường quá tải, xin cảm ơn