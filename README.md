## موقع شخصي شيك وخفيف (RTL)

### ازاي تبتدي
- افتح فولدر `personal-site` في المحرر بتاعك.
- عدّل الاسم والتعريف واللينكات من `index.html`.
- غير الألوان والخطوط من `styles.css` عشان تناسب هويتك.

### تشغيل محلي
- افتح ملف `index.html` مباشرة على المتصفح وخلاص.

### النشر على GitHub Pages (لمشروع داخل ريبو)
1) اعمل ريبو جديد على GitHub (مثلاً `personal-site`).
2) ارفع كل الملفات على الفرع `main`.
3) من Settings → Pages:
   - Source: اختار `Deploy from a branch`.
   - Branch: اختار `main` والمجلد `/root`، وبعدين Save.
4) لينك الموقع هيبقى بالشكل ده: `https://USERNAME.github.io/REPO`.

ملاحظات مهمة:
- الروابط متظبطة تبقى نسبية (`./favicon.svg`, `./styles.css`, `./script.js`) عشان تشتغل على Pages.
- لو هتستخدم دومين مخصص، ضيف ملف `CNAME` في الجذر باسم الدومين.

### المزايا
- RTL كامل وخط Cairo
- وضع ليلي/نهاري وبيتحفظ تلقائي
- أقسام: الرئيسية، المهارات، من أنا، الأعمال، التواصل
- سكرول ناعم وتحديد القسم النشط في الشريط العلوي
- أنيميشن لطيف: نص متدرج، ظهور متدرّج للكروت، وTilt بسيط للكروت

### تخصيص سريع
- عدّل نص الهيرو والصورة/الأفاتار من `index.html`.
- ضيف صور لمشاريعك جوه قسم "الأعمال" بتعديل وسم `<img>` لكل بطاقة.
- لو مش عايز الأنيميشن، فعل "تقليل الحركة" من إعدادات النظام؛ الكود بيحترم الإعداد ده.

### الترخيص (License)
- الكود متاح تحت رخصة MIT.
- حقوق النشر © 2025 7MO. ليك كامل الحق في استخدام، نسخ، تعديل، ودمج الكود مع ذكر الحقوق وملف الرخصة.
- لو هتنشر نسخة عامة، سيب سطر حقوق النشر والرخصة زي ما هو.

## Sleek Personal Website (RTL-ready)

### Getting Started
- Open the `personal-site` folder in your editor.
- Edit your name, bio, and links in `index.html`.
- Tweak colors and fonts in `styles.css` to match your branding.

### Run Locally
- Just open `index.html` directly in your browser.

### Deploy on GitHub Pages (Project site)
1) Create a new GitHub repository (e.g., `personal-site`).
2) Push all files to the `main` branch.
3) Go to Settings → Pages:
   - Source: select `Deploy from a branch`.
   - Branch: choose `main` and folder `/root`, then Save.
4) Your site will be available at: `https://USERNAME.github.io/REPO`.

Notes:
- Asset links are relative (`./favicon.svg`, `./styles.css`, `./script.js`) to work on Pages.
- For a custom domain, add a `CNAME` file at the root with your domain.

### Features
- Full RTL support and Cairo font
- Light/Dark mode with preference saved
- Sections: Home, About, Skills, Projects, Contact
- Smooth scroll and active nav highlighting
- Subtle animations: gradient text, staggered reveals, and card tilt

### Quick Customization
- Update hero text and avatar in `index.html`.
- Add project screenshots in the Projects section by editing each card's `<img>`.
- If you prefer fewer animations, enable “Reduce motion” in your OS; the site respects it.

### License
- Licensed under the MIT License. See `LICENSE`.
- Copyright © 2025 7MO.


