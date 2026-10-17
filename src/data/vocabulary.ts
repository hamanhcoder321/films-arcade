// Auto-generated from davidnvt.github.io/Films/ vocabulary arcade

export interface MatchPair {
  id: number;
  left: string;
  right: string;
}

export interface CategoryGroup {
  name: string;
  ids: number[];
}

export interface FillItem {
  id: number;
  text: string;
  viHint: string;
  answers: string[];
}

export interface MCQItem {
  q: string;
  options: string[];
  correct: number;
}

export interface TransItem {
  id: number;
  vi: string;
  hint: string;
  answers: string[];
}

export interface CollocationItem {
  q: string;
  options: string[];
  options_detail: { word: string; meaning: string }[];
  correct: number;
}

export interface G6Item {
  id: number;
  question: string;
  text: string;
  viHint: string;
  answers: string[];
  sampleAnswers: string[];
}

export const MATCH_PAIRS: MatchPair[] = [
  {
    "id": 0,
    "left": "have eclectic/diverse tastes (in film)",
    "right": "có gu (phim) đa dạng"
  },
  {
    "id": 1,
    "left": "be into something",
    "right": "thích thứ gì đó (informal)"
  },
  {
    "id": 2,
    "left": "Hollywood blockbuster",
    "right": "phim bom tấn Hollywood"
  },
  {
    "id": 3,
    "left": "romantic comedy / rom-com",
    "right": "phim hài lãng mạn"
  },
  {
    "id": 4,
    "left": "horror film",
    "right": "phim kinh dị"
  },
  {
    "id": 5,
    "left": "action-packed film",
    "right": "phim nhiều pha hành động"
  },
  {
    "id": 6,
    "left": "science fiction / sci-fi",
    "right": "phim khoa học viễn tưởng"
  },
  {
    "id": 7,
    "left": "documentary",
    "right": "phim tài liệu"
  },
  {
    "id": 8,
    "left": "personal taste",
    "right": "sở thích cá nhân"
  },
  {
    "id": 9,
    "left": "kind = type = genre",
    "right": "thể loại"
  },
  {
    "id": 10,
    "left": "provide entertainment",
    "right": "mang lại giải trí"
  },
  {
    "id": 11,
    "left": "offer people an opportunity to gain a better understanding of different cultures",
    "right": "mang đến cơ hội hiểu hơn về các nền văn hóa khác nhau"
  },
  {
    "id": 12,
    "left": "have its own unique appeal",
    "right": "có sức hút riêng"
  },
  {
    "id": 13,
    "left": "economical",
    "right": "tiết kiệm (chi phí)"
  },
  {
    "id": 14,
    "left": "privacy",
    "right": "sự riêng tư"
  },
  {
    "id": 15,
    "left": "immersive (experience)",
    "right": "(trải nghiệm) chân thực, cuốn hút"
  },
  {
    "id": 16,
    "left": "special effects",
    "right": "kỹ xảo"
  },
  {
    "id": 17,
    "left": "lively atmosphere",
    "right": "không khí sôi động"
  },
  {
    "id": 18,
    "left": "big-budget blockbuster",
    "right": "phim bom tấn kinh phí lớn"
  },
  {
    "id": 19,
    "left": "light-hearted film",
    "right": "phim nhẹ nhàng, giải trí"
  },
  {
    "id": 20,
    "left": "in the comfort of their own homes",
    "right": "trong sự thoải mái tại nhà riêng"
  },
  {
    "id": 21,
    "left": "hard to replicate",
    "right": "khó tái hiện/sao chép được"
  },
  {
    "id": 22,
    "left": "it comes down to personal preference",
    "right": "tùy thuộc vào sở thích cá nhân"
  },
  {
    "id": 23,
    "left": "possess the ability to express emotions",
    "right": "có khả năng thể hiện cảm xúc"
  },
  {
    "id": 24,
    "left": "express emotions convincingly",
    "right": "thể hiện cảm xúc một cách thuyết phục"
  },
  {
    "id": 25,
    "left": "emotional expressiveness",
    "right": "khả năng biểu đạt cảm xúc"
  },
  {
    "id": 26,
    "left": "convey a wide range of emotions",
    "right": "truyền tải nhiều cung bậc cảm xúc"
  },
  {
    "id": 27,
    "left": "put themselves in someone else's shoes",
    "right": "đặt mình vào vị trí người khác"
  },
  {
    "id": 28,
    "left": "portray a character convincingly",
    "right": "hóa thân vào nhân vật một cách thuyết phục"
  },
  {
    "id": 29,
    "left": "take on different roles",
    "right": "đảm nhận nhiều vai diễn khác nhau"
  },
  {
    "id": 30,
    "left": "be adaptable",
    "right": "có khả năng thích nghi"
  },
  {
    "id": 31,
    "left": "excel at (something)",
    "right": "xuất sắc/giỏi ở (điều gì đó)"
  },
  {
    "id": 32,
    "left": "the characters may feel flat",
    "right": "nhân vật có thể trở nên nhạt nhòa, thiếu chiều sâu"
  },
  {
    "id": 33,
    "left": "lack depth and authenticity",
    "right": "thiếu chiều sâu và tính chân thực"
  },
  {
    "id": 34,
    "left": "a highly competitive profession",
    "right": "một nghề cạnh tranh cao"
  },
  {
    "id": 35,
    "left": "aspiring actors",
    "right": "những người mong muốn trở thành diễn viên"
  },
  {
    "id": 36,
    "left": "rejection is a normal part of the job",
    "right": "bị từ chối là chuyện bình thường trong nghề"
  },
  {
    "id": 37,
    "left": "persistent and mentally resilient",
    "right": "kiên trì và vững vàng về tinh thần"
  },
  {
    "id": 38,
    "left": "the challenge can be worthwhile",
    "right": "thử thách đó xứng đáng để theo đuổi"
  },
  {
    "id": 39,
    "left": "coming-of-age film",
    "right": "phim về quá trình trưởng thành"
  },
  {
    "id": 40,
    "left": "thought-provoking film",
    "right": "bộ phim kích thích suy nghĩ"
  },
  {
    "id": 41,
    "left": "gripping storyline",
    "right": "cốt truyện hấp dẫn, lôi cuốn"
  },
  {
    "id": 42,
    "left": "plot twist",
    "right": "tình tiết bất ngờ"
  },
  {
    "id": 43,
    "left": "well-developed characters",
    "right": "những nhân vật được xây dựng tốt, có chiều sâu"
  },
  {
    "id": 44,
    "left": "a predictable plot",
    "right": "cốt truyện dễ đoán"
  },
  {
    "id": 45,
    "left": "keep someone on the edge of their seat",
    "right": "khiến ai đó hồi hộp, căng thẳng đến phút cuối"
  },
  {
    "id": 46,
    "left": "a star-studded cast",
    "right": "dàn diễn viên toàn ngôi sao"
  },
  {
    "id": 47,
    "left": "give a stellar performance",
    "right": "có một màn trình diễn xuất sắc"
  },
  {
    "id": 48,
    "left": "bring a character to life",
    "right": "thổi hồn vào nhân vật"
  },
  {
    "id": 49,
    "left": "have great on-screen chemistry",
    "right": "có sự ăn ý tuyệt vời trên màn ảnh"
  },
  {
    "id": 50,
    "left": "a compelling performance",
    "right": "màn trình diễn thuyết phục, cuốn hút"
  },
  {
    "id": 51,
    "left": "receive critical acclaim",
    "right": "nhận được sự ca ngợi từ giới phê bình"
  },
  {
    "id": 52,
    "left": "box-office hit",
    "right": "bộ phim thành công lớn về doanh thu phòng vé"
  },
  {
    "id": 53,
    "left": "be a commercial success",
    "right": "thành công về mặt thương mại"
  },
  {
    "id": 54,
    "left": "film adaptation",
    "right": "bản chuyển thể thành phim"
  },
  {
    "id": 55,
    "left": "be based on a true story",
    "right": "được dựa trên một câu chuyện có thật"
  },
  {
    "id": 56,
    "left": "soundtrack",
    "right": "nhạc phim"
  },
  {
    "id": 57,
    "left": "cinematography",
    "right": "kỹ thuật quay phim / nghệ thuật hình ảnh"
  },
  {
    "id": 58,
    "left": "director",
    "right": "đạo diễn"
  },
  {
    "id": 59,
    "left": "screenwriter",
    "right": "biên kịch"
  },
  {
    "id": 60,
    "left": "audition for a role",
    "right": "thử vai cho một vai diễn"
  },
  {
    "id": 61,
    "left": "land a role",
    "right": "giành được một vai diễn"
  },
  {
    "id": 62,
    "left": "break into the film industry",
    "right": "bước chân vào ngành công nghiệp điện ảnh"
  },
  {
    "id": 63,
    "left": "have a breakthrough role",
    "right": "có một vai diễn tạo bước đột phá"
  }
];

