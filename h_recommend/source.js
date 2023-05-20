const subjects = [
    {
        "name": "Cơ sở dữ liệu",
        "so_tin_chi": "2",
        "tags": [ "sql"]
    },
    {
        "name": "Tin học đại cương",
        "so_tin_chi": "3",
        "tags": ["logic", "programming", "C++"]
    },
    {
        "name": "Tiếng Anh chuyên ngành 1 IT",
        "so_tin_chi": "2",
        "tags": ["tacn"]
    },
    {
        "name": "Nhập môn ngành và kỹ năng mềm IT",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Tiếng Anh 1",
        "so_tin_chi": "3",
        "tags": ["english", "ta"]
    },
    {
        "name": "Lập trình hướng đối tượng và Java cơ bản",
        "so_tin_chi": "3",
        "tags": ["java", "programming"]
    },
    {
        "name": "Đại số",
        "so_tin_chi": "2",
        "tags": ["logic"]
    },
    {
        "name": "Nguyên lý hệ điều hành",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Công nghệ Web",
        "so_tin_chi": "3",
        "tags": ["web"]
    },
    {
        "name": "Đồ án cơ sở 1 - IT",
        "so_tin_chi": "2",
        "tags": ["web"]
    },
    {
        "name": "Vật lý",
        "so_tin_chi": "2",
        "tags": ["logic", "math"]
    },
    {
        "name": "Cấu trúc dữ liệu và giải thuật",
        "so_tin_chi": "3",
        "tags": ["programming", "C++"]
    },
    {
        "name": "Lập trình Java nâng cao",
        "so_tin_chi": "2",
        "tags": ["java", "programming"]
    },
    {
        "name": "Tiếng Anh chuyên ngành 2",
        "so_tin_chi": "2",
        "tags": ["tacn", "english"]
    },
    {
        "name": "Kiến trúc máy tính",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Tiếng Anh 2",
        "so_tin_chi": "2",
        "tags": ["english", "ta"]
    },
    {
        "name": "Đồ án cơ sở 2_IT",
        "so_tin_chi": "2",
        "tags": ["doan", "web"]
    },
    {
        "name": "Chuyên đề 1 (IT)",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Tiếng Anh 3",
        "so_tin_chi": "2",
        "tags": ["english", "ta"]
    },
    {
        "name": "Phân tích và thiết kế hệ thống",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Tiếng Anh chuyên ngành & thực hành 1",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Công nghệ web nâng cao",
        "so_tin_chi": "3",
        "tags": ["default"]
    },
    {
        "name": "Toán rời rạc",
        "so_tin_chi": "2",
        "tags": ["logic", "math"]
    },
    {
        "name": "Hệ thống số",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Mạng máy tính",
        "so_tin_chi": "2",
        "tags": ["network"]
    },
    {
        "name": "Công nghệ phần mềm",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Chuyên đề 2",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Vi điều khiển",
        "so_tin_chi": "3",
        "tags": ["IOT"]
    },
    {
        "name": "Giải tích",
        "so_tin_chi": "2",
        "tags": ["logic", "math"]
    },
    {
        "name": "Tiếng Anh chuyên ngành & thực hành 2",
        "so_tin_chi": "2",
        "tags": ["tacn", "english"]
    },
    {
        "name": "Xác suất thống kê",
        "so_tin_chi": "2",
        "tags": ["math", "logic"]
    },
    {
        "name": "Đồ án cơ sở 3 IT",
        "so_tin_chi": "2",
        "tags": ["doan", "app"]
    },
    {
        "name": "Lập trình di động",
        "so_tin_chi": "3",
        "tags": ["app"]
    },
    {
        "name": "Thực tập doanh nghiệp IT",
        "so_tin_chi": "1",
        "tags": ["default"]
    },
    {
        "name": "Automat và Ngôn ngữ hình thức",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Chuyên đề 3 (IT)",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Đồ án cơ sở 4 (IT)",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Đồ họa máy tính",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Lập trình mạng",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Quản lý dự án",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Quản trị mạng",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Trí tuệ nhân tạo",
        "so_tin_chi": "2",
        "tags": ["AI", "python"]
    },
    {
        "name": "Trình biên dịch",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Chuyên đề 4 IT",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Đồ án cơ sở 5 IT",
        "so_tin_chi": "2",
        "tags": ["python", "AI"]
    },
    {
        "name": "Kiểm thử phần mềm",
        "so_tin_chi": "2",
        "tags": ["tester"]
    },
    {
        "name": "Xử lý ảnh",
        "so_tin_chi": "2",
        "tags": ["python"]
    },
    {
        "name": "Lập trình hệ thống",
        "so_tin_chi": "3",
        "tags": ["programming"]
    },
    {
        "name": "Phân tích và thiết kế giải thuật",
        "so_tin_chi": "3",
        "tags": ["default"]
    },
    {
        "name": "Xử lý tín hiệu số",
        "so_tin_chi": "2",
        "tags": ["logic", "math"]
    },
    {
        "name": "Hình họa",
        "so_tin_chi": "3",
        "tags": ["default"]
    },
    {
        "name": "Triết học Mác - Lênin",
        "so_tin_chi": "3",
        "tags": ["memorize"]
    },
    {
        "name": "Tư tưởng Hồ Chí Minh",
        "so_tin_chi": "2",
        "tags": ["memorize"]
    },
    {
        "name": "Pháp luật đại cương",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Chuyên đề 5 (IT)",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Đồ án chuyên ngành 1 (IT)",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Lập trình trong windows",
        "so_tin_chi": "3",
        "tags": ["default"]
    },
    {
        "name": "Tương tác người - máy",
        "so_tin_chi": "3",
        "tags": ["design"]

    },
    {
        "name": "Lập trình trò chơi trên máy tính",
        "so_tin_chi": "3",
        "tags": ["default"]

    },
    {
        "name": "Thương mại điện tử",
        "so_tin_chi": "3",
        "tags": ["default"]

    },
    {
        "name": "Linux & phần mềm nguồn mở",
        "so_tin_chi": "3",
        "tags": ["default"]

    },
    {
        "name": "Xử lý ngôn ngữ tự nhiên",
        "so_tin_chi": "3",
        "tags": ["python"]

    },
    {
        "name": "Bảo mật và An toàn hệ thống thông tin",
        "so_tin_chi": "2",
        "tags": ["english", "logic"]
    },
    {
        "name": "Kỹ thuật truyền số liệu",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Thiết kế đồ họa động và hoạt hình",
        "so_tin_chi": "3",
        "tags": ["default"]

    },
    {
        "name": "Kinh tế chính trị Mác - Lênin",
        "so_tin_chi": "2",
        "tags": ["memorize"]
    },
    {
        "name": "Lịch sử Đảng Cộng sản Việt Nam",
        "so_tin_chi": "2",
        "tags": ["memorize"]
    },
    {
        "name": "Chuyên đề 6 IT",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Đồ án chuyên ngành 2 IT",
        "so_tin_chi": "2",
        "tags": ["default"]
    },
    {
        "name": "Hệ cơ sở dữ liệu phân tán",
        "so_tin_chi": "3",
        "tags": ["data"]

    },
    {
        "name": "Phân tích, thiết kế mạng",
        "so_tin_chi": "3",
        "tags": ["network"]

    },
    {
        "name": "Mạng không dây và di động",
        "so_tin_chi": "3",
        "tags": ["network"]

    },
    {
        "name": "Điện toán đám mây",
        "so_tin_chi": "3",
        "tags": ["data"]

    },
    {
        "name": "Mật mã học",
        "so_tin_chi": "3",
        "tags": ["english", "logic"]

    },
    {
        "name": "Thiết kế và lập trình tương tác",
        "so_tin_chi": "3",
        "tags": ["design"]

    },
    {
        "name": "Thiết kế đồ họa 3D",
        "so_tin_chi": "3",
        "tags": ["design"]

    },
    {
        "name": "Thị giác máy tính",
        "so_tin_chi": "3",
        "tags": ["python"]

    },
    {
        "name": "Xuất bản Truyền thông",
        "so_tin_chi": "3",
        "tags": ["default"]

    },
    {
        "name": "Kỹ xảo phim ảnh - truyền hình",
        "so_tin_chi": "3",
        "tags": ["default"]

    },
    {
        "name": "Chủ nghĩa xã hội khoa học",
        "so_tin_chi": "2",
        "tags": ["memorize"]
    },
    {
        "name": "Thực tập tốt nghiệp (IT)",
        "so_tin_chi": "3",
        "tags": ["intern"]

    },
    {
        "name": "Đồ án tốt nghiệp (IT)",
        "so_tin_chi": "10",
        "tags": ["doan"]
    }
]



