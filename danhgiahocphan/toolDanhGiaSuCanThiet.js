// Coding by Nam077 
console.log("Tool tự đánh giá học phần siu cấp vjp pro chả cần làm gì");
let value = "3" // 1, 2, 3;

async function update(hocphan_id, value) {
    url = "/sv/cap-nhat-khao-sat-hoc-phan";
    await new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: url,
            cache: 'false',
            data: {
                hocphan_id: hocphan_id,
                value: value
            },
            success: function (data) {
                console.log(data);
                resolve(data);
            }
        });
    })
}
const links = document.querySelectorAll('a[href*="/sv/khao-sat-hoc-phan?id="]');
const ids = []
links.forEach((link, index) => {
    ids.push(link.href.split('=')[1]);
});
for (let i = 0; i < links.length; i++) {
    console.log(`Tiến trình ${i + 1}/${links.length}`);
    try {
        await update(ids[i], value);
        console.log(`Tiến trình ${i + 1}/${links.length} thành công!`);
    } catch (error) {
        console.log(`Tiến trình ${i + 1}/${links.length} thất bại!`);
    }
}