export const MATCH_EXAMPLES: Record<number, string> = {
  "0": "I have eclectic tastes in film, so I can enjoy a documentary one day and a horror film the next.",
  "1": "My brother is really into science-fiction films and rarely misses a new release.",
  "2": "The cinema was packed with people watching the latest Hollywood blockbusters.",
  "3": "She usually watches a romantic comedy when she wants something light and relaxing.",
  "4": "I avoid horror films because I get scared easily.",
  "5": "We chose an action-packed film to watch on the big screen.",
  "6": "Science fiction often explores what the future might look like.",
  "7": "I watched a documentary about wildlife conservation last night.",
  "8": "It is a matter of personal taste, so there is no single best genre.",
  "9": "What kind of film do you usually enjoy? I am particularly fond of thrillers.",
  "10": "Films can provide entertainment as well as teach us something new.",
  "11": "Foreign films offer people an opportunity to gain a better understanding of different cultures.",
  "12": "Watching films at home has its own unique appeal, especially for busy people.",
  "13": "Streaming services are generally more economical than going to the cinema every week.",
  "14": "Some people prefer watching films at home because they value their privacy.",
  "15": "A huge screen can provide a much more immersive experience.",
  "16": "Modern special effects can make imaginary worlds look believable.",
  "17": "The cinema has a lively atmosphere when a highly anticipated film is released.",
  "18": "Big-budget blockbusters often feature famous actors and spectacular special effects.",
  "19": "After a stressful day, I prefer a light-hearted film to something emotionally intense.",
  "20": "Many people enjoy watching films in the comfort of their own homes.",
  "21": "The atmosphere of a cinema is hard to replicate at home.",
  "22": "In the end, the choice comes down to personal preference.",
  "23": "Good actors possess the ability to express emotions naturally.",
  "24": "The actor was able to express emotions convincingly without saying much.",
  "25": "Emotional expressiveness helps actors make their performances more believable.",
  "26": "A skilled actor can convey a wide range of emotions through facial expressions and body language.",
  "27": "To play the role well, actors need to put themselves in someone else's shoes.",
  "28": "She portrayed the character convincingly and made the audience sympathise with her.",
  "29": "Versatile actors can take on different roles throughout their careers.",
  "30": "Actors need to be adaptable because every role presents different challenges.",
  "31": "She excels at playing complex characters with conflicting emotions.",
  "32": "Without strong acting, the characters may feel flat and unconvincing.",
  "33": "A film may lack depth and authenticity if the actors cannot connect with their roles.",
  "34": "Acting is a highly competitive profession with no guarantee of success.",
  "35": "Many aspiring actors move to major cities to pursue their dreams.",
  "36": "For actors, rejection is a normal part of the job.",
  "37": "Aspiring actors need to be persistent and mentally resilient.",
  "38": "The journey is difficult, but the challenge can be worthwhile if acting is your passion.",
  "39": "The coming-of-age film follows a teenager as she learns important lessons about life.",
  "40": "I enjoy thought-provoking films that stay in my mind long after they end.",
  "41": "The series has a gripping storyline that makes every episode hard to stop watching.",
  "42": "The final plot twist completely changed the way I understood the story.",
  "43": "Well-developed characters make it easier for audiences to become emotionally invested.",
  "44": "The film looked impressive, but the plot was too predictable.",
  "45": "The thriller kept me on the edge of my seat until the final scene.",
  "46": "The movie attracted attention because it featured a star-studded cast.",
  "47": "The lead actor gave a stellar performance and won several awards.",
  "48": "A talented actor can bring even a fictional character to life.",
  "49": "The two leads had great on-screen chemistry, which made their relationship believable.",
  "50": "Her compelling performance was one of the highlights of the film.",
  "51": "The film received critical acclaim for its original story and cinematography.",
  "52": "The movie became a box-office hit within its first week of release.",
  "53": "Although critics had mixed opinions, the film was a commercial success.",
  "54": "The movie is a film adaptation of a bestselling novel.",
  "55": "The drama is based on a true story, which makes it even more moving.",
  "56": "The soundtrack plays an important role in creating the mood of a film.",
  "57": "The cinematography was breathtaking, especially in the outdoor scenes.",
  "58": "The director worked closely with the actors to shape their performances.",
  "59": "The screenwriter created dialogue that sounded natural and realistic.",
  "60": "She had to audition for a role before the director made a final decision.",
  "61": "After years of small jobs, he finally landed a role in a major film.",
  "62": "Breaking into the film industry can be extremely difficult for newcomers.",
  "63": "That film gave the actress her breakthrough role and made her internationally famous."
};