const hocphan = {
    "scoreAll": [
        {
          "id": 1,
          "name": "Nhập môn ngành và kỹ năng mềm IT",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": "",
          "scoreBT": "",
          "scoreGK": "",
          "scoreCK": 9,
          "scoreT10": 9,
          "scoreCh": "A"
        },
        {
          "id": 2,
          "name": "Lập trình hướng đối tượng và Java cơ bản",
          "countTC": 3,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": 7,
          "scoreGK": 8,
          "scoreCK": 8.5,
          "scoreT10": 8.3,
          "scoreCh": "B"
        },
        {
          "id": 3,
          "name": "Tin học đại cương",
          "countTC": 3,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": 10,
          "scoreGK": 8,
          "scoreCK": 10,
          "scoreT10": 9.6,
          "scoreCh": "A"
        },
        {
          "id": 4,
          "name": "Tiếng Anh chuyên ngành 1 IT",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 6,
          "scoreBT": "",
          "scoreGK": 7,
          "scoreCK": 5,
          "scoreT10": 5.6,
          "scoreCh": "C"
        },
        {
          "id": 5,
          "name": "Đại số",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": "",
          "scoreGK": 7,
          "scoreCK": 6,
          "scoreT10": 7,
          "scoreCh": "B"
        },
        {
          "id": 6,
          "name": "Tiếng Anh 1",
          "countTC": 3,
          "countLH": 1,
          "scoreCC": 8,
          "scoreBT": "",
          "scoreGK": 5.5,
          "scoreCK": 6,
          "scoreT10": 6.3,
          "scoreCh": "C"
        },
        {
          "id": 7,
          "name": "Cơ sở dữ liệu",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": "",
          "scoreGK": 6,
          "scoreCK": 6,
          "scoreT10": 6.8,
          "scoreCh": "C"
        },
        {
          "id": 8,
          "name": "Tiếng Anh chuyên ngành 2",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 6,
          "scoreBT": "",
          "scoreGK": 8,
          "scoreCK": 5,
          "scoreT10": 5.8,
          "scoreCh": "C"
        },
        {
          "id": 9,
          "name": "Công nghệ Web",
          "countTC": 3,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": 9.5,
          "scoreGK": 7,
          "scoreCK": 6.5,
          "scoreT10": 7.5,
          "scoreCh": "B"
        },
        {
          "id": 10,
          "name": "Nguyên lý hệ điều hành",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": "",
          "scoreGK": 6,
          "scoreCK": 6,
          "scoreT10": 6.8,
          "scoreCh": "C"
        },
        {
          "id": 11,
          "name": "Đồ án cơ sở 1 - IT",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": "",
          "scoreBT": "",
          "scoreGK": "",
          "scoreCK": 5,
          "scoreT10": 5,
          "scoreCh": "D"
        },
        {
          "id": 12,
          "name": "Vật lý",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": "",
          "scoreGK": 7,
          "scoreCK": 3.5,
          "scoreT10": 5.5,
          "scoreCh": "C"
        },
        {
          "id": 13,
          "name": "Kiến trúc máy tính",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 8,
          "scoreBT": "",
          "scoreGK": 8,
          "scoreCK": 5,
          "scoreT10": 6.2,
          "scoreCh": "C"
        },
        {
          "id": 14,
          "name": "Lập trình Java nâng cao",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": 9,
          "scoreGK": 8,
          "scoreCK": 6,
          "scoreT10": 7.3,
          "scoreCh": "B"
        },
        {
          "id": 15,
          "name": "Tiếng Anh 2",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 7,
          "scoreBT": "",
          "scoreGK": 8,
          "scoreCK": 3,
          "scoreT10": 4.8,
          "scoreCh": "D"
        },
        {
          "id": 16,
          "name": "Cấu trúc dữ liệu và giải thuật",
          "countTC": 3,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": 10,
          "scoreGK": 9,
          "scoreCK": 10,
          "scoreT10": 9.8,
          "scoreCh": "A"
        },
        {
          "id": 17,
          "name": "Mạng máy tính",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": 7,
          "scoreGK": 6,
          "scoreCK": 6.5,
          "scoreT10": 6.8,
          "scoreCh": "C"
        },
        {
          "id": 18,
          "name": "Phân tích và thiết kế hệ thống",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 6,
          "scoreBT": 7.5,
          "scoreGK": 6,
          "scoreCK": 7,
          "scoreT10": 6.8,
          "scoreCh": "C"
        },
        {
          "id": 19,
          "name": "Toán rời rạc",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": "",
          "scoreGK": 9,
          "scoreCK": 9,
          "scoreT10": 9,
          "scoreCh": "A"
        },
        {
          "id": 20,
          "name": "Tiếng Anh 3",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": "",
          "scoreGK": 4,
          "scoreCK": 5,
          "scoreT10": 5.8,
          "scoreCh": "C"
        },
        {
          "id": 21,
          "name": "Công nghệ web nâng cao",
          "countTC": 3,
          "countLH": 1,
          "scoreCC": 8,
          "scoreBT": 10,
          "scoreGK": 7,
          "scoreCK": 7,
          "scoreT10": 7.7,
          "scoreCh": "B"
        },
        {
          "id": 22,
          "name": "Tiếng Anh chuyên ngành & thực hành 1",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 8,
          "scoreBT": "",
          "scoreGK": 6.5,
          "scoreCK": 5.5,
          "scoreT10": 6.2,
          "scoreCh": "C"
        },
        {
          "id": 23,
          "name": "Hệ thống số",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 7,
          "scoreBT": "",
          "scoreGK": 8,
          "scoreCK": 7.5,
          "scoreT10": 7.5,
          "scoreCh": "B"
        },
        {
          "id": 24,
          "name": "Chuyên đề 1 (IT)",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": "",
          "scoreBT": "",
          "scoreGK": 0,
          "scoreCK": 7,
          "scoreT10": 7,
          "scoreCh": "B"
        },
        {
          "id": 25,
          "name": "Đồ án cơ sở 2_IT",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 7,
          "scoreBT": "",
          "scoreGK": "",
          "scoreCK": 9,
          "scoreT10": 8.4,
          "scoreCh": "B"
        },
        {
          "id": 44,
          "name": "Xác suất thống kê",
          "countTC": 2,
          "countLH": 2,
          "scoreCC": 8,
          "scoreBT": 4,
          "scoreGK": 3,
          "scoreCK": 5.5,
          "scoreT10": 5,
          "scoreCh": "D"
        },
        {
          "id": 27,
          "name": "Công nghệ phần mềm",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": "",
          "scoreGK": 5,
          "scoreCK": 7.3,
          "scoreT10": 7.2,
          "scoreCh": "B"
        },
        {
          "id": 28,
          "name": "Vi điều khiển",
          "countTC": 3,
          "countLH": 1,
          "scoreCC": 7,
          "scoreBT": 7,
          "scoreGK": 7,
          "scoreCK": 7,
          "scoreT10": 7,
          "scoreCh": "B"
        },
        {
          "id": 29,
          "name": "Chuyên đề 2",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": "",
          "scoreBT": "",
          "scoreGK": "",
          "scoreCK": 6.75,
          "scoreT10": 6.8,
          "scoreCh": "C"
        },
        {
          "id": 30,
          "name": "Giải tích",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": "",
          "scoreGK": 7,
          "scoreCK": 5.5,
          "scoreT10": 6.5,
          "scoreCh": "C"
        },
        {
          "id": 31,
          "name": "Lập trình di động",
          "countTC": 3,
          "countLH": 1,
          "scoreCC": 7,
          "scoreBT": 8,
          "scoreGK": 8,
          "scoreCK": 9,
          "scoreT10": 8.4,
          "scoreCh": "B"
        },
        {
          "id": 32,
          "name": "Tiếng Anh chuyên ngành & thực hành 2",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 8,
          "scoreBT": "",
          "scoreGK": 9,
          "scoreCK": 7,
          "scoreT10": 7.6,
          "scoreCh": "B"
        },
        {
          "id": 33,
          "name": "Lập trình mạng",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": 7,
          "scoreGK": 8,
          "scoreCK": 10,
          "scoreT10": 8.9,
          "scoreCh": "A"
        },
        {
          "id": 34,
          "name": "Quản lý dự án",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": "",
          "scoreGK": 7,
          "scoreCK": 8,
          "scoreT10": 8.2,
          "scoreCh": "B"
        },
        {
          "id": 35,
          "name": "Quản trị mạng",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": 8.8,
          "scoreGK": 8.8,
          "scoreCK": 8,
          "scoreT10": 8.5,
          "scoreCh": "A"
        },
        {
          "id": 36,
          "name": "Trí tuệ nhân tạo",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 9.3,
          "scoreBT": 7.8,
          "scoreGK": 7,
          "scoreCK": 4.9,
          "scoreT10": 6.3,
          "scoreCh": "C"
        },
        {
          "id": 37,
          "name": "Chuyên đề 3 (IT)",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": "",
          "scoreGK": 7,
          "scoreCK": 7.5,
          "scoreT10": 7.7,
          "scoreCh": "B"
        },
        {
          "id": 38,
          "name": "Automat và Ngôn ngữ hình thức",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 8.6,
          "scoreBT": "",
          "scoreGK": 9,
          "scoreCK": 6.5,
          "scoreT10": 7.4,
          "scoreCh": "B"
        },
        {
          "id": 39,
          "name": "Đồ họa máy tính",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": 5,
          "scoreGK": 8,
          "scoreCK": 6,
          "scoreT10": 6.6,
          "scoreCh": "C"
        },
        {
          "id": 40,
          "name": "Thực tập doanh nghiệp IT",
          "countTC": 1,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": "",
          "scoreGK": "",
          "scoreCK": 9.5,
          "scoreT10": 9.4,
          "scoreCh": "A"
        },
        {
          "id": 41,
          "name": "Đồ án cơ sở 4 (IT)",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 5,
          "scoreBT": "",
          "scoreGK": "",
          "scoreCK": 6.5,
          "scoreT10": 6.1,
          "scoreCh": "C"
        },
        {
          "id": 42,
          "name": "Chuyên đề 4 IT",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": "",
          "scoreGK": 8.5,
          "scoreCK": 8,
          "scoreT10": 8.5,
          "scoreCh": "A"
        },
        {
          "id": 43,
          "name": "Kỹ thuật truyền số liệu",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": "",
          "scoreGK": 9.6,
          "scoreCK": 8.3,
          "scoreT10": 8.9,
          "scoreCh": "A"
        },
        {
          "id": 45,
          "name": "Bảo mật và An toàn hệ thống thông tin",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": 7.3,
          "scoreGK": 9,
          "scoreCK": 7.8,
          "scoreT10": 8.1,
          "scoreCh": "B"
        },
        {
          "id": 46,
          "name": "Kiểm thử phần mềm",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": 6,
          "scoreGK": 7,
          "scoreCK": 4.25,
          "scoreT10": 5.6,
          "scoreCh": "C"
        },
        {
          "id": 47,
          "name": "Xử lý tín hiệu số",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": "",
          "scoreGK": 5,
          "scoreCK": 7.5,
          "scoreT10": 7.3,
          "scoreCh": "B"
        },
        {
          "id": 48,
          "name": "Trình biên dịch",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 7,
          "scoreBT": "",
          "scoreGK": 4,
          "scoreCK": 7,
          "scoreT10": 6.4,
          "scoreCh": "C"
        },
        {
          "id": 49,
          "name": "Xử lý ảnh",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": 8,
          "scoreGK": 8,
          "scoreCK": "",
          "scoreT10": 4.2,
          "scoreCh": "D"
        },
        {
          "id": 50,
          "name": "Đồ án cơ sở 3 IT",
          "countTC": 2,
          "countLH": 2,
          "scoreCC": 5,
          "scoreBT": "",
          "scoreGK": "",
          "scoreCK": 8.75,
          "scoreT10": 7.6,
          "scoreCh": "B"
        },
        {
          "id": 51,
          "name": "Đồ án cơ sở 5 IT",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 7,
          "scoreBT": "",
          "scoreGK": "",
          "scoreCK": 7,
          "scoreT10": 7,
          "scoreCh": "B"
        },
        {
          "id": 52,
          "name": "Pháp luật đại cương",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 8,
          "scoreBT": "",
          "scoreGK": 6.8,
          "scoreCK": 3.8,
          "scoreT10": 5.3,
          "scoreCh": "D"
        },
        {
          "id": 53,
          "name": "Triết học Mác - Lênin",
          "countTC": 3,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": "",
          "scoreGK": 9,
          "scoreCK": 6.5,
          "scoreT10": 7.7,
          "scoreCh": "B"
        },
        {
          "id": 54,
          "name": "Thị giác máy tính",
          "countTC": 3,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": 7.5,
          "scoreGK": 10,
          "scoreCK": 8.5,
          "scoreT10": 8.8,
          "scoreCh": "A"
        },
        {
          "id": 55,
          "name": "Tư tưởng Hồ Chí Minh",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": "",
          "scoreGK": 9.5,
          "scoreCK": 4.2,
          "scoreT10": 6.4,
          "scoreCh": "C"
        },
        {
          "id": 56,
          "name": "Chuyên đề 5 (IT)",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": 8,
          "scoreGK": 7.5,
          "scoreCK": 9,
          "scoreT10": 8.6,
          "scoreCh": "A"
        },
        {
          "id": 57,
          "name": "Xử lý ngôn ngữ tự nhiên",
          "countTC": 3,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": 6,
          "scoreGK": 9,
          "scoreCK": 8.9,
          "scoreT10": 8.5,
          "scoreCh": "A"
        },
        {
          "id": 58,
          "name": "Đồ án chuyên ngành 1 (IT)",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": "",
          "scoreGK": "",
          "scoreCK": 10,
          "scoreT10": 10,
          "scoreCh": "A"
        },
        {
          "id": 59,
          "name": "Lịch sử Đảng Cộng sản Việt Nam",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": "",
          "scoreGK": 9,
          "scoreCK": 6.6,
          "scoreT10": 7.8,
          "scoreCh": "B"
        },
        {
          "id": 60,
          "name": "Mật mã học",
          "countTC": 3,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": 7.5,
          "scoreGK": 8.5,
          "scoreCK": 6.3,
          "scoreT10": 7.4,
          "scoreCh": "B"
        },
        {
          "id": 61,
          "name": "Chuyên đề 6 IT",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": 8,
          "scoreGK": 8,
          "scoreCK": 8,
          "scoreT10": 8.2,
          "scoreCh": "B"
        },
        {
          "id": 62,
          "name": "Phân tích, thiết kế mạng",
          "countTC": 3,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": 8.2,
          "scoreGK": 8.5,
          "scoreCK": 8,
          "scoreT10": 8.2,
          "scoreCh": "B"
        },
        {
          "id": 63,
          "name": "Kinh tế chính trị Mác - Lênin",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": "",
          "scoreGK": 6.8,
          "scoreCK": 2.5,
          "scoreT10": 4.9,
          "scoreCh": "D"
        },
        {
          "id": 64,
          "name": "Đồ án chuyên ngành 2 IT",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": "",
          "scoreGK": "",
          "scoreCK": 9,
          "scoreT10": 9,
          "scoreCh": "A"
        },
        {
          "id": 65,
          "name": "Chủ nghĩa xã hội khoa học",
          "countTC": 2,
          "countLH": 1,
          "scoreCC": 10,
          "scoreBT": "",
          "scoreGK": 7,
          "scoreCK": 8,
          "scoreT10": 8.2,
          "scoreCh": "B"
        },
        {
          "id": 66,
          "name": "Đồ án tốt nghiệp (IT)",
          "countTC": 10,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": "",
          "scoreGK": "",
          "scoreCK": "",
          "scoreT10": "8.8",
          "scoreCh": "A"
        },
        {
          "id": 67,
          "name": "Thực tập tốt nghiệp (IT)",
          "countTC": 3,
          "countLH": 1,
          "scoreCC": 9,
          "scoreBT": "",
          "scoreGK": "",
          "scoreCK": "",
          "scoreT10": "8.6",
          "scoreCh": "A"
        }
      ]
}

