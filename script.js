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
            vi: "Niềm tin cần thời gian để xây dựng."
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
            zh: "珍惜当下的每一刻。",
            en: "Cherish every moment of the present.",
            vi: "Trân trọng từng khoảnh khắc hiện tại."
        },
        {
            zh: "学会倾听内心的声音。",
            en: "Learn to listen to your inner voice.",
            vi: "Học cách lắng nghe tiếng nói nội tâm."
        },
        {
            zh: "坚持梦想，永不言弃。",
            en: "Persist in dreams, never give up.",
            vi: "Kiên trì với ước mơ, không bao giờ bỏ cuộc."
        },
        {
            zh: "时间是最好的老师。",
            en: "Time is the best teacher.",
            vi: "Thời gian là người thầy tốt nhất."
        },
        {
            zh: "保持谦虚，继续学习。",
            en: "Stay humble, keep learning.",
            vi: "Giữ khiêm tốn, tiếp tục học hỏi."
        },
        {
            zh: "生命在于运动。",
            en: "Life lies in movement.",
            vi: "Cuộc sống nằm trong vận động."
        },
        {
            zh: "知识改变命运。",
            en: "Knowledge changes destiny.",
            vi: "Kiến thức thay đổi số phận."
        },
        {
            zh: "付出总有回报。",
            en: "Effort always pays off.",
            vi: "Nỗ lực luôn được đền đáp."
        },
        {
            zh: "创新源于思考。",
            en: "Innovation comes from thinking.",
            vi: "Đổi mới đến từ suy nghĩ."
        },
        {
            zh: "保持乐观，保持希望。",
            en: "Stay optimistic, keep hope.",
            vi: "Giữ lạc quan, giữ hy vọng."
        },
        {
            zh: "爱是最强大的力量。",
            en: "Love is the strongest power.",
            vi: "Tình yêu là sức mạnh lớn nhất."
        },
        {
            zh: "健康是最大的财富。",
            en: "Health is the greatest wealth.",
            vi: "Sức khỏe là tài sản lớn nhất."
        },
        {
            zh: "勇敢面对，永不退缩。",
            en: "Face bravely, never back down.",
            vi: "Đối mặt dũng cảm, không bao giờ lùi bước."
        },
        {
            zh: "宽容是一种智慧。",
            en: "Tolerance is a wisdom.",
            vi: "Bao dung là một sự khôn ngoan."
        },
        {
            zh: "平和是一种力量。",
            en: "Calmness is a strength.",
            vi: "Bình tĩnh là một sức mạnh."
        },
        {
            zh: "真诚是最好的礼物。",
            en: "Sincerity is the best gift.",
            vi: "Chân thành là món quà tốt nhất."
        },
        {
            zh: "责任成就未来。",
            en: "Responsibility shapes the future.",
            vi: "Trách nhiệm định hình tương lai."
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