export const MATCH_EXAMPLE_VI: Record<number, string> = {
  "0": "Tôi có gu xem phim khá đa dạng, nên có thể xem phim tài liệu hôm nay và phim kinh dị vào ngày mai.",
  "1": "Em trai tôi rất mê phim khoa học viễn tưởng và hiếm khi bỏ lỡ một bộ phim mới.",
  "2": "Rạp chiếu phim chật kín người xem những bộ phim bom tấn Hollywood mới nhất.",
  "3": "Cô ấy thường xem phim hài lãng mạn khi muốn thư giãn.",
  "4": "Tôi tránh phim kinh dị vì tôi rất dễ sợ.",
  "5": "Chúng tôi chọn một bộ phim hành động gay cấn để xem trên màn ảnh rộng.",
  "6": "Phim khoa học viễn tưởng thường khám phá tương lai có thể trông như thế nào.",
  "7": "Tối qua tôi xem một bộ phim tài liệu về bảo tồn động vật hoang dã.",
  "8": "Đó là vấn đề về sở thích cá nhân, nên không có thể loại nào phù hợp với tất cả mọi người.",
  "9": "Bạn thường thích thể loại nào? Tôi đặc biệt thích phim giật gân.",
  "10": "Phim vừa mang lại giải trí vừa có thể dạy chúng ta điều mới.",
  "11": "Phim nước ngoài giúp mọi người hiểu rõ hơn về các nền văn hóa khác.",
  "12": "Xem phim ở nhà có sức hấp dẫn riêng, nhất là với người bận rộn.",
  "13": "Các dịch vụ xem trực tuyến thường tiết kiệm hơn việc đi rạp mỗi tuần.",
  "14": "Một số người thích xem ở nhà vì họ coi trọng sự riêng tư.",
  "15": "Màn hình lớn có thể mang lại trải nghiệm đắm chìm hơn nhiều.",
  "16": "Hiệu ứng đặc biệt hiện đại có thể khiến thế giới tưởng tượng trông chân thực.",
  "17": "Rạp có bầu không khí sôi động khi một bộ phim được mong đợi ra mắt.",
  "18": "Phim bom tấn kinh phí lớn thường có diễn viên nổi tiếng và hiệu ứng ngoạn mục.",
  "19": "Sau ngày căng thẳng, tôi thích phim nhẹ nhàng hơn thứ gì quá nặng về cảm xúc.",
  "20": "Nhiều người thích xem phim trong sự thoải mái của chính ngôi nhà mình.",
  "21": "Bầu không khí của rạp chiếu phim khó tái hiện ở nhà.",
  "22": "Cuối cùng, sự lựa chọn phụ thuộc vào sở thích cá nhân.",
  "23": "Diễn viên giỏi có khả năng thể hiện cảm xúc tự nhiên.",
  "24": "Nam diễn viên thể hiện cảm xúc thuyết phục mà không cần nói nhiều.",
  "25": "Khả năng biểu đạt cảm xúc giúp phần diễn trở nên đáng tin hơn.",
  "26": "Diễn viên giỏi có thể truyền tải nhiều cung bậc cảm xúc qua nét mặt và ngôn ngữ cơ thể.",
  "27": "Để diễn tốt, diễn viên cần đặt mình vào hoàn cảnh của người khác.",
  "28": "Cô ấy khắc họa nhân vật thuyết phục và khiến khán giả đồng cảm.",
  "29": "Diễn viên đa năng có thể đảm nhận nhiều vai khác nhau trong sự nghiệp.",
  "30": "Diễn viên cần thích nghi vì mỗi vai diễn đều có thử thách khác nhau.",
  "31": "Cô ấy xuất sắc trong việc đóng những nhân vật phức tạp.",
  "32": "Nếu không có diễn xuất tốt, nhân vật có thể nhạt nhòa và thiếu sức thuyết phục.",
  "33": "Phim có thể thiếu chiều sâu và tính chân thực nếu diễn viên không kết nối với vai diễn.",
  "34": "Diễn xuất là nghề cạnh tranh cao và không đảm bảo thành công.",
  "35": "Nhiều diễn viên đầy tham vọng chuyển đến thành phố lớn để theo đuổi ước mơ.",
  "36": "Với diễn viên, sự từ chối là một phần bình thường của công việc.",
  "37": "Diễn viên đầy tham vọng cần kiên trì và có sức bền tinh thần.",
  "38": "Hành trình khó khăn, nhưng thử thách có thể xứng đáng nếu diễn xuất là đam mê.",
  "39": "Phim về quá trình trưởng thành theo chân một thiếu niên học những bài học quan trọng.",
  "40": "Tôi thích những bộ phim kích thích suy nghĩ và khiến tôi nhớ lâu sau khi xem.",
  "41": "Bộ phim có cốt truyện hấp dẫn khiến mỗi tập đều khó ngừng xem.",
  "42": "Tình tiết bất ngờ cuối phim thay đổi hoàn toàn cách tôi hiểu câu chuyện.",
  "43": "Nhân vật được xây dựng tốt khiến khán giả dễ đầu tư cảm xúc hơn.",
  "44": "Bộ phim ấn tượng nhưng cốt truyện quá dễ đoán.",
  "45": "Bộ phim giật gân khiến tôi hồi hộp đến tận cảnh cuối.",
  "46": "Bộ phim thu hút chú ý vì có dàn diễn viên toàn ngôi sao.",
  "47": "Nam diễn viên chính có màn trình diễn xuất sắc và giành nhiều giải thưởng.",
  "48": "Diễn viên tài năng có thể thổi hồn vào cả nhân vật hư cấu.",
  "49": "Hai diễn viên chính rất ăn ý trên màn ảnh nên mối quan hệ của họ đáng tin.",
  "50": "Màn trình diễn thuyết phục của cô ấy là điểm nổi bật của bộ phim.",
  "51": "Bộ phim nhận được lời khen từ giới phê bình nhờ câu chuyện và kỹ thuật quay độc đáo.",
  "52": "Bộ phim trở thành thành công lớn về doanh thu ngay trong tuần đầu.",
  "53": "Dù giới phê bình có ý kiến trái chiều, phim vẫn thành công thương mại.",
  "54": "Bộ phim là bản chuyển thể từ một tiểu thuyết bán chạy.",
  "55": "Phim chính kịch dựa trên câu chuyện có thật nên càng cảm động.",
  "56": "Nhạc phim đóng vai trò quan trọng trong việc tạo tâm trạng cho bộ phim.",
  "57": "Kỹ thuật quay phim đẹp đến nghẹt thở, nhất là ở cảnh ngoài trời.",
  "58": "Đạo diễn làm việc chặt chẽ với diễn viên để định hình phần thể hiện.",
  "59": "Biên kịch tạo ra lời thoại nghe tự nhiên và chân thực.",
  "60": "Cô ấy phải thử vai trước khi đạo diễn quyết định.",
  "61": "Sau nhiều năm làm việc nhỏ, cuối cùng anh ấy có được vai trong một phim lớn.",
  "62": "Bước chân vào ngành công nghiệp điện ảnh cực kỳ khó với người mới.",
  "63": "Bộ phim đó mang lại cho nữ diễn viên vai diễn đột phá và khiến cô nổi tiếng quốc tế."
};

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    "name": "Thể loại phim",
    "ids": [
      2,
      3,
      4,
      5,
      6,
      7,
      9,
      19
    ]
  },
  {
    "name": "Sở thích & gu cá nhân",
    "ids": [
      0,
      1,
      8,
      22
    ]
  },
  {
    "name": "Xem phim ở rạp vs tại nhà",
    "ids": [
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      20,
      21
    ]
  },
  {
    "name": "Phẩm chất & kỹ năng diễn xuất",
    "ids": [
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ]
  },
  {
    "name": "Nghề diễn viên & thử thách",
    "ids": [
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "name": "Cốt truyện & nội dung phim",
    "ids": [
      39,
      40,
      41,
      42,
      43,
      44,
      45
    ]
  },
  {
    "name": "Diễn xuất & thành công",
    "ids": [
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53
    ]
  },
  {
    "name": "Sản xuất phim & sự nghiệp",
    "ids": [
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63
    ]
  }
];

export const PAIR_COLORS: string[] = [
  "#D4EDDA",
  "#C8E6C9",
  "#B2DFDB",
  "#B3E5FC",
  "#BBDEFB",
  "#D1C4E9",
  "#E1BEE7",
  "#F8BBD0",
  "#FFCCBC",
  "#FFE0B2",
  "#FFF9C4",
  "#C8E6C9"
];

export const FILL_ALTERNATIVES: Record<number, string[]> = {
  "1": [
    "has eclectic tastes",
    "has diverse tastes"
  ],
  "2": [
    "into",
    "keen on"
  ],
  "3": [
    "hollywood blockbuster",
    "hollywood blockbusters"
  ],
  "4": [
    "romantic comedy",
    "rom-com"
  ],
  "5": [
    "horror film"
  ],
  "6": [
    "action-packed film",
    "action film"
  ],
  "7": [
    "science fiction",
    "sci-fi"
  ],
  "8": [
    "documentary"
  ],
  "9": [
    "personal taste",
    "personal preference",
    "individual taste"
  ],
  "10": [
    "genre",
    "kind",
    "type"
  ],
  "11": [
    "provide entertainment",
    "offer entertainment",
    "serve as entertainment"
  ],
  "12": [
    "has its own unique appeal",
    "has a unique charm",
    "offers its own charm"
  ],
  "13": [
    "economical",
    "cost-effective",
    "cheaper"
  ],
  "14": [
    "privacy"
  ],
  "15": [
    "immersive experience",
    "captivating experience",
    "engaging experience"
  ],
  "16": [
    "special effects",
    "visual effects"
  ],
  "17": [
    "lively atmosphere",
    "vibrant atmosphere",
    "exciting atmosphere"
  ],
  "18": [
    "in the comfort of their own homes",
    "from the comfort of their own homes"
  ],
  "19": [
    "comes down to personal preference",
    "depends on personal preference",
    "is a matter of personal taste"
  ],
  "20": [
    "hard to replicate",
    "difficult to replicate",
    "impossible to replicate"
  ],
  "21": [
    "gripping storyline",
    "engaging storyline",
    "compelling plot"
  ],
  "22": [
    "plot twist"
  ],
  "23": [
    "on the edge of my seat",
    "hooked"
  ],
  "24": [
    "predictable plot",
    "foreseeable plot",
    "cliché plot"
  ],
  "25": [
    "well-developed characters",
    "strong characters",
    "complex characters"
  ],
  "26": [
    "star-studded cast",
    "all-star cast",
    "stellar cast"
  ],
  "27": [
    "gave a stellar performance",
    "delivered a stellar performance",
    "gave an outstanding performance"
  ],
  "28": [
    "bring a character to life",
    "breathe life into a character"
  ],
  "29": [
    "had great on-screen chemistry",
    "displayed great on-screen chemistry",
    "shared great chemistry"
  ],
  "30": [
    "received critical acclaim",
    "garnered critical acclaim"
  ],
  "31": [
    "box-office hit",
    "commercial success",
    "blockbuster"
  ],
  "32": [
    "film adaptation",
    "movie adaptation",
    "cinematic adaptation"
  ],
  "33": [
    "based on a true story",
    "inspired by a true story",
    "based on real events"
  ],
  "34": [
    "audition for a role",
    "try out for a role"
  ],
  "35": [
    "land a role",
    "secure a role",
    "win a role"
  ]
};