function findTagsByName(name, subjects) {
    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.name === name)
            return subject.tags;
    }
}

function recommend(subjects, hocphan) {
    let tags = {};

    const score = {
        "A": 4,
        "B": 3,
        "C": 2,
        "D": 1,
        "F": 0,
        "": 4,
    }
    for (let i = 0; i < hocphan.scoreAll.length; i++) {
        const subject = hocphan.scoreAll[i];
        const tags_subject = findTagsByName(subject.name, subjects);
        if (tags_subject === undefined)
            tags = ["default"];
        for (let j = 0; j < tags_subject.length; j++) {
            if (tags[tags_subject[j]] === undefined) {
                tags[tags_subject[j]] = {
                    sum: 0,
                    count: 0
                }
            }
            tags[tags_subject[j]].sum += score[subject.scoreCh];
            tags[tags_subject[j]].count += 1;
        }
    }
    console.log(tags);
    let recommendHocPhan = [];
    for (let i = 0; i < hocphan.scoreAll.length; i++) {
        const subject = hocphan.scoreAll[i];
        let tags_subject = findTagsByName(subject.name, subjects);
        //sort by tags[tags_subject[j]].count
        tags_subject = tags_subject.sort((a, b) => {
          return tags[b].count - tags[a].count;
        })
        let sumScoreCh = 0;
        let countSubject = 0;
        let sum_difference = 0;
        for (let j = 0; j < tags_subject.length; j++) {
            sumScoreCh = (tags[tags_subject[j]].sum);
            countSubject = (tags[tags_subject[j]].count);
            sum_difference += (sumScoreCh / countSubject - score[subject.scoreCh]) / Math.pow(2, j);
        }
        
        recommendHocPhan.push({
            "name": subject.name,
            "sumScoreCh": subject.scoreCh,
            "countTch": subject.countTC,
            "tags": tags_subject,
            "difference": sum_difference
        })
    }
    // sort by difference
    recommendHocPhan.sort((a, b) => {
        return b.difference - a.difference
    })
    console.log(recommendHocPhan);
}

recommend(subjects, hocphan);