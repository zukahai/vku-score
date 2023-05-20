// Coding by Nam077 
console.log("Tool tự đánh giá học phần siu cấp vjp pro chả cần làm gì");
let level = "5";
let doKhoMonHoc = "Khá ổn";
let giaoTrinh = "Giáo trình đầy đủ";
let giaoVien = "Có tâm, và giảng dễ hiểu";
let coSoVatChat = "Khá đáp ứng nhu cầu";
let tuLuan = [doKhoMonHoc, giaoTrinh, giaoVien, coSoVatChat];
let traloi = {
    "traloi[2][]": [
        level
    ],
    "traloi[3][]": [
        level
    ],
    "traloi[4][]": [
        level
    ],
    "traloi[5][]": [
        level
    ],
    "traloi[7][]": [
        level
    ],
    "traloi[8][]": [
        level
    ],
    "traloi[9][]": [
        level
    ],
    "traloi[10][]": [
        level
    ],
    "traloi[11][]": [
        level
    ],
    "traloi[12][]": [
        level
    ],
    "traloi[13][]": [
        level
    ],
    "traloi[14][]": [
        level
    ],
    "traloi[15][]": [
        level
    ],
    "traloi[16][]": [
        level
    ],
    "traloi[17][]": [
        level
    ],
    "traloi[19][]": [
        level
    ],
    "traloi[20][]": [
        level
    ],
    "traloi[22][]": [
        level
    ],
    "traloi[23][]": [
        level
    ],
    "traloi[24][]": [
        level
    ],
    "traloi[25][]": [
        level
    ],
    "traloi[26][]": [
        level
    ],
    "traloi[27][]": [
        level
    ],
    "traloi[28][]": [
        level
    ],
    "traloi[29][]": [
        level
    ],
    "traloi[30][]": [
        level
    ],
    "traloi[31][]": [
        level
    ]
}

async function getFormData() {
    const tags = document.querySelectorAll(
        'a[href*="https://daotao.vku.udn.vn/sv/khao-sat/cau-hoi-khao-sat/"]');
    const links = [];
    tags.forEach(tag => links.push(tag.href));

    for (let i = 0; i < links.length; i++) {
        console.log(`Tiến trình ${i + 1}/${links.length}`);
        await new Promise(resolve => {
            $.ajax({
                type: "GET",
                url: links[i],
                cache: false,
                success: function (data) {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(data, 'text/html');
                    const form = doc.querySelector('form#demo-form2');
                    const action = form.getAttribute('action');
                    const token = doc.querySelector('input[name="_token"]').value;
                    const idlop = doc.querySelector('#idlop').value; // use `doc` instead of `document`
                    try {
                        $.ajax({
                            type: "POST",
                            url: action,
                            data: {
                                _token: token,
                                idlop: idlop,
                                traloi: traloi,
                                tuluan: tuLuan
                            },
                            success: function (data) {
                                console.log(`Học phần ${i + 1}/${links.length} thành công!`);
                                resolve();
                            }
                        });
                    } catch (error) {
                        console.error(`Học phần ${i + 1}/${links.length} thất bại!`);
                    }
                }
            });
        });
    }
}
getFormData();


//