export const FILL_DATA: FillItem[] = [
  {
    "id": 1,
    "text": "She ______________ in film, enjoying everything from horror to documentaries.",
    "viHint": "có gu phim đa dạng",
    "answers": [
      "has eclectic tastes",
      "has diverse tastes"
    ]
  },
  {
    "id": 2,
    "text": "I'm really ______________ horror films these days.",
    "viHint": "thích (thông tục)",
    "answers": [
      "into"
    ]
  },
  {
    "id": 3,
    "text": "The cinema was packed with the latest ______________.",
    "viHint": "phim bom tấn Hollywood",
    "answers": [
      "hollywood blockbusters"
    ]
  },
  {
    "id": 4,
    "text": "We watched a ______________ last night that made us laugh and cry.",
    "viHint": "phim hài lãng mạn",
    "answers": [
      "romantic comedy",
      "rom-com"
    ]
  },
  {
    "id": 5,
    "text": "I can't sleep after watching a ______________.",
    "viHint": "phim kinh dị",
    "answers": [
      "horror film"
    ]
  },
  {
    "id": 6,
    "text": "The movie was an ______________ with non-stop car chases.",
    "viHint": "phim nhiều pha hành động (action-packed ___)",
    "answers": [
      "action-packed film"
    ]
  },
  {
    "id": 7,
    "text": "He loves ______________ movies set in outer space.",
    "viHint": "phim khoa học viễn tưởng",
    "answers": [
      "science fiction",
      "sci-fi"
    ]
  },
  {
    "id": 8,
    "text": "The ______________ explored the effects of climate change.",
    "viHint": "phim tài liệu",
    "answers": [
      "documentary"
    ]
  },
  {
    "id": 9,
    "text": "Choosing a film really depends on ______________.",
    "viHint": "sở thích cá nhân",
    "answers": [
      "personal taste"
    ]
  },
  {
    "id": 10,
    "text": "Comedy is my favourite ______________ of film.",
    "viHint": "thể loại",
    "answers": [
      "genre",
      "kind",
      "type"
    ]
  },
  {
    "id": 11,
    "text": "Films mainly ______________ for people after a long day.",
    "viHint": "mang lại giải trí (provide ___)",
    "answers": [
      "provide entertainment"
    ]
  },
  {
    "id": 12,
    "text": "Even though cinemas are popular, watching at home ______________.",
    "viHint": "có sức hút riêng",
    "answers": [
      "has its own unique appeal"
    ]
  },
  {
    "id": 13,
    "text": "Streaming films at home is much more ______________ than going to the cinema.",
    "viHint": "tiết kiệm",
    "answers": [
      "economical"
    ]
  },
  {
    "id": 14,
    "text": "Watching at home gives people more ______________.",
    "viHint": "sự riêng tư",
    "answers": [
      "privacy"
    ]
  },
  {
    "id": 15,
    "text": "The cinema offers a truly ______________ that's hard to get at home.",
    "viHint": "trải nghiệm chân thực, cuốn hút",
    "answers": [
      "immersive experience"
    ]
  },
  {
    "id": 16,
    "text": "Big-budget films often rely on impressive ______________.",
    "viHint": "kỹ xảo",
    "answers": [
      "special effects"
    ]
  },
  {
    "id": 17,
    "text": "Cinemas create a ______________ that you simply can't replicate at home.",
    "viHint": "không khí sôi động",
    "answers": [
      "lively atmosphere"
    ]
  },
  {
    "id": 18,
    "text": "Many people prefer to watch films ______________.",
    "viHint": "trong sự thoải mái tại nhà riêng",
    "answers": [
      "in the comfort of their own homes"
    ]
  },
  {
    "id": 19,
    "text": "In the end, choosing between the cinema and home really ______________.",
    "viHint": "tùy thuộc vào sở thích cá nhân",
    "answers": [
      "comes down to personal preference"
    ]
  },
  {
    "id": 20,
    "text": "A big cinema screen creates an atmosphere that is ______________ at home.",
    "viHint": "khó tái hiện/sao chép được",
    "answers": [
      "hard to replicate"
    ]
  },
  {
    "id": 21,
    "text": "The thriller had a ______________ that kept me interested until the very end.",
    "viHint": "cốt truyện hấp dẫn, lôi cuốn",
    "answers": [
      "gripping storyline"
    ]
  },
  {
    "id": 22,
    "text": "I did not see that ______________ coming at all.",
    "viHint": "tình tiết bất ngờ",
    "answers": [
      "plot twist"
    ]
  },
  {
    "id": 23,
    "text": "The film kept me ______________ throughout the final hour.",
    "viHint": "hồi hộp, căng thẳng",
    "answers": [
      "on the edge of my seat"
    ]
  },
  {
    "id": 24,
    "text": "One weakness of the film was that it had a rather ______________.",
    "viHint": "cốt truyện dễ đoán",
    "answers": [
      "predictable plot"
    ]
  },
  {
    "id": 25,
    "text": "The movie featured ______________ who felt realistic and memorable.",
    "viHint": "những nhân vật được xây dựng tốt",
    "answers": [
      "well-developed characters"
    ]
  },
  {
    "id": 26,
    "text": "The film had a ______________ including several famous Hollywood actors.",
    "viHint": "dàn diễn viên toàn ngôi sao",
    "answers": [
      "star-studded cast"
    ]
  },
  {
    "id": 27,
    "text": "The lead actress ______________ and received praise from critics.",
    "viHint": "có một màn trình diễn xuất sắc",
    "answers": [
      "gave a stellar performance"
    ]
  },
  {
    "id": 28,
    "text": "A talented actor can really ______________.",
    "viHint": "thổi hồn vào nhân vật",
    "answers": [
      "bring a character to life"
    ]
  },
  {
    "id": 29,
    "text": "The two main actors ______________, which made their relationship believable.",
    "viHint": "có sự ăn ý tuyệt vời trên màn ảnh",
    "answers": [
      "had great on-screen chemistry"
    ]
  },
  {
    "id": 30,
    "text": "The movie ______________ and won praise from professional reviewers.",
    "viHint": "nhận được sự ca ngợi từ giới phê bình",
    "answers": [
      "received critical acclaim"
    ]
  },
  {
    "id": 31,
    "text": "The film became a huge ______________ and earned millions worldwide.",
    "viHint": "thành công lớn về doanh thu phòng vé",
    "answers": [
      "box-office hit"
    ]
  },
  {
    "id": 32,
    "text": "The movie is a ______________ of a bestselling novel.",
    "viHint": "bản chuyển thể thành phim",
    "answers": [
      "film adaptation"
    ]
  },
  {
    "id": 33,
    "text": "The drama is ______________, which makes it even more fascinating.",
    "viHint": "được dựa trên một câu chuyện có thật",
    "answers": [
      "based on a true story"
    ]
  },
  {
    "id": 34,
    "text": "She had to ______________ before she was offered the part.",
    "viHint": "thử vai cho một vai diễn",
    "answers": [
      "audition for a role"
    ]
  },
  {
    "id": 35,
    "text": "After years of trying, he finally managed to ______________ in a major film.",
    "viHint": "giành được một vai diễn",
    "answers": [
      "land a role"
    ]
  }
];

