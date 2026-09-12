// --- Arabic / English Language Toggle (shared across all pages) ---
(function () {
    const translations = {
        nav: {
            home: { en: "Home", ar: "الرئيسية" },
            about: { en: "About", ar: "نبذة عني" },
            education: { en: "Education", ar: "التعليم" },
            contact: { en: "Contact", ar: "تواصل" }
        },
        footer: {
            rights: { en: "© 2026 Ibrahim Abdelhamid. All rights reserved.", ar: "© 2026 إبراهيم عبدالحميد. جميع الحقوق محفوظة." }
        },
        hero: {
            greeting: { en: "Hi, I'm", ar: "أهلاً، أنا" },
            name: { en: "Ibrahim Abdelhamid", ar: "إبراهيم عبدالحميد" },
            subtitle: { en: "Computer Science Student & Full-Stack Web Developer. Passionate about building robust web applications and clean user interfaces.", ar: "طالب علوم حاسب ومطور ويب Full-Stack، شغوف ببناء تطبيقات ويب قوية وواجهات مستخدم نظيفة." },
            viewProjects: { en: "View Projects", ar: "المشاريع" },
            downloadCV: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
            getInTouch: { en: "Get in Touch", ar: "تواصل معي" }
        },
        skills: {
            title: { en: "Core Skills", ar: "المهارات الأساسية" },
            frontendTitle: { en: "Frontend", ar: "الواجهة الأمامية" },
            frontendDesc: { en: "HTML5, CSS3, JavaScript (ES6+), and React.js for building responsive single-page applications.", ar: "HTML5 وCSS3 وJavaScript (ES6+) وReact.js لبناء تطبيقات ويب متجاوبة من صفحة واحدة." },
            backendTitle: { en: "Backend", ar: "الواجهة الخلفية" },
            backendDesc: { en: "Node.js, Express.js, and building RESTful APIs with efficient server-side logic.", ar: "Node.js وExpress.js وبناء واجهات RESTful APIs بمنطق خادم فعّال." },
            databaseTitle: { en: "Database", ar: "قواعد البيانات" },
            databaseDesc: { en: "MongoDB and Mongoose architecture for robust data storage and management.", ar: "MongoDB وMongoose لتخزين وإدارة البيانات بشكل قوي وموثوق." },
            toolsTitle: { en: "Tools & Others", ar: "أدوات ولغات أخرى" },
            toolsDesc: { en: "Git, GitHub, VS Code, Python, and C++ programming fundamentals.", ar: "Git وGitHub وVS Code، بالإضافة إلى أساسيات البرمجة بلغتي Python وC++." }
        },
        projects: {
            title: { en: "Featured Projects", ar: "أبرز المشاريع" },
            ultrasTitle: { en: "Ultras — Football Gear E-Commerce", ar: "Ultras — متجر إلكتروني لمستلزمات كرة القدم" },
            ultrasDesc: { en: "A full-featured e-commerce platform for football jerseys, boots, and gear, including product browsing with category filters, a shopping cart, and a complete checkout flow with delivery details and payment options.", ar: "منصة تجارة إلكترونية متكاملة لبيع قمصان وأحذية ومستلزمات كرة القدم، تشمل تصفح المنتجات مع فلاتر التصنيفات، وسلة شراء، ومسار إتمام طلب كامل يتضمن بيانات التوصيل وخيارات الدفع." },
            viewGithub: { en: "View on GitHub", ar: "عرض على GitHub" },
            comingSoon: { en: "More projects coming soon", ar: "مشاريع أخرى قريبًا" }
        },
        about: {
            title: { en: "About Me", ar: "نبذة عني" },
            personalInfoTitle: { en: "Personal Info", ar: "معلومات شخصية" },
            nameLabel: { en: "Name:", ar: "الاسم:" },
            nameValue: { en: "Ibrahim Abdelhamid", ar: "إبراهيم عبدالحميد" },
            roleLabel: { en: "Role:", ar: "التخصص:" },
            roleValue: { en: "Full-Stack Developer", ar: "مطور Full-Stack" },
            institutionLabel: { en: "Institution:", ar: "المؤسسة:" },
            institutionValue: { en: "Thebes Higher Institute", ar: "معهد طيبة العالي" },
            departmentLabel: { en: "Department:", ar: "القسم:" },
            departmentValue: { en: "Computer Science", ar: "علوم الحاسب" },
            backgroundTitle: { en: "My Background & Education", ar: "خلفيتي ودراستي" },
            backgroundText: { en: "I am a Computer Science student at Thebes Higher Institute in Cairo, deeply passionate about software development and building scalable web systems. My focus bridges both Frontend design and Backend data architecture.", ar: "أنا طالب علوم حاسب في معهد طيبة العالي بالقاهرة، شغوف جدًا بتطوير البرمجيات وبناء أنظمة ويب قابلة للتوسع. أهتم بالجمع بين تصميم الواجهة الأمامية وهندسة البيانات في الواجهة الخلفية." },
            certsTitle: { en: "Training & Certifications", ar: "التدريب والشهادات" },
            certsItem1Strong: { en: "National Telecommunication Institute (NTI):", ar: "المعهد القومي للاتصالات (NTI):" },
            certsItem1Text: { en: "Completed MEAN-Stack Web Development summer training program (120 hours).", ar: "أكمل برنامج التدريب الصيفي في تطوير الويب باستخدام MEAN-Stack (120 ساعة تدريبية)." },
            certsItem2Strong: { en: "Digital Egypt Pioneers Initiative (DEPI):", ar: "مبادرة رواد مصر الرقمية (DEPI):" },
            certsItem2Text: { en: "Enrolled in the React Frontend Web Developer track.", ar: "مسجّل في مسار مطور واجهات أمامية باستخدام React." }
        },
        education: {
            eyebrow: { en: "Education", ar: "التعليم" },
            heading: { en: "My Academic Journey", ar: "مسيرتي الأكاديمية" },
            dateRange: { en: "2023 - Present", ar: "2023 - حتى الآن" },
            deptTitle: { en: "Department of Computer Science", ar: "قسم علوم الحاسب" },
            institute: { en: "Thebes Higher Institute, Cairo", ar: "معهد طيبة العالي، القاهرة" },
            desc: { en: "Studying core computer science concepts, data structures, algorithms, and software development fundamentals, building a strong base for full-stack programming.", ar: "أدرس المفاهيم الأساسية لعلوم الحاسب وهياكل البيانات والخوارزميات وأساسيات تطوير البرمجيات، لبناء قاعدة قوية للبرمجة الشاملة (Full-Stack)." }
        },
        contact: {
            title: { en: "Get In Touch", ar: "تواصل معي" },
            subtitle: { en: "I'm always open to discussing new projects, creative ideas, or opportunities.", ar: "دايمًا مرحّب بمناقشة مشاريع جديدة، أفكار إبداعية، أو فرص عمل." },
            connectTitle: { en: "Let's Connect", ar: "لنتواصل" },
            connectDesc: { en: "Feel free to reach out through any of these platforms or drop me a message.", ar: "تقدر تتواصل معايا من خلال أي من المنصات دي أو تبعتلي رسالة." },
            formName: { en: "Name", ar: "الاسم" },
            formEmail: { en: "Email", ar: "البريد الإلكتروني" },
            formMessage: { en: "Message", ar: "الرسالة" },
            formSubmit: { en: "Send Message", ar: "إرسال الرسالة" },
            formSuccessAlert: { en: "Thank you! Your message has been sent.", ar: "شكرًا! تم إرسال رسالتك بنجاح." }
        }
    };

    function resolve(key) {
        return key.split('.').reduce((obj, part) => (obj ? obj[part] : null), translations);
    }

    function applyLang(lang) {
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.body.classList.toggle('lang-ar', lang === 'ar');

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const entry = resolve(el.getAttribute('data-i18n'));
            if (entry && entry[lang] !== undefined) {
                el.textContent = entry[lang];
            }
        });

        const langLabel = document.getElementById('lang-label');
        if (langLabel) langLabel.textContent = lang === 'ar' ? 'EN' : 'عربي';

        localStorage.setItem('siteLang', lang);
    }

    // Expose for use by inline form handlers (e.g. contact form success alert)
    window.siteI18n = {
        translations: translations,
        t: function (key) {
            const lang = document.documentElement.getAttribute('lang') === 'ar' ? 'ar' : 'en';
            const entry = resolve(key);
            return entry ? entry[lang] : key;
        }
    };

    document.addEventListener('DOMContentLoaded', function () {
        const savedLang = localStorage.getItem('siteLang') || 'en';
        applyLang(savedLang);

        const langToggleBtn = document.getElementById('lang-toggle');
        if (langToggleBtn) {
            langToggleBtn.addEventListener('click', function () {
                const current = document.documentElement.getAttribute('lang') === 'ar' ? 'ar' : 'en';
                applyLang(current === 'ar' ? 'en' : 'ar');
            });
        }
    });
})();
