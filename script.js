document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('askButton');
    const responseDiv = document.getElementById('response');
    
    const responses = [
        {
            zh: "内心的平静是最珍贵的财富。",
            en: "Inner peace is the most precious wealth.",
            vi: "Sự bình yên nội tâm là tài sản quý giá nhất."
        },
        {
            zh: "生活中的每个挑战都是成长的机会。",
            en: "Every challenge in life is an opportunity for growth.",
            vi: "Mỗi thử thách trong cuộc sống là cơ hội để trưởng thành."
        },
        {
            zh: "保持希望，黎明终会到来。",
            en: "Keep hope alive, dawn will eventually come.",
            vi: "Giữ vững niềm hy vọng, bình minh sẽ đến."
        },
        {
            zh: "真正的智慧来自于理解与包容。",
            en: "True wisdom comes from understanding and acceptance.",
            vi: "Trí tuệ thực sự đến từ sự hiểu biết và bao dung."
        },
        {
            zh: "爱是最强大的治愈力量。",
            en: "Love is the most powerful healing force.",
            vi: "Tình yêu là sức mạnh chữa lành mạnh mẽ nhất."
        },
        {
            zh: "成功是一个旅程，而不是终点。",
            en: "Success is a journey, not a destination.",
            vi: "Thành công là một hành trình, không phải đích đến."
        },
        {
            zh: "保持专注，梦想终会实现。",
            en: "Stay focused, dreams will eventually come true.",
            vi: "Giữ sự tập trung, ước mơ sẽ thành hiện thực."
        },
        {
            zh: "感恩当下，珍惜所有。",
            en: "Be grateful for the present, cherish everything.",
            vi: "Biết ơn hiện tại, trân trọng tất cả."
        },
        {
            zh: "时间是最好的老师，也是最公平的裁判。",
            en: "Time is the best teacher and the fairest judge.",
            vi: "Thời gian là người thầy tốt nhất và là trọng tài công bằng nhất."
        },
        {
            zh: "相信自己，你比想象中更强大。",
            en: "Believe in yourself, you are stronger than you imagine.",
            vi: "Hãy tin vào bản thân, bạn mạnh mẽ hơn bạn tưởng."
        },
        {
            zh: "生命中的每个相遇都有其意义。",
            en: "Every encounter in life has its meaning.",
            vi: "Mỗi cuộc gặp gỡ trong đời đều có ý nghĩa của nó."
        },
        {
            zh: "宁静致远，淡定从容。",
            en: "Serenity leads to greatness, stay calm and composed.",
            vi: "Bình tĩnh dẫn đến thành công, giữ sự điềm tĩnh và bản lĩnh."
        },
        {
            zh: "微笑是最好的语言。",
            en: "A smile is the best language.",
            vi: "Nụ cười là ngôn ngữ tốt nhất."
        },
        {
            zh: "学习是永无止境的旅程。",
            en: "Learning is an endless journey.",
            vi: "Học tập là một hành trình không bao giờ kết thúc."
        },
        {
            zh: "改变从现在开始。",
            en: "Change starts now.",
            vi: "Thay đổi bắt đầu từ bây giờ."
        },
        {
            zh: "在黑暗中，保持希望之光。",
            en: "Keep the light of hope in darkness.",
            vi: "Giữ ánh sáng hy vọng trong bóng tối."
        },
        {
            zh: "每个人都是自己人生的作者。",
            en: "Everyone is the author of their own life.",
            vi: "Mỗi người là tác giả của cuộc đời mình."
        },
        {
            zh: "今天的选择决定明天的人生。",
            en: "Today's choices shape tomorrow's life.",
            vi: "Lựa chọn hôm nay định hình cuộc sống ngày mai."
        },
        {
            zh: "善良是最美的语言。",
            en: "Kindness is the most beautiful language.",
            vi: "Lòng tốt là ngôn ngữ đẹp nhất."
        },
        {
            zh: "勇气不是没有恐惧，而是战胜恐惧。",
            en: "Courage is not the absence of fear, but conquering it.",
            vi: "Dũng khí không phải là không sợ hãi, mà là vượt qua nó."
        },
        {
            zh: "耐心是通向成功的钥匙。",
            en: "Patience is the key to success.",
            vi: "Kiên nhẫn là chìa khóa của thành công."
        },
        {
            zh: "知识是永不褪色的财富。",
            en: "Knowledge is wealth that never fades.",
            vi: "Kiến thức là tài sản không bao giờ phai nhạt."
        },
        {
            zh: "对自己诚实是最基本的诚信。",
            en: "Being honest with yourself is the most basic integrity.",
            vi: "Thành thật với bản thân là sự chính trực cơ bản nhất."
        },
        {
            zh: "快乐源于知足。",
            en: "Happiness comes from contentment.",
            vi: "Hạnh phúc đến từ sự bằng lòng."
        },
        {
            zh: "创新始于勇于质疑。",
            en: "Innovation begins with daring to question.",
            vi: "Đổi mới bắt đầu từ dám đặt câu hỏi."
        },
        {
            zh: "同理心是理解他人的桥梁。",
            en: "Empathy is the bridge to understanding others.",
            vi: "Đồng cảm là cầu nối để hiểu người khác."
        },
        {
            zh: "生活如镜，笑对它就会笑对你。",
            en: "Life is like a mirror, smile at it and it smiles back.",
            vi: "Cuộc sống như tấm gương, cười với nó nó sẽ cười lại với bạn."
        },
        {
            zh: "宽容是心灵的阳光。",
            en: "Forgiveness is sunshine for the soul.",
            vi: "Tha thứ là ánh nắng cho tâm hồn."
        },
        {
            zh: "简单是最终的复杂。",
            en: "Simplicity is the ultimate sophistication.",
            vi: "Đơn giản là sự tinh tế tối thượng."
        },
        {
            zh: "感恩让生活更美好。",
            en: "Gratitude makes life more beautiful.",
            vi: "Lòng biết ơn làm cuộc sống đẹp hơn."
        },
        {
            zh: "专注当下，活在现在。",
            en: "Focus on the present, live in the now.",
            vi: "Tập trung vào hiện tại, sống trong giây phút này."
        },
        {
            zh: "自律是通向自由的道路。",
            en: "Self-discipline is the path to freedom.",
            vi: "Tự kỷ luật là con đường dẫn đến tự do."
        },
        {
            zh: "每个挫折都是成长的机会。",
            en: "Every setback is an opportunity for growth.",
            vi: "Mỗi thất bại là cơ hội để trưởng thành."
        },
        {
            zh: "真正的力量来自内心。",
            en: "True strength comes from within.",
            vi: "Sức mạnh thực sự đến từ bên trong."
        },
        {
            zh: "改变是生活的常态。",
            en: "Change is the constant in life.",
            vi: "Thay đổi là điều không đổi trong cuộc sống."
        },
        {
            zh: "心怀感恩，收获快乐。",
            en: "Be grateful, harvest happiness.",
            vi: "Mang lòng biết ơn, gặt hái niềm vui."
        },
        {
            zh: "成功的背后是无数次尝试。",
            en: "Behind success are countless attempts.",
            vi: "Đằng sau thành công là vô số nỗ lực."
        },
        {
            zh: "信任需要时间建立。",
            en: "Trust takes time to build.",
            vi: "Niềm tin cần thởi gian để xây dựng."
        },
        {
            zh: "每个人都有自己的节奏。",
            en: "Everyone has their own rhythm.",
            vi: "Mỗi người đều có nhịp điệu riêng."
        },
        {
            zh: "态度决定高度。",
            en: "Attitude determines altitude.",
            vi: "Thái độ quyết định độ cao."
        },
        {
            zh: "细节决定成败。",
            en: "Details determine success or failure.",
            vi: "Chi tiết quyết định thành bại."
        },
        {
            zh: "保持好奇心，永远年轻。",
            en: "Stay curious, forever young.",
            vi: "Giữ sự tò mò, mãi mãi trẻ trung."
        },
        {
            zh: "微笑是最好的名片。",
            en: "A smile is the best business card.",
            vi: "Nụ cười là tấm danh thiếp đẹp nhất."
        },
        {
            zh: "行动胜过空谈。",
            en: "Actions speak louder than words.",
            vi: "Hành động có giá trị hơn lời nói."
        },
        {
            zh: "珍惜眼前人。",
            en: "Cherish those before you.",
            vi: "Trân trọng người trước mắt."
        },
        {
            zh: "保持童心，保持梦想。",
            en: "Keep childlike wonder, keep dreaming.",
            vi: "Giữ tâm hồn trẻ thơ, giữ những ước mơ."
        },
        {
            zh: "微笑面对每一天。",
            en: "Face each day with a smile.",
            vi: "Đối mặt mỗi ngày với nụ cười."
        },
        {
            zh: "生活需要仪式感。",
            en: "Life needs ceremony.",
            vi: "Cuộc sống cần nghi thức."
        },
        {
            zh: "心怀希望，永不放弃。",
            en: "Keep hope alive, never give up.",
            vi: "Giữ hy vọng, không bao giờ từ bỏ."
        },
        {
            zh: "做最好的自己。",
            en: "Be the best version of yourself.",
            vi: "Hãy là phiên bản tốt nhất của chính mình."
        },
        {
            zh: "保持优雅，保持尊严。",
            en: "Stay elegant, maintain dignity.",
            vi: "Giữ sự thanh lịch, giữ phẩm giá."
        },
        {
            zh: "生活需要平衡。",
            en: "Life needs balance.",
            vi: "Cuộc sống cần sự cân bằng."
        },
        {
            zh: "心怀感恩，心存善意。",
            en: "Be grateful, stay kind.",
            vi: "Mang lòng biết ơn, giữ lòng tốt."
        },
        {
            zh: "享受孤独，享受生活。",
            en: "Enjoy solitude, enjoy life.",
            vi: "Tận hưởng cô đơn, tận hưởng cuộc sống."
        },
        {
            zh: "保持热爱，保持期待。",
            en: "Stay passionate, stay expectant.",
            vi: "Giữ đam mê, giữ sự mong đợi."
        },
        {
            zh: "活在当下，珍惜现在。",
            en: "Live in the present, cherish now.",
            vi: "Sống trong hiện tại, trân trọng giây phút này."
        },
        {
            zh: "保持清醒，保持理性。",
            en: "Stay awake, stay rational.",
            vi: "Giữ tỉnh táo, giữ lý trí."
        },
        {
            zh: "心存善念，善待生活。",
            en: "Keep good thoughts, treat life well.",
            vi: "Giữ ý nghĩ tốt đẹp, đối xử tốt với cuộc sống."
        },
        {
            zh: "勇敢追梦，坚持到底。",
            en: "Chase dreams bravely, persist to the end.",
            vi: "Dũng cảm theo đuổi ước mơ, kiên trì đến cùng."
        },
        {
            zh: "保持纯真，保持信念。",
            en: "Stay pure, keep faith.",
            vi: "Giữ sự thuần khiết, giữ niềm tin."
        },
        {
            zh: "心怀感激，心存敬畏。",
            en: "Be grateful, stay reverent.",
            vi: "Mang lòng biết ơn, giữ lòng kính trọng."
        },
        {
            zh: "保持好奇，保持学习。",
            en: "Stay curious, keep learning.",
            vi: "Giữ sự tò mò, tiếp tục học hỏi."
        },
        {
            zh: "心存善意，善待世界。",
            en: "Keep kindness, treat the world well.",
            vi: "Giữ lòng tốt, đối xử tốt với thế giới."
        },
        {
            zh: "保持希望，保持信心。",
            en: "Keep hope, maintain confidence.",
            vi: "Giữ hy vọng, giữ sự tự tin."
        },
        {
            zh: "心怀感激，心存敬意。",
            en: "Be grateful, stay respectful.",
            vi: "Mang lòng biết ơn, giữ sự tôn trọng."
        },
        {
            zh: "保持专注，保持耐心。",
            en: "Stay focused, keep patience.",
            vi: "Giữ sự tập trung, giữ lòng kiên nhẫn."
        },
        {
            zh: "生命如诗，岁月如歌。",
            en: "Life is poetry, time is song.",
            vi: "Cuộc đời là thơ, thởi gian là khúc hát."
        },
        {
            zh: "心中有光，脚下有路。",
            en: "Light in heart, path under feet.",
            vi: "Ánh sáng trong tim, con đường dưới chân."
        },
        {
            zh: "静心聆听，用心感受。",
            en: "Listen quietly, feel deeply.",
            vi: "Lắng nghe tĩnh lặng, cảm nhận sâu sắc."
        },
        {
            zh: "时光如水，岁月如梭。",
            en: "Time flows like water, years pass like shuttle.",
            vi: "Thời gian như nước, năm tháng như thoi đưa."
        },
        {
            zh: "心有所向，方有所成。",
            en: "Direction in heart leads to achievement.",
            vi: "Hướng đi trong tim dẫn đến thành công."
        },
        {
            zh: "淡泊明志，宁静致远。",
            en: "Simple ambitions reach far.",
            vi: "Chí hướng đơn giản đạt được xa."
        },
        {
            zh: "心有阳光，便有希望。",
            en: "Sunshine in heart brings hope.",
            vi: "Ánh nắng trong tim mang lại hy vọng."
        },
        {
            zh: "随心而行，随缘而安。",
            en: "Follow heart, accept fate.",
            vi: "Theo trái tim, chấp nhận định mệnh."
        },
        {
            zh: "心有所念，便有所成。",
            en: "Thoughts lead to achievement.",
            vi: "Suy nghĩ dẫn đến thành tựu."
        },
        {
            zh: "心有所想，便有所得。",
            en: "Desires lead to gains.",
            vi: "Khát khao dẫn đến thu hoạch."
        },
        {
            zh: "心有所信，便有所依。",
            en: "Faith provides support.",
            vi: "Niềm tin mang lại chỗ dựa."
        },
        {
            zh: "心有所爱，便有所归。",
            en: "Love provides belonging.",
            vi: "Tình yêu mang lại điểm tựa."
        },
        {
            zh: "心有所悟，便有所得。",
            en: "Understanding brings gain.",
            vi: "Hiểu biết mang lại thu hoạch."
        },
        {
            zh: "心有所向，便有所往。",
            en: "Direction leads to destination.",
            vi: "Phương hướng dẫn đến đích đến."
        },
        {
            zh: "心有所期，便有所至。",
            en: "Expectation leads to arrival.",
            vi: "Kỳ vọng dẫn đến đích đến."
        },
        {
            zh: "心有所安，便有所乐。",
            en: "Peace brings joy.",
            vi: "Bình an mang lại niềm vui."
        },
        {
            zh: "心有所定，便有所成。",
            en: "Determination brings achievement.",
            vi: "Quyết tâm mang lại thành công."
        },
        {
            zh: "心有所愿，便有所求。",
            en: "Wishes lead to pursuit.",
            vi: "Ước nguyện dẫn đến theo đuổi."
        },
        {
            zh: "心有所盼，便有所望。",
            en: "Hope leads to expectation.",
            vi: "Hy vọng dẫn đến mong đợi."
        },
        {
            zh: "云淡风轻，心随景动。",
            en: "Gentle clouds and breeze move the heart.",
            vi: "Mây nhẹ gió êm lay động trái tim."
        },
        {
            zh: "春暖花开，万物复苏。",
            en: "Spring warmth brings revival.",
            vi: "Xuân ấm hoa nở, vạn vật hồi sinh."
        },
        {
            zh: "细雨绵绵，润物无声。",
            en: "Gentle rain nourishes silently.",
            vi: "Mưa nhỏ thấm đẫm, nuôi dưỡng lặng lẽ."
        },
        {
            zh: "明月清风，心旷神怡。",
            en: "Bright moon and fresh breeze delight the spirit.",
            vi: "Trăng sáng gió mát, tâm hồn sảng khoái."
        },
        {
            zh: "山高水长，岁月静好。",
            en: "Mountains high, waters long, time peaceful.",
            vi: "Núi cao nước dài, thởi gian bình yên."
        },
        {
            zh: "花开花落，云卷云舒。",
            en: "Flowers bloom and wither, clouds gather and disperse.",
            vi: "Hoa nở hoa tàn, mây cuộn mây tan."
        },
        {
            zh: "日出日落，潮起潮落。",
            en: "Sun rises and sets, tides ebb and flow.",
            vi: "Mặt trời lên xuống, thủy triều lên xuống."
        },
        {
            zh: "风起云涌，心潮澎湃。",
            en: "Winds stir clouds surge, heart tides surge.",
            vi: "Gió nổi mây dồn, trái tim dâng trào."
        },
        {
            zh: "雨过天晴，云开见日。",
            en: "After rain comes sunshine, clouds part to reveal sun.",
            vi: "Mưa tạnh trời quang, mây tan thấy nắng."
        },
        {
            zh: "星月交辉，夜色静美。",
            en: "Stars and moon shine together, night peacefully beautiful.",
            vi: "Sao trăng giao hòa, đêm yên tĩnh đẹp."
        },
        {
            zh: "山水相依，天地相融。",
            en: "Mountains and waters depend on each other, heaven and earth merge.",
            vi: "Sơn thủy tương y, trời đất hòa quyện."
        },
        {
            zh: "四季轮回，生生不息。",
            en: "Seasons cycle endlessly.",
            vi: "Bốn mùa luân hồi, sinh sôi bất tận."
        },
        {
            zh: "春华秋实，岁月如歌。",
            en: "Spring flowers autumn fruits, years like songs.",
            vi: "Xuân hoa thu quả, năm tháng như ca."
        },
        {
            zh: "清风明月，相伴相随。",
            en: "Fresh breeze bright moon, accompany each other.",
            vi: "Gió mát trăng trong, đồng hành cùng nhau."
        },
        {
            zh: "云卷云舒，随遇而安。",
            en: "Clouds gather and disperse, peace follows circumstances.",
            vi: "Mây cuộn mây tan, an nhiên tùy duyên."
        },
        {
            zh: "花开花落，缘来缘去。",
            en: "Flowers bloom and wither, fate comes and goes.",
            vi: "Hoa nở hoa tàn, duyên đến duyên đi."
        },
        {
            zh: "日升月落，昼夜更替。",
            en: "Sun rises moon sets, day and night alternate.",
            vi: "Mặt trời lên trăng lặn, ngày đêm thay đổi."
        },
        {
            zh: "风来风去，云起云落。",
            en: "Winds come and go, clouds rise and fall.",
            vi: "Gió đến gió đi, mây lên mây xuống."
        },
        {
            zh: "雨落雨停，花开花谢。",
            en: "Rain falls rain stops, flowers bloom flowers fade.",
            vi: "Mưa rơi mưa ngừng, hoa nở hoa tàn."
        },
        {
            zh: "一念净心，处处净土。",
            en: "A pure thought makes everywhere pure land.",
            vi: "Một niệm tâm thanh tịnh, mọi nơi đều tịnh độ."
        },
        {
            zh: "一花一世界，一叶一菩提。",
            en: "A flower a world, a leaf enlightenment.",
            vi: "Một hoa một thế giới, một lá một bồ đề."
        },
        {
            zh: "一步一脚印，一念一清净。",
            en: "Each step leaves a print, each thought brings clarity.",
            vi: "Mỗi bước một dấu chân, mỗi niệm một thanh tịnh."
        },
        {
            zh: "一言一世界，一行一天地。",
            en: "A word a world, an action a universe.",
            vi: "Một lời một thế giới, một hành một trời đất."
        },
        {
            zh: "一心一意，一往无前。",
            en: "Single-minded, forward without retreat.",
            vi: "Một lòng một dạ, tiến về phía trước."
        },
        {
            zh: "一念心清净，万法皆清净。",
            en: "One pure thought, all things become pure.",
            vi: "Một niệm tâm thanh tịnh, vạn pháp đều thanh tịnh."
        },
        {
            zh: "一花开五叶，结果自然成。",
            en: "A flower blooms five petals, fruit naturally forms.",
            vi: "Một hoa nở năm cánh, kết quả tự nhiên thành."
        },
        {
            zh: "一切随缘，一切随心。",
            en: "All follows fate, all follows heart.",
            vi: "Mọi việc tùy duyên, mọi việc tùy tâm."
        },
        {
            zh: "一念慈悲，处处光明。",
            en: "One thought of compassion, light everywhere.",
            vi: "Một niệm từ bi, khắp nơi ánh sáng."
        },
        {
            zh: "一笑泯恩仇，一念解千愁。",
            en: "A smile dissolves grudges, a thought resolves worries.",
            vi: "Một nụ cười xóa hận thù, một niệm giải ngàn sầu."
        },
        {
            zh: "一叶知秋，一语知心。",
            en: "A leaf tells autumn, a word reveals heart.",
            vi: "Một lá biết thu, một lời biết lòng."
        },
        {
            zh: "一念至诚，万事皆成。",
            en: "One sincere thought, all things succeed.",
            vi: "Một niệm chí thành, vạn sự thành công."
        },
        {
            zh: "一帆风顺，一生平安。",
            en: "Smooth sailing, lifelong peace.",
            vi: "Thuận buồm xuôi gió, bình an trọn đời."
        },
        {
            zh: "一日之计在于晨，一年之计在于春。",
            en: "Plan day at dawn, plan year in spring.",
            vi: "Kế một ngày tại sớm mai, kế một năm tại mùa xuân."
        },
        {
            zh: "一点一滴，汇成江海。",
            en: "Drop by drop forms rivers and seas.",
            vi: "Từng giọt từng giọt, tạo thành sông biển."
        },
        {
            zh: "一步一景，一路芬芳。",
            en: "Each step a scene, path full of fragrance.",
            vi: "Mỗi bước một cảnh, đường đầy hương thơm."
        },
        {
            zh: "一念执着，万般烦恼。",
            en: "One attachment, thousand troubles.",
            vi: "Một niệm chấp trước, vạn điều phiền não."
        },
        {
            zh: "一切有为法，如梦幻泡影。",
            en: "All conditioned phenomena are like dreams and bubbles.",
            vi: "Tất cả pháp hữu vi, như mộng huyễn bào ảnh."
        },
        {
            zh: "一念放下，万般自在。",
            en: "Let go one thought, find freedom in all.",
            vi: "Buông một niệm, tự tại vạn điều."
        },
        {
            zh: "一花独放，一月独明。",
            en: "One flower blooms alone, one moon shines alone.",
            vi: "Một hoa nở riêng, một trăng sáng riêng."
        },
        {
            zh: "一草一木，皆有生机。",
            en: "Every grass and tree has life force.",
            vi: "Mỗi cỏ mỗi cây, đều có sinh khí."
        },
        {
            zh: "一山一水，皆有灵性。",
            en: "Every mountain and water has spirit.",
            vi: "Mỗi núi mỗi nước, đều có linh tính."
        },
        {
            zh: "一念善心，福报无量。",
            en: "One kind thought, boundless blessings.",
            vi: "Một niệm thiện tâm, phước báo vô lượng."
        },
        {
            zh: "一言既出，驷马难追。",
            en: "Words once spoken cannot be taken back.",
            vi: "Lời nói đã ra, khó lòng thu hồi."
        },
        {
            zh: "一事一物，皆有因果。",
            en: "Everything has cause and effect.",
            vi: "Mọi sự mọi vật, đều có nhân quả."
        },
        {
            zh: "一念慈心，普度众生。",
            en: "One compassionate thought saves all beings.",
            vi: "Một niệm từ tâm, độ khắp chúng sinh."
        },
        {
            zh: "一尘不染，一尘不沾。",
            en: "Free from all dust, untouched by worldly matters.",
            vi: "Không nhiễm một bụi, không vướng một trần."
        },
        {
            zh: "一切随缘，一切随喜。",
            en: "All follows fate, all brings joy.",
            vi: "Mọi việc tùy duyên, mọi việc tùy hỷ."
        },
        {
            zh: "一念明心，万法归一。",
            en: "One thought illuminates heart, all dharmas return to one.",
            vi: "Một niệm sáng tâm, vạn pháp quy nhất."
        },
        {
            zh: "心如明镜，物来顺应。",
            en: "Heart like bright mirror, responds to all naturally.",
            vi: "Tâm như gương sáng, ứng vật tự nhiên."
        },
        {
            zh: "心若菩提，处处净土。",
            en: "Heart like bodhi, everywhere pure land.",
            vi: "Tâm như bồ đề, khắp nơi tịnh độ."
        },
        {
            zh: "心如止水，澄澈见底。",
            en: "Heart like still water, clear to the bottom.",
            vi: "Tâm như nước lặng, trong suốt đáy sâu."
        },
        {
            zh: "心似莲花，出淤泥而不染。",
            en: "Heart like lotus, rising from mud unstained.",
            vi: "Tâm như hoa sen, vươn từ bùn mà không nhiễm."
        },
        {
            zh: "心如明月，普照大地。",
            en: "Heart like bright moon, illuminates all earth.",
            vi: "Tâm như trăng sáng, chiếu khắp đại địa."
        },
        {
            zh: "心若虚空，包容万物。",
            en: "Heart like empty space, embraces all things.",
            vi: "Tâm như hư không, bao dung vạn vật."
        },
        {
            zh: "心如流水，滋润万物。",
            en: "Heart like flowing water, nurtures all things.",
            vi: "Tâm như nước chảy, nuôi dưỡng vạn vật."
        },
        {
            zh: "心似青松，岁寒不改。",
            en: "Heart like green pine, unchanged in winter cold.",
            vi: "Tâm như tùng xanh, giá rét không đổi."
        },
        {
            zh: "心如朝阳，光照四方。",
            en: "Heart like morning sun, light shines all directions.",
            vi: "Tâm như bình minh, ánh sáng bốn phương."
        },
        {
            zh: "心若山泉，清澈见底。",
            en: "Heart like mountain spring, clear to the bottom.",
            vi: "Tâm như suối núi, trong vắt đáy nguồn."
        },
        {
            zh: "心如秋月，清净无瑕。",
            en: "Heart like autumn moon, pure and flawless.",
            vi: "Tâm như trăng thu, thanh tịnh không tì vết."
        },
        {
            zh: "心似白云，自在飘逸。",
            en: "Heart like white clouds, free and floating.",
            vi: "Tâm như mây trắng, tự tại phiêu diêu."
        },
        {
            zh: "心如大海，包容百川。",
            en: "Heart like great sea, embraces all rivers.",
            vi: "Tâm như biển lớn, dung nạp trăm sông."
        },
        {
            zh: "心若青山，坚定不移。",
            en: "Heart like green mountain, firm and unmoved.",
            vi: "Tâm như núi xanh, kiên định bất di."
        },
        {
            zh: "心如明灯，照亮前路。",
            en: "Heart like bright lamp, illuminates path ahead.",
            vi: "Tâm như đèn sáng, soi đường phía trước."
        },
        {
            zh: "心似春风，温暖万物。",
            en: "Heart like spring breeze, warms all things.",
            vi: "Tâm như gió xuân, ấm áp vạn vật."
        },
        {
            zh: "心如秋水，清澈透明。",
            en: "Heart like autumn water, clear and transparent.",
            vi: "Tâm như nước thu, trong suốt tinh khiết."
        },
        {
            zh: "心似飞鸟，自在翱翔。",
            en: "Heart like flying bird, soaring freely.",
            vi: "Tâm như chim bay, tự do tung cánh."
        },
        {
            zh: "心如明珠，光华内蕴。",
            en: "Heart like bright pearl, inner radiance glowing.",
            vi: "Tâm như ngọc sáng, hào quang nội tại."
        },
        {
            zh: "心如幽谷，宁静致远。",
            en: "Heart like deep valley, tranquility reaches far.",
            vi: "Tâm như thung lũng, tĩnh lặng đạt xa."
        },
        {
            zh: "心如秋菊，傲霜怒放。",
            en: "Heart like autumn chrysanthemum, blooming despite frost.",
            vi: "Tâm như cúc thu, kiêu hãnh nở hoa trong sương giá."
        },
        {
            zh: "心如溪流，潺潺不息。",
            en: "Heart like stream, flowing endlessly.",
            vi: "Tâm như suối chảy, róc rách không ngừng."
        },
        {
            zh: "心如星辰，永恒闪耀。",
            en: "Heart like stars, eternally shining.",
            vi: "Tâm như sao trời, tỏa sáng vĩnh hằng."
        },
        {
            zh: "心若竹节，虚心向上。",
            en: "Heart like bamboo joints, humble and upward.",
            vi: "Tâm như đốt trúc, khiêm tốn hướng thượng."
        },
        {
            zh: "心如玉石，温润如初。",
            en: "Heart like jade, warm and gentle as ever.",
            vi: "Tâm như ngọc đá, ôn nhuận như xưa."
        },
        {
            zh: "心如长河，奔流不息。",
            en: "Heart like long river, flowing without end.",
            vi: "Tâm như sông dài, chảy mãi không ngừng."
        },
        {
            zh: "心若磐石，坚定不移。",
            en: "Heart like rock, firm and unmoved.",
            vi: "Tâm như đá tảng, kiên định bất di."
        },
        {
            zh: "心如潮汐，往来自如。",
            en: "Heart like tides, coming and going naturally.",
            vi: "Tâm như thủy triều, đến đi tự nhiên."
        },
        {
            zh: "心如晨露，清新纯净。",
            en: "Heart like morning dew, fresh and pure.",
            vi: "Tâm như sương mai, trong trẻo tinh khiết."
        }
    ];
    
    button.addEventListener('click', function() {
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseDiv.classList.remove('visible');
        
        setTimeout(() => {
            responseDiv.innerHTML = `
                <div class="lang">${randomResponse.zh}</div>
                <div class="lang">${randomResponse.en}</div>
                <div class="lang">${randomResponse.vi}</div>
            `;
            responseDiv.classList.add('visible');
        }, 200);
        
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
});