export const MCQ_DATA: MCQItem[] = [
  {
    "q": "possess the ability to express emotions",
    "options": [
      "có khả năng thể hiện cảm xúc",
      "có khả năng thích nghi",
      "xuất sắc ở lĩnh vực nào đó",
      "đảm nhận nhiều vai diễn"
    ],
    "correct": 0
  },
  {
    "q": "express emotions convincingly",
    "options": [
      "thể hiện cảm xúc một cách thuyết phục",
      "truyền tải nhiều cung bậc cảm xúc",
      "đặt mình vào vị trí người khác",
      "hóa thân vào nhân vật"
    ],
    "correct": 0
  },
  {
    "q": "emotional expressiveness",
    "options": [
      "khả năng biểu đạt cảm xúc",
      "sự riêng tư",
      "sức hút riêng",
      "trải nghiệm cuốn hút"
    ],
    "correct": 0
  },
  {
    "q": "convey a wide range of emotions",
    "options": [
      "truyền tải nhiều cung bậc cảm xúc",
      "thể hiện cảm xúc thuyết phục",
      "có khả năng thích nghi",
      "xuất sắc ở điều gì đó"
    ],
    "correct": 0
  },
  {
    "q": "put themselves in someone else's shoes",
    "options": [
      "đặt mình vào vị trí người khác",
      "đảm nhận nhiều vai diễn khác nhau",
      "hóa thân vào nhân vật thuyết phục",
      "có khả năng thích nghi"
    ],
    "correct": 0
  },
  {
    "q": "portray a character convincingly",
    "options": [
      "hóa thân vào nhân vật một cách thuyết phục",
      "thể hiện cảm xúc thuyết phục",
      "đặt mình vào vị trí người khác",
      "truyền tải cảm xúc"
    ],
    "correct": 0
  },
  {
    "q": "take on different roles",
    "options": [
      "đảm nhận nhiều vai diễn khác nhau",
      "có khả năng thích nghi",
      "xuất sắc ở điều gì đó",
      "hóa thân vào nhân vật"
    ],
    "correct": 0
  },
  {
    "q": "be adaptable",
    "options": [
      "có khả năng thích nghi",
      "đảm nhận nhiều vai diễn",
      "xuất sắc ở điều gì đó",
      "truyền tải cảm xúc"
    ],
    "correct": 0
  },
  {
    "q": "excel at (something)",
    "options": [
      "xuất sắc/giỏi ở điều gì đó",
      "có khả năng thích nghi",
      "đảm nhận vai diễn",
      "thể hiện cảm xúc thuyết phục"
    ],
    "correct": 0
  },
  {
    "q": "the characters may feel flat",
    "options": [
      "nhân vật có thể trở nên nhạt nhòa, thiếu chiều sâu",
      "nhân vật rất chân thực",
      "nhân vật gây ấn tượng mạnh",
      "nhân vật có nhiều cung bậc cảm xúc"
    ],
    "correct": 0
  },
  {
    "q": "lack depth and authenticity",
    "options": [
      "thiếu chiều sâu và tính chân thực",
      "có sức hút riêng",
      "khó tái hiện được",
      "tùy thuộc sở thích cá nhân"
    ],
    "correct": 0
  },
  {
    "q": "a highly competitive profession",
    "options": [
      "một nghề cạnh tranh cao",
      "một nghề ổn định",
      "một nghề nhàn hạ",
      "một nghề mới nổi"
    ],
    "correct": 0
  },
  {
    "q": "aspiring actors",
    "options": [
      "những người mong muốn trở thành diễn viên",
      "những diễn viên nổi tiếng",
      "những diễn viên đã nghỉ hưu",
      "những đạo diễn trẻ"
    ],
    "correct": 0
  },
  {
    "q": "rejection is a normal part of the job",
    "options": [
      "bị từ chối là chuyện bình thường trong nghề",
      "thành công đến rất nhanh trong nghề",
      "diễn viên hiếm khi bị từ chối",
      "bị từ chối là điều đáng xấu hổ"
    ],
    "correct": 0
  },
  {
    "q": "persistent and mentally resilient",
    "options": [
      "kiên trì và vững vàng về tinh thần",
      "nhút nhát và dễ bỏ cuộc",
      "giỏi giao tiếp và hài hước",
      "thích thể hiện bản thân"
    ],
    "correct": 0
  },
  {
    "q": "the challenge can be worthwhile",
    "options": [
      "thử thách đó xứng đáng để theo đuổi",
      "thử thách đó quá khó để vượt qua",
      "thử thách đó không đáng để thử",
      "thử thách đó chỉ dành cho người giỏi"
    ],
    "correct": 0
  }
];

export const TRANS_DATA: TransItem[] = [
  {
    "id": 1,
    "vi": "Xem phim ở rạp có lẽ phổ biến hơn vì nó mang đến bầu không khí sôi động và những kỹ xảo ấn tượng.",
    "hint": "cinema, lively atmosphere, special effects, probably more popular because",
    "answers": [
      "Going to the cinema is probably more popular because it offers a lively atmosphere and impressive special effects."
    ]
  },
  {
    "id": 2,
    "vi": "Tuy nhiên, xem phim tại nhà lại có sức hút riêng vì sự riêng tư và tính tiết kiệm của nó.",
    "hint": "that said, has its own unique appeal, privacy, economical",
    "answers": [
      "That said, watching films at home has its own unique appeal because of its privacy and economical nature."
    ]
  },
  {
    "id": 3,
    "vi": "Cô ấy có gu phim rất đa dạng, từ phim tài liệu đến phim khoa học viễn tưởng.",
    "hint": "eclectic tastes, documentaries, science fiction",
    "answers": [
      "She has eclectic tastes in film, from documentaries to science fiction."
    ]
  },
  {
    "id": 4,
    "vi": "Cuối cùng, việc chọn xem phim ở đâu tùy thuộc vào sở thích cá nhân.",
    "hint": "in the end, comes down to personal preference",
    "answers": [
      "In the end, where to watch a film comes down to personal preference."
    ]
  },
  {
    "id": 5,
    "vi": "Một diễn viên giỏi cần có khả năng truyền tải nhiều cung bậc cảm xúc một cách thuyết phục.",
    "hint": "convey a wide range of emotions, convincingly",
    "answers": [
      "A good actor needs to be able to convey a wide range of emotions convincingly."
    ]
  },
  {
    "id": 6,
    "vi": "Để hóa thân vào nhân vật một cách thuyết phục, diễn viên phải đặt mình vào vị trí của nhân vật đó.",
    "hint": "portray a character convincingly, put themselves in someone's shoes",
    "answers": [
      "To portray a character convincingly, actors have to put themselves in that character's shoes."
    ]
  },
  {
    "id": 7,
    "vi": "Nếu thiếu khả năng biểu đạt cảm xúc, nhân vật có thể trở nên nhạt nhòa và thiếu chiều sâu.",
    "hint": "emotional expressiveness, feel flat, lack depth",
    "answers": [
      "Without emotional expressiveness, characters may feel flat and lack depth."
    ]
  },
  {
    "id": 8,
    "vi": "Trở thành diễn viên là một nghề cạnh tranh cao, nơi mà việc bị từ chối là chuyện bình thường.",
    "hint": "highly competitive profession, rejection is a normal part of the job",
    "answers": [
      "Becoming an actor is a highly competitive profession, where rejection is a normal part of the job."
    ]
  },
  {
    "id": 9,
    "vi": "Những người mong muốn trở thành diễn viên cần phải kiên trì và vững vàng về tinh thần.",
    "hint": "aspiring actors, persistent, mentally resilient",
    "answers": [
      "Aspiring actors need to be persistent and mentally resilient."
    ]
  },
  {
    "id": 10,
    "vi": "Dù khó khăn, thử thách đó vẫn xứng đáng để theo đuổi.",
    "hint": "although, the challenge can be worthwhile",
    "answers": [
      "Although it's difficult, the challenge can be worthwhile."
    ]
  },
  {
    "id": 11,
    "vi": "Bộ phim có một cốt truyện hấp dẫn khiến tôi không thể ngừng xem.",
    "hint": "gripping storyline, stop watching",
    "answers": [
      "The film had a gripping storyline that made it impossible for me to stop watching."
    ]
  },
  {
    "id": 12,
    "vi": "Tình tiết bất ngờ ở cuối phim đã khiến tất cả chúng tôi ngạc nhiên.",
    "hint": "plot twist, surprise",
    "answers": [
      "The plot twist at the end of the film surprised all of us."
    ]
  },
  {
    "id": 13,
    "vi": "Bộ phim này khiến tôi hồi hộp đến tận cảnh cuối cùng.",
    "hint": "keep someone on the edge of their seat, final scene",
    "answers": [
      "This film kept me on the edge of my seat until the final scene."
    ]
  },
  {
    "id": 14,
    "vi": "Một trong những điểm yếu của bộ phim là cốt truyện quá dễ đoán.",
    "hint": "one weakness, predictable plot",
    "answers": [
      "One weakness of the film was its predictable plot."
    ]
  },
  {
    "id": 15,
    "vi": "Những nhân vật được xây dựng tốt giúp khán giả dễ đồng cảm hơn.",
    "hint": "well-developed characters, audience, empathise with",
    "answers": [
      "Well-developed characters make it easier for the audience to empathise with them."
    ]
  },
  {
    "id": 16,
    "vi": "Bộ phim có dàn diễn viên toàn ngôi sao, bao gồm nhiều diễn viên nổi tiếng.",
    "hint": "star-studded cast, feature, famous actors",
    "answers": [
      "The film had a star-studded cast and featured several famous actors."
    ]
  },
  {
    "id": 17,
    "vi": "Nữ diễn viên chính đã có một màn trình diễn xuất sắc trong vai diễn này.",
    "hint": "lead actress, give a stellar performance, role",
    "answers": [
      "The lead actress gave a stellar performance in this role."
    ]
  },
  {
    "id": 18,
    "vi": "Một diễn viên tài năng có thể thực sự thổi hồn vào một nhân vật.",
    "hint": "talented actor, bring a character to life",
    "answers": [
      "A talented actor can really bring a character to life."
    ]
  },
  {
    "id": 19,
    "vi": "Hai diễn viên chính có sự ăn ý tuyệt vời trên màn ảnh.",
    "hint": "two lead actors, great on-screen chemistry",
    "answers": [
      "The two lead actors had great on-screen chemistry."
    ]
  },
  {
    "id": 20,
    "vi": "Màn trình diễn thuyết phục của cô ấy là điểm nổi bật nhất của bộ phim.",
    "hint": "compelling performance, highlight",
    "answers": [
      "Her compelling performance was the highlight of the film."
    ]
  },
  {
    "id": 21,
    "vi": "Bộ phim đã nhận được nhiều lời khen ngợi từ giới phê bình.",
    "hint": "receive critical acclaim",
    "answers": [
      "The film received critical acclaim."
    ]
  },
  {
    "id": 22,
    "vi": "Bộ phim nhanh chóng trở thành một thành công lớn về doanh thu phòng vé.",
    "hint": "quickly, become, box-office hit",
    "answers": [
      "The film quickly became a box-office hit."
    ]
  },
  {
    "id": 23,
    "vi": "Mặc dù bị một số nhà phê bình chỉ trích, bộ phim vẫn thành công về mặt thương mại.",
    "hint": "although, be criticised by, commercial success",
    "answers": [
      "Although it was criticised by some critics, the film was a commercial success."
    ]
  },
  {
    "id": 24,
    "vi": "Bộ phim là bản chuyển thể từ một cuốn tiểu thuyết nổi tiếng.",
    "hint": "film adaptation, famous novel",
    "answers": [
      "The film is an adaptation of a famous novel."
    ]
  },
  {
    "id": 25,
    "vi": "Tôi thích những bộ phim dựa trên câu chuyện có thật.",
    "hint": "like, films, based on true stories",
    "answers": [
      "I like films that are based on true stories."
    ]
  },
  {
    "id": 26,
    "vi": "Nhạc phim đóng vai trò quan trọng trong việc tạo ra cảm xúc cho khán giả.",
    "hint": "soundtrack, play an important role in, create emotion",
    "answers": [
      "The soundtrack plays an important role in creating emotions for the audience."
    ]
  },
  {
    "id": 27,
    "vi": "Kỹ thuật quay phim của bộ phim đẹp đến nghẹt thở.",
    "hint": "cinematography, breathtaking",
    "answers": [
      "The cinematography of the film was breathtaking."
    ]
  },
  {
    "id": 28,
    "vi": "Đạo diễn đã làm việc chặt chẽ với các diễn viên trong suốt quá trình quay.",
    "hint": "director, work closely with, actors, throughout filming",
    "answers": [
      "The director worked closely with the actors throughout filming."
    ]
  },
  {
    "id": 29,
    "vi": "Cô ấy phải thử vai cho nhiều vai diễn trước khi cuối cùng giành được một vai lớn.",
    "hint": "audition for, several roles, finally, land a major role",
    "answers": [
      "She had to audition for several roles before she finally landed a major role."
    ]
  },
  {
    "id": 30,
    "vi": "Bước chân vào ngành công nghiệp điện ảnh có thể rất khó đối với những người mới.",
    "hint": "break into the film industry, extremely difficult, newcomers",
    "answers": [
      "Breaking into the film industry can be extremely difficult for newcomers."
    ]
  }
];

export const COLLOCATION_DATA: CollocationItem[] = [
  {
    "q": "A good actor should be able to ______ a wide range of emotions.",
    "options": [
      "convey",
      "carry",
      "bring",
      "hold"
    ],
    "options_detail": [
      {
        "word": "convey",
        "meaning": "truyền tải"
      },
      {
        "word": "carry",
        "meaning": "mang, vác"
      },
      {
        "word": "bring",
        "meaning": "mang đến"
      },
      {
        "word": "hold",
        "meaning": "giữ"
      }
    ],
    "correct": 0
  },
  {
    "q": "Documentaries ______ people the chance to learn about different cultures.",
    "options": [
      "offer",
      "own",
      "reach",
      "hold"
    ],
    "options_detail": [
      {
        "word": "offer",
        "meaning": "mang đến"
      },
      {
        "word": "own",
        "meaning": "sở hữu"
      },
      {
        "word": "reach",
        "meaning": "đạt tới"
      },
      {
        "word": "hold",
        "meaning": "giữ"
      }
    ],
    "correct": 0
  },
  {
    "q": "Watching movies at home is more ______ than going to the cinema.",
    "options": [
      "economical",
      "luxurious",
      "crowded",
      "risky"
    ],
    "options_detail": [
      {
        "word": "economical",
        "meaning": "tiết kiệm"
      },
      {
        "word": "luxurious",
        "meaning": "sang trọng"
      },
      {
        "word": "crowded",
        "meaning": "đông đúc"
      },
      {
        "word": "risky",
        "meaning": "rủi ro"
      }
    ],
    "correct": 0
  },
  {
    "q": "The cinema creates a ______ atmosphere that's hard to find at home.",
    "options": [
      "lively",
      "quiet",
      "flat",
      "narrow"
    ],
    "options_detail": [
      {
        "word": "lively",
        "meaning": "sôi động"
      },
      {
        "word": "quiet",
        "meaning": "yên tĩnh"
      },
      {
        "word": "flat",
        "meaning": "nhạt nhòa"
      },
      {
        "word": "narrow",
        "meaning": "hẹp"
      }
    ],
    "correct": 0
  },
  {
    "q": "Big-budget films often feature impressive ______ that create amazing visuals.",
    "options": [
      "special effects",
      "background music",
      "film critics",
      "box office"
    ],
    "options_detail": [
      {
        "word": "special effects",
        "meaning": "kỹ xảo"
      },
      {
        "word": "background music",
        "meaning": "nhạc nền"
      },
      {
        "word": "film critics",
        "meaning": "nhà phê bình"
      },
      {
        "word": "box office",
        "meaning": "doanh thu"
      }
    ],
    "correct": 0
  },
  {
    "q": "It is hard to ______ the immersive experience of a big cinema screen at home.",
    "options": [
      "replicate",
      "remove",
      "reject",
      "repair"
    ],
    "options_detail": [
      {
        "word": "replicate",
        "meaning": "tái hiện"
      },
      {
        "word": "remove",
        "meaning": "loại bỏ"
      },
      {
        "word": "reject",
        "meaning": "từ chối"
      },
      {
        "word": "repair",
        "meaning": "sửa chữa"
      }
    ],
    "correct": 0
  },
  {
    "q": "In the end, the choice of where to watch a film ______ personal preference.",
    "options": [
      "comes down to",
      "goes up to",
      "runs out of",
      "turns into"
    ],
    "options_detail": [
      {
        "word": "comes down to",
        "meaning": "tùy thuộc vào"
      },
      {
        "word": "goes up to",
        "meaning": "tăng lên"
      },
      {
        "word": "runs out of",
        "meaning": "hết"
      },
      {
        "word": "turns into",
        "meaning": "biến thành"
      }
    ],
    "correct": 0
  },
  {
    "q": "A talented actor can ______ different roles convincingly, from villain to hero.",
    "options": [
      "take on",
      "take off",
      "take up",
      "take out"
    ],
    "options_detail": [
      {
        "word": "take on",
        "meaning": "đảm nhận"
      },
      {
        "word": "take off",
        "meaning": "cất cánh"
      },
      {
        "word": "take up",
        "meaning": "bắt đầu"
      },
      {
        "word": "take out",
        "meaning": "lấy ra"
      }
    ],
    "correct": 0
  },
  {
    "q": "To act well, you must be able to ______ someone else's shoes.",
    "options": [
      "put yourself in",
      "take yourself off",
      "put yourself on",
      "set yourself in"
    ],
    "options_detail": [
      {
        "word": "put yourself in",
        "meaning": "đặt mình vào"
      },
      {
        "word": "take yourself off",
        "meaning": "không hợp lý"
      },
      {
        "word": "put yourself on",
        "meaning": "không hợp lý"
      },
      {
        "word": "set yourself in",
        "meaning": "không hợp lý"
      }
    ],
    "correct": 0
  },
  {
    "q": "Without strong emotional expressiveness, characters may ______ flat.",
    "options": [
      "feel",
      "smell",
      "sound",
      "taste"
    ],
    "options_detail": [
      {
        "word": "feel",
        "meaning": "cảm thấy, trở nên"
      },
      {
        "word": "smell",
        "meaning": "có mùi"
      },
      {
        "word": "sound",
        "meaning": "nghe có vẻ"
      },
      {
        "word": "taste",
        "meaning": "có vị"
      }
    ],
    "correct": 0
  },
  {
    "q": "Many aspiring actors face ______ before they achieve success.",
    "options": [
      "rejection",
      "celebration",
      "promotion",
      "vacation"
    ],
    "options_detail": [
      {
        "word": "rejection",
        "meaning": "sự từ chối"
      },
      {
        "word": "celebration",
        "meaning": "sự ăn mừng"
      },
      {
        "word": "promotion",
        "meaning": "thăng chức"
      },
      {
        "word": "vacation",
        "meaning": "kỳ nghỉ"
      }
    ],
    "correct": 0
  },
  {
    "q": "Becoming a professional actor is a highly ______ profession.",
    "options": [
      "competitive",
      "peaceful",
      "quiet",
      "isolated"
    ],
    "options_detail": [
      {
        "word": "competitive",
        "meaning": "cạnh tranh"
      },
      {
        "word": "peaceful",
        "meaning": "yên bình"
      },
      {
        "word": "quiet",
        "meaning": "yên tĩnh"
      },
      {
        "word": "isolated",
        "meaning": "biệt lập"
      }
    ],
    "correct": 0
  },
  {
    "q": "Successful actors are usually persistent and mentally ______.",
    "options": [
      "resilient",
      "fragile",
      "careless",
      "indifferent"
    ],
    "options_detail": [
      {
        "word": "resilient",
        "meaning": "vững vàng"
      },
      {
        "word": "fragile",
        "meaning": "mong manh"
      },
      {
        "word": "careless",
        "meaning": "bất cẩn"
      },
      {
        "word": "indifferent",
        "meaning": "thờ ơ"
      }
    ],
    "correct": 0
  },
  {
    "q": "Even though the path is difficult, many believe the challenge can be ______.",
    "options": [
      "worthwhile",
      "worthless",
      "pointless",
      "harmless"
    ],
    "options_detail": [
      {
        "word": "worthwhile",
        "meaning": "xứng đáng"
      },
      {
        "word": "worthless",
        "meaning": "vô giá trị"
      },
      {
        "word": "pointless",
        "meaning": "vô nghĩa"
      },
      {
        "word": "harmless",
        "meaning": "vô hại"
      }
    ],
    "correct": 0
  },
  {
    "q": "She has ______ tastes in film — she enjoys everything from horror to documentaries.",
    "options": [
      "eclectic",
      "narrow",
      "single",
      "strict"
    ],
    "options_detail": [
      {
        "word": "eclectic",
        "meaning": "đa dạng"
      },
      {
        "word": "narrow",
        "meaning": "hẹp"
      },
      {
        "word": "single",
        "meaning": "đơn lẻ"
      },
      {
        "word": "strict",
        "meaning": "nghiêm khắc"
      }
    ],
    "correct": 0
  },
  {
    "q": "The thriller had a ______ that kept the audience interested until the end.",
    "options": [
      "gripping storyline",
      "packed cinema",
      "personal preference"
    ],
    "options_detail": [
      {
        "word": "gripping storyline",
        "meaning": "cốt truyện hấp dẫn"
      },
      {
        "word": "packed cinema",
        "meaning": "rạp đông nghịt"
      },
      {
        "word": "personal preference",
        "meaning": "sở thích cá nhân"
      }
    ],
    "correct": 0
  },
  {
    "q": "The ______ at the end completely changed the meaning of the story.",
    "options": [
      "plot twist",
      "special effects",
      "box office"
    ],
    "options_detail": [
      {
        "word": "plot twist",
        "meaning": "tình tiết bất ngờ"
      },
      {
        "word": "special effects",
        "meaning": "hiệu ứng đặc biệt"
      },
      {
        "word": "box office",
        "meaning": "phòng vé"
      }
    ],
    "correct": 0
  },
  {
    "q": "The film kept me ______ until the final scene.",
    "options": [
      "on the edge of my seat",
      "on my personal taste",
      "in a role"
    ],
    "options_detail": [
      {
        "word": "on the edge of my seat",
        "meaning": "hồi hộp"
      },
      {
        "word": "on my personal taste",
        "meaning": "theo sở thích"
      },
      {
        "word": "in a role",
        "meaning": "trong vai"
      }
    ],
    "correct": 0
  },
  {
    "q": "The movie featured a ______ with several famous actors.",
    "options": [
      "star-studded cast",
      "predictable storyline",
      "light-hearted atmosphere"
    ],
    "options_detail": [
      {
        "word": "star-studded cast",
        "meaning": "dàn sao"
      },
      {
        "word": "predictable storyline",
        "meaning": "cốt truyện dễ đoán"
      },
      {
        "word": "light-hearted atmosphere",
        "meaning": "không khí nhẹ nhàng"
      }
    ],
    "correct": 0
  },
  {
    "q": "The lead actor ______ and received praise from critics.",
    "options": [
      "gave a stellar performance",
      "made a commercial success",
      "took an immersive experience"
    ],
    "options_detail": [
      {
        "word": "gave a stellar performance",
        "meaning": "màn trình diễn xuất sắc"
      },
      {
        "word": "made a commercial success",
        "meaning": "thành công thương mại"
      },
      {
        "word": "took an immersive experience",
        "meaning": "trải nghiệm đắm chìm"
      }
    ],
    "correct": 0
  },
  {
    "q": "A talented actor can ______ and make the audience care about them.",
    "options": [
      "bring a character to life",
      "receive a role",
      "replicate a preference"
    ],
    "options_detail": [
      {
        "word": "bring a character to life",
        "meaning": "thổi hồn vào nhân vật"
      },
      {
        "word": "receive a role",
        "meaning": "nhận vai"
      },
      {
        "word": "replicate a preference",
        "meaning": "tái hiện sở thích"
      }
    ],
    "correct": 0
  },
  {
    "q": "The two main actors ______, so their relationship felt realistic.",
    "options": [
      "had great on-screen chemistry",
      "received critical acclaim",
      "were on the edge of their seats"
    ],
    "options_detail": [
      {
        "word": "had great on-screen chemistry",
        "meaning": "ăn ý trên màn ảnh"
      },
      {
        "word": "received critical acclaim",
        "meaning": "được ca ngợi"
      },
      {
        "word": "were on the edge of their seats",
        "meaning": "hồi hộp"
      }
    ],
    "correct": 0
  },
  {
    "q": "Her ______ was one of the highlights of the film.",
    "options": [
      "compelling performance",
      "landed soundtrack",
      "broken plot"
    ],
    "options_detail": [
      {
        "word": "compelling performance",
        "meaning": "màn trình diễn thuyết phục"
      },
      {
        "word": "landed soundtrack",
        "meaning": "giành nhạc phim"
      },
      {
        "word": "broken plot",
        "meaning": "cốt truyện hỏng"
      }
    ],
    "correct": 0
  },
  {
    "q": "The film ______ for its original story and beautiful cinematography.",
    "options": [
      "received critical acclaim",
      "had a true story",
      "landed an audience"
    ],
    "options_detail": [
      {
        "word": "received critical acclaim",
        "meaning": "nhận lời khen"
      },
      {
        "word": "had a true story",
        "meaning": "có câu chuyện thật"
      },
      {
        "word": "landed an audience",
        "meaning": "giành khán giả"
      }
    ],
    "correct": 0
  },
  {
    "q": "Despite its low budget, the movie became a ______.",
    "options": [
      "box-office hit",
      "film role",
      "predictable cast"
    ],
    "options_detail": [
      {
        "word": "box-office hit",
        "meaning": "thành công phòng vé"
      },
      {
        "word": "film role",
        "meaning": "vai diễn"
      },
      {
        "word": "predictable cast",
        "meaning": "dàn diễn viên dễ đoán"
      }
    ],
    "correct": 0
  },
  {
    "q": "The movie was a ______ of a bestselling novel.",
    "options": [
      "film adaptation",
      "special effect",
      "breakthrough industry"
    ],
    "options_detail": [
      {
        "word": "film adaptation",
        "meaning": "bản chuyển thể"
      },
      {
        "word": "special effect",
        "meaning": "hiệu ứng"
      },
      {
        "word": "breakthrough industry",
        "meaning": "ngành đột phá"
      }
    ],
    "correct": 0
  },
  {
    "q": "The drama is ______, which makes it more emotionally powerful.",
    "options": [
      "based on a true story",
      "on a big screen",
      "in personal preference"
    ],
    "options_detail": [
      {
        "word": "based on a true story",
        "meaning": "dựa trên câu chuyện có thật"
      },
      {
        "word": "on a big screen",
        "meaning": "trên màn ảnh rộng"
      },
      {
        "word": "in personal preference",
        "meaning": "trong sở thích"
      }
    ],
    "correct": 0
  },
  {
    "q": "The soundtrack ______ in creating the mood of the film.",
    "options": [
      "plays an important role",
      "lands a major role",
      "receives a plot twist"
    ],
    "options_detail": [
      {
        "word": "plays an important role",
        "meaning": "đóng vai trò quan trọng"
      },
      {
        "word": "lands a major role",
        "meaning": "giành vai lớn"
      },
      {
        "word": "receives a plot twist",
        "meaning": "nhận tình tiết"
      }
    ],
    "correct": 0
  },
  {
    "q": "She had to ______ before the director offered her the part.",
    "options": [
      "audition for a role",
      "break into a soundtrack",
      "give a box-office hit"
    ],
    "options_detail": [
      {
        "word": "audition for a role",
        "meaning": "thử vai"
      },
      {
        "word": "break into a soundtrack",
        "meaning": "bước vào nhạc phim"
      },
      {
        "word": "give a box-office hit",
        "meaning": "tạo phim bom tấn"
      }
    ],
    "correct": 0
  },
  {
    "q": "After years of small jobs, he finally ______ in a major film.",
    "options": [
      "landed a role",
      "received a chemistry",
      "conveyed an industry"
    ],
    "options_detail": [
      {
        "word": "landed a role",
        "meaning": "giành được vai"
      },
      {
        "word": "received a chemistry",
        "meaning": "nhận sự ăn ý"
      },
      {
        "word": "conveyed an industry",
        "meaning": "truyền tải ngành"
      }
    ],
    "correct": 0
  }
];

export const G6_DATA: G6Item[] = [
  {
    "id": 1,
    "question": "What kinds of films do people like to watch in Vietnam?",
    "text": "In Vietnam, people generally have quite ______________ tastes when it comes to film, enjoying everything from action-packed blockbusters to documentaries.",
    "viHint": "đa dạng (gu phim)",
    "answers": [
      "eclectic",
      "diverse",
      "varied",
      "different"
    ],
    "sampleAnswers": [
      "In Vietnam, people generally have quite eclectic tastes when it comes to film, enjoying everything from action-packed blockbusters to documentaries. A lot of young people are really into Hollywood blockbusters, while others prefer romantic comedies or horror films.",
      "I'd say action-packed films and Hollywood blockbusters are probably the most popular genre here, mainly because they provide great entertainment and are exciting to watch on a big screen. That said, more and more people are also getting into documentaries because they offer a chance to learn about other cultures.",
      "It really depends on personal taste, but in general Vietnamese audiences seem to love romantic comedies and horror films the most. These genres provide great entertainment and are often talked about among friends after watching them together."
    ]
  },
  {
    "id": 2,
    "question": "Do people prefer watching films at home or at the cinema?",
    "text": "I think going to the cinema is probably more popular because it offers a truly ______________ with impressive special effects and a lively atmosphere.",
    "viHint": "trải nghiệm chân thực, cuốn hút",
    "answers": [
      "immersive experience",
      "immersive viewing experience",
      "cinematic experience"
    ],
    "sampleAnswers": [
      "I think going to the cinema is probably more popular because it offers a truly immersive experience with impressive special effects and a lively atmosphere. That said, watching films in the comfort of their own homes has its own unique appeal, since it's more economical and offers more privacy.",
      "Personally, I think it depends on the type of film. For big-budget blockbusters full of special effects, the cinema is definitely more popular because of its lively atmosphere. But for light-hearted films, most people would rather stay in the comfort of their own homes.",
      "I'd say cinemas are still slightly more popular overall, mainly because the immersive experience with a huge screen and surround sound is hard to replicate at home. That said, streaming at home is more economical, so it really comes down to personal preference in the end."
    ]
  },
  {
    "id": 3,
    "question": "What qualities do people need to be good actors?",
    "text": "I believe good actors need to be able to ______________ a wide range of emotions and portray a character convincingly.",
    "viHint": "truyền tải (cảm xúc)",
    "answers": [
      "convey",
      "express",
      "communicate"
    ],
    "sampleAnswers": [
      "I believe good actors need to be able to convey a wide range of emotions and portray a character convincingly. They also need to be adaptable, since they often have to take on completely different roles, so being able to put themselves in someone else's shoes really helps.",
      "In my opinion, the most important quality is emotional expressiveness — actors need to convey a wide range of emotions so audiences can connect with the character. It also helps if they're adaptable enough to take on very different roles throughout their career.",
      "I think good actors have to excel at putting themselves in someone else's shoes. If they can't do that, the character they portray may feel flat and lack depth and authenticity, no matter how good the script is."
    ]
  },
  {
    "id": 4,
    "question": "Is it difficult to become an actor?",
    "text": "Yes, I'd say acting is a highly ______________ profession, since there are so many aspiring actors trying to break into the industry.",
    "viHint": "cạnh tranh",
    "answers": [
      "competitive",
      "challenging"
    ],
    "sampleAnswers": [
      "Yes, I'd say acting is a highly competitive profession, since there are so many aspiring actors trying to break into the industry. Rejection is a normal part of the job, so actors really need to be persistent and mentally resilient.",
      "I'd imagine so, yes. There must be thousands of aspiring actors competing for a handful of roles, so rejection is probably something you have to get used to very quickly in that industry.",
      "It sounds extremely tough to me. Besides talent, you also need to be persistent and mentally resilient, because success in such a highly competitive profession can take years, if it ever comes at all."
    ]
  },
  {
    "id": 5,
    "question": "Would you like to be an actor yourself? Why or why not?",
    "text": "Honestly, I don't think I'd want to be an actor, mainly because I'm not sure I'm ______________ enough to survive in such a competitive industry.",
    "viHint": "kiên trì và vững vàng về tinh thần",
    "answers": [
      "persistent and mentally resilient",
      "persistent and resilient",
      "mentally tough and persistent"
    ],
    "sampleAnswers": [
      "Honestly, I don't think I'd want to be an actor, mainly because I'm not sure I'm persistent and mentally resilient enough to survive in such a competitive industry. Aspiring actors have to accept that rejection is a normal part of the job.",
      "Not really, no. I think I'd struggle with the constant rejection that comes with the job, and I'm not sure I'm adaptable enough to take on completely different roles the way professional actors do.",
      "Actually, I think it could be interesting, since I enjoy expressing emotions and performing in front of people. But I know it's a highly competitive profession, so I'd need to be far more persistent than I am now."
    ]
  },
  {
    "id": 6,
    "question": "How do you decide which film to watch?",
    "text": "It really depends on my ______________ — I usually choose based on genre and my mood at the time.",
    "viHint": "sở thích cá nhân",
    "answers": [
      "personal taste",
      "personal preference",
      "own preference"
    ],
    "sampleAnswers": [
      "It really depends on my personal taste — I usually choose based on genre and my mood at the time. Since I have pretty eclectic tastes in film, if I'm into something exciting, I'll pick an action-packed film, but if I want to relax, I'll go for a light-hearted comedy.",
      "I usually check the genre first, since I have pretty eclectic tastes — one week I might be into horror films, the next I'll want something light-hearted like a rom-com.",
      "Honestly, it comes down to personal preference and my mood at the time. If I want an exciting night out, I'll pick an action-packed blockbuster; if I just want to relax, I'll go for a documentary instead."
    ]
  },
  {
    "id": 7,
    "question": "Do you think it's important to watch films from other countries?",
    "text": "Yes, definitely — films from other countries ______________, which you don't always get from Hollywood blockbusters.",
    "viHint": "mang đến cơ hội hiểu hơn về các nền văn hóa khác nhau",
    "answers": [
      "offer people an opportunity to gain a better understanding of different cultures"
    ],
    "sampleAnswers": [
      "Yes, definitely — films from other countries offer people an opportunity to gain a better understanding of different cultures, which you don't always get from Hollywood blockbusters. Documentaries in particular can be very educational while still managing to provide entertainment.",
      "Definitely. Watching international films exposes you to different cultures in a way that's more engaging than reading a textbook, and it can really broaden your perspective.",
      "I think so, yes. Foreign films, especially documentaries, offer people an opportunity to gain a better understanding of different cultures, and they often deal with topics that Hollywood blockbusters simply don't cover."
    ]
  },
  {
    "id": 8,
    "question": "What makes a film \"good\" in your opinion?",
    "text": "For me, a good film needs a cast that can portray their characters convincingly — without that, even a film with amazing special effects can ______________.",
    "viHint": "thiếu chiều sâu và tính chân thực",
    "answers": [
      "lack depth and authenticity",
      "lack authenticity and depth",
      "feel shallow and inauthentic"
    ],
    "sampleAnswers": [
      "For me, a good film needs a cast that can portray their characters convincingly — without that, even a film with amazing special effects can lack depth and authenticity. I also think atmosphere matters; a film that creates a lively atmosphere really stays with you.",
      "For me, it's mainly about the acting. If the cast can express emotions convincingly and portray their characters convincingly, I'll enjoy the film even if the special effects aren't perfect.",
      "I think a good film needs a strong atmosphere — whether it's a lively atmosphere in an action scene or a quiet, emotional one — plus characters who don't feel flat or lack authenticity."
    ]
  }
];
