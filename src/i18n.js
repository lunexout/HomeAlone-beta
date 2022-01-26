import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Hotel System":"Hotel System",
      "GetStarted":"GetStarted",
      "prodiskr1": "One MixPad Mini is equal to many smart products",
      "prodiskr2": "MIXPAD'S ALL-IN-ONE GATEWAY PANEL",
      "prodiskr3": "ONE PANEL, ALL SMART",
      "prodiskr4": "The powerful system hardware integrates the functions of different devices. Convenient operation and excellent interaction make the home life experience more natural and comfortable.",
      "prodiskr5": "HOME AI 3.0 FULL HOUSE",
      "prodiskr6": "SMART HOME OPERATING SYSTEM",
      "prodiskr7": "Brand-new UI design , efficient interactive and AI voice assistant, creating a new humanized smart home experience for users.",
      "prodiskr8": "Full house lighting one-key control",
      "prodiskr9": "One panel can control multiple lights",
      "prodiskr10": "turn off all lights with one button, and no need",
      "prodiskr11": "to switch one by one.",
      "prodiskr12": "Before going out One key operation",
      "prodiskr13": "Easy-to-operate interface.",
      "prodiskr14": "Mobile APP remote control outdoor",
      "prodiskr15": "In summer, turn on the air conditioner remotely,Experience comfort immediately when you arrive home.",
      "Back": "Back",
      "Contact Us": "Contact Us",
      "Comfort Pack": "Comfort Pack",
      "Business Pack": "Business Pack",
      "Basic Pack": "Basic Pack",
      "FeedBack": "FeedBack",
      "Company": "Company",
      "HOME": "HOME",
      "PRODUCTS": "PRODUCTS",
      "SERVICES": "SERVICES",
      "ABOUT": "ABOUT",
      "TOP PRODUCT": "TOP PRODUCTS",
      "NEWS": "NEWS",
      "CONTACT": "CONTACT",
      "Interaction Center": "Interaction Center",
      "Smart Lighting": "Smart Lighting",
      "Home Security": "Home Security",
      "Smart R+T": "Smart Curtain",
      "Smart HVAC": "Temperature Control",
      "Home Entertaiment": "Home Entertaiment",
      "Domestic Appliances": "Domestic Appliances",
      "Audio Products": "Audio Products",
      "Flush Mount Ceiling Speaker": "Flush Mount Ceiling Speaker",
      "Coaxial Ceiling Speaker": "Coaxial Ceiling Speaker",
      "Two-Way Ceiling Speaker": "Two-Way Ceiling Speaker",
      "Fireproof Ceiling Speaker": "Fireproof Ceiling Speaker",
      "EN54 Ceiling Speaker": "EN54 Ceiling Speaker",
      "Surface Mount Ceiling Speaker": "Surface Mount Ceiling Speaker",
      "Mini Smart Music Host": "Mini Smart Music Host",
      "Network Smart Music Sys": "Network Smart Music Sys",
      "Smart Central Music Sys": "Smart Central Music Sys",
      "Economic Music Sys": "Economic Music Sys",
      "Speaker": "Speaker",
      "Installment": "Installment",
      "Smart Home System": "Smart Home System",
      "Smart Hotel System": "Smart Hotel System",
      "Smart Office System": "Smart Office System",
      "Partners": "Partners",
      "Showroom": "Showroom",
      "Gallery": "Gallery",
      "See More": "See More",
      "AboutName": "About Us",
      "Abouttxt1": "We are Company \"Home Alone\", founded in 2019, we produce innovative technologies and systems based on smart home management, which aims to improve living conditions. With the help of these technologies it is possible to quickly and easily create ideal conditions for the home and change daily life for the better.The company keeps driving edge technology to develop and improve smart systems. The company focuses on the introduction of IoT systems, which include home automation, energy efficiency, ventilation and heating, curtain and sunlight management, smart audio systems and smart shutter systems.",
      "Abouttxt2": "Our technologies are based on ZIGBEE technology. It is an innovative technology built on wireless networking that makes full use of the capabilities of the network to create a fast connection between products. If one product goes out of order, the other products will continue to work smoothly. Compared to other technologies ZEGBEE is fast, secure and reliable.",
      "INTRODUCTION": "INTRO",
      "homesoltxt1": "In order to enhance the smart life experience of users, \"Home Alone” provides De-house smart home solution. This solution includes 7 smart systems: Smart lighting, smart security, central condition, appliances control, access control, smart curtain and energy management.",
      "Features": "Features",
      "homesoltxt2": "Simple Installation. No wiring when use the ZigBee wireless technology. Convenient. More user-friendly design and interaction. Secure Cloud. Reliable smart home cloud platform. More Compatible. Support to link with smart devices of different brands. Low Power Consumption. ZigBee communication is stable and economic",
      "hotelsoltxt1": "მWeHotel is an innovative and smart management system for hotel, which is developed based on the latest IOT and mobile Internet technology.WeHotel system can monitor and control devices locally and remotely, optimize operation procedure and save energy, so that the total cost on both management and operation will be reduced.",
      "hotelsoltxt2": "Monitoring and controlling devices remotely.Easy and simple check-in via Wechat or User App.Comprehensive room’s status information.Various smart scenes: sleeping mode, welcome mode, all lights off mode, check-out mode etc.Wireless room control system, easy to install, modify and maintain.",
      "officesoltxt1": "Green Office solution is designed for joint office, small and medium enterprises. It is a smart lighting and energy management system.With the current protection and electricity usage monitoring function, it provides users the more convenient, comfortable and secure smart life.",
      "officesoltxt2": "24-hour remote control and management.Monitor the energy consumption by departments, districts and dates.Automatically adjust the lighting and central A/C as per the environment.Data recording and analysis by the cloud server, provide targeted energy-saving advice for companies.User-friendly management backstage, raise the efficiency.",
      "bankname1": "Bank Of Georgia",
      "banktext1": "The items you use every day determine your quality of life, therefore it is important to make sure that each of them meets your everyday needs and expectations. Don’t fall behind by waiting for the right moment, request an Installment today at POS terminals and try new possibilities in a timely fashion.",
      "bankname2": "TBC Bank",
      "banktext2": "If you want to buy goods or services when still in the store, without visiting the bank.",
      "NewsName1": "News",
      "NewsText1": "Top news about the company, what projects and innovations are planned for the future, and how far will smart home development go in the future?",
      "NewsName2": "Let’s smarter our city together!",
      "NewsText2": "Home Alone” offers you the highest quality Smart Technology. It detects movement and noise at a certain distance, which is regulated by the user’s wishes, and through the application he can see the current state of the house",
      "NewsName3": "Build One of the Smartest home In The World",
      "NewsText3": "With the help of a smart curtain hanger you will be able to manage the condition of the curtain at any time of the day, both through the application and the scripts.",
      "Modern House Analogy": "Modern House Analogy",
      "Journal & OK About US": "Journal OK About US",
      "RGB LIGHT system": "RGB LIGHT system",
      "HomeController": "Home Remote Controller",
      "ContactUs": "Contact Us",
      "GetinTouch": "Get in Touch",
      "Instagram": "Instagram",
      "Facebook": "Facebook",
      "addressline": "7 Zhiuli Shartava Street, Batumi, Adjara, Georgia",
      "mapsline": "Find Us on the Map",
      "coop": "Cooperation",
      "Solutions": "Solutions",
      "becpart": "Become Our Partner",
      "CEO":"CEO",
      "Jovani Ghoghoberidze":" Jovani Ghoghoberidze",
      "CEO And Co-founder":" CEO And Co-founder",
      "Zurab Meskhidze":" Zurab Meskhidze",
      "Marketing":" Marketing",
      "Giorgi Kalandadze":" Giorgi Kalandadze",
      "Marketing Manager":" Marketing Manager",
      "Kakhi Kakhidze":" Kakhi Kakhidze",
      "Social Media Manager":" Social Media Manager",
      "Khvicha Tebidze":" Khvicha Tebidze",
      "Video Editor":" Video Editor",
      "Sales":" Sales",
      "Naniko Mazanishvili":" Naniko Mazanishvili",
      "Sales Manager":" Sales Manager",
      "Technical And Supply Manager":" Technical And Supply Managers",
      "Mikheil donadze":" Mikheil donadze",
      "Technical Manage":" Technical Manager",
      "Ianis Ambelidi":" Ianis Ambelidi",
      "Supply manager":" Supply manager",
      "Our Project Statistics": "Our Project Statistics",
      "Current Projects": "Current Projects",
      "Finished Projects": "Finished Projects",
      "Costumers": "Costumers",
      "Products": "Products",
      "Only with one click":"Only with one click"
    }
  },
  ge: {
    translation: {
      "Hotel System":"სასტუმროს სისტემა",
      "GetStarted":"ჩვენს შესახებ",
      "TOP PRODUCT": "რჩეული პროდუქტები",
      "prodiskr1": "ერთი MixPad Mini უდრის ბევრ ჭკვიან პროდუქტს",
      "prodiskr2": "MIXPAD- ის ყოვლისმომცველი GATEWAY PANEL",
      "prodiskr3": "ერთი პანელი, ყველა ჭკვიანი",
      "prodiskr4": "მძლავრი სისტემის აპარატურა აერთიანებს სხვადასხვა მოწყობილობების ფუნქციებს. მოსახერხებელი ოპერაცია და შესანიშნავი ურთიერთქმედება სახლის ცხოვრებას უფრო ბუნებრივ და კომფორტულს ხდის.",
      "prodiskr5": "მთავარი AI 3.0 FULL HOUSE",
      "prodiskr6": "SMART HOME ოპერაციული სისტემა",
      "prodiskr7": "ახალი ინტერფეისის დიზაინი, ეფექტური ინტერაქტიული და AI ხმოვანი ასისტენტი, რომელიც ქმნის ახალი ჰუმანიზებული ჭკვიანი სახლის გამოცდილებას მომხმარებლებისთვის.",
      "prodiskr8": "სრული სახლის განათება",
      "prodiskr9": "ერთ პანელს შეუძლია გააკონტროლოს მრავალი შუქი,",
      "prodiskr10": "გამორთოს ყველა შუქი ერთი ღილაკით და",
      "prodiskr11": "არ საჭიროებს სათითაოდ გადართვას.",
      "prodiskr12": "სახლიდან გასვლამდე მხოლოდ ერთი ოპერაცია",
      "prodiskr13": "მოსახერხებელი ინტერფეისი.",
      "prodiskr14": "მობილური აპლიკაციიდან დისტანციური მართვა",
      "prodiskr15": "ზაფხულში ჩართეთ კონდიციონერი დისტანციურად, იგრძენით კომფორტი სახლში მისვლისთანავე.",
      "Back": "უკან",
      "Contact Us": "დაგვიკავშირდით",
      "Comfort Pack": "კომფორტ პაკეტი",
      "Business Pack": "ბიზნეს პაკეტი",
      "Basic Pack": "საბაზო პაკეტი",
      "FeedBack": "უკუკავშირი",
      "Company": "კომპანია",
      "HOME": "მთავარი",
      "PRODUCTS": "პროდუქტები",
      "SERVICES": "სერვისი",
      "ABOUT": "ჩვენს შესახებ",
      "NEWS": "სიახლეები",
      "CONTACT": "კონტაქტი",
      "Interaction Center": "ინტერაქტიული ცენტრი",
      "Smart Lighting": "ჭკვიანი სანათები",
      "Home Security": "დაცვის სისტემა",
      "Smart Curtain": "ჭკვიანი ფარდის საკიდი",
      "Temperature Control": "ტემპერატურის მონიტორინგი",
      "Home Entertaiment": "სახლის სისტემები",
      "Domestic Appliances": "საყოფაცხოვრებო ტექნიკა",
      "Audio Products": "აუდიო სისტემები",
      "Flush Mount Ceiling Speaker": "ჭერის სპიკერები ფარული მონტაჟისთვის",
      "Coaxial Ceiling Speaker": "კოაქსიალური სპიკერები",
      "Two-Way Ceiling Speaker": "ორმხრივი სპიკერები",
      "Fireproof Ceiling Speaker": "ცეცხლგამძლე სპიკერები",
      "EN54 Ceiling Speaker": "ჭერის EN54 სპიკერები",
      "Surface Mount Ceiling Speaker": "ჭერის დინამიკები ზედაპირული მონტაჟისთვის",
      "Mini Smart Music Host": "მუსიკალური მინი ჰოსტები",
      "Network Smart Music Sys": "ქსელური სისტემები",
      "Smart Central Music Sys": "ცენტრალური სისტემები",
      "Economic Music Sys": "ეკონომიური სისტემები",
      "Speaker": "სპიკერები",
      "Installment": "განვადება",
      "Smart Home System": "ჭკვიანი სახლის სისტემა",
      "Smart Hotel System": "ჭკვიანი სასტუმროს სისტემა",
      "Smart Office System": "ჭკვიანი ოფისი",
      "Partners": "პარტნიორები",
      "Showroom": "შოურუმი",
      "Gallery": "გალერეა",
      "See More": "მეტის ნახვა",
      "AboutName": "Ჩვენს შესახებ",
      "Abouttxt1": "ჩვენ ვართ 2019 წელს დაარსებული კომპანია \"მარტო სახლში\", რომელიც აწარმოებს ინოვაციურ ტექნოლოგიებსა და სახლის ჭკვიან მართვაზე დაფუძნებულ სისტემებს. ჩვენი მიზანია საცხოვრებელი პირობების გაუმჯობესება. მოცემული ტექნოლოგიების საშუალებით შესაძლებალია სწრაფად მარტივად და ხარისხიანად შექმნათ იდეალური პირობები სახლისთვის და შეცვალოთ ყოველდღიური ცხოვრება უკეთესობისკენ.კომპანიის მიზნებია ჭკვიანი სისტემების მუდმივი განვითარება და გაუმჯობესება. კომპანია აქცენტს აკეთებს IOT სისტემების დანერგვაზე, რომელიც მოიცავს სახლის ავტომატიზაციას, ენერგო ეფექტურობას, ვენტილაციას და გათბობას, ფარდებისა და მზის სინათლის მართვას, ჭკვიან აუდიო სისტემებს და ჭკვიანი ჩამკეტების სისტემებს.",
      "Abouttxt2": "ჩვენი მოწყობილობები დაფუძნებულია ZIGBEE ტექნოლოგიაზე. ესაა უსადენო ქსელზე აგებული ინოვაციური მოწყობილობა, რომელიც იყენებს ქსელის სრულ შესაძლებლობებს.სხვა ტექნოლოგიებთან შედარებით, ZEGBEE არის ყველაზე სწრაფი, უსაფრთხო და სანდო.",
      "INTRODUCTION": "შესავალი",
      "homesoltxt1": "მარტო სახლში” გთავაზობთ De-house ჭკვიანი სახლის აღჭურვილობას, იმისთვის, რომ მიიღოთ შესაძლებლობა იცხოვროთ თანამედროვე, ჭკვიანი მოწყობილობებით აღჭურვილ სახლში.აღნიშნული შემოთავაზება მოიცავს 7 ჭკვინი სისტემის გაერთიანებას: ჭკვიანი განათება, ავტომატიზირებული დაცვის სისტემა, ცენტრალური გათბობა, ელექტრონული მოწყობილობების კონტროლი, წვდომის კონტროლი, ჭკვიანი ფარდები და ენერგიის მართვა.",
      "Features": "მახახიათებლები",
      "homesoltxt2": "მარტივი ინსტალაცია. ZigBee უკაბელო ტექნოლოგიები, რაც ნიშნავს, რომ არ არსებობს საკაბელო სისტემების გაყვანის საჭიროება.კომფორტული. მომხმარებლის კომფორტზე ორიენტირებული დიზაინი.უსაფრთხო. ჭკვიანი სახლის ქლაუდის სანდო პლატფორმა.უფრო თავსებადი. სხვადასხვა ბრენდის სმარტ-მოწყობილობებთან მარტივად დაკავშირების მხარდაჭერა.მოიხმარს ნაკლებ ენერგიას. ZigBee არის სტაბილური და ეკონომიკურად მომგებიანი გადაწყვეტილება.",
      "hotelsoltxt1": "WeHotel წარმოადგენს ინოვაციური და ავტომატიზირებული მართვის სისტემას, რომელიც შექმნილია სასტუმროებისთვს და ეფუძნება უხლოეს IOT (სმარტ ტექნოლოგიების ინტერნეტით მართვის სისტემა) და მიბილური ინტერნეტის ტექნოლოგიებს.WeHotel სისტემის საშუალებით შესაძლებელია სასტუმტროში არსებული საკონტროლო მოწყობილობების როგორც ადგილზე ასევე დისტანციურად კონტროლი, მუშაობის პროცედურების ოპტიმიზაცია და ენერგიის დაზოგვა, ისე, რომ მართვისა და ოპერირების ჯამური ხარჯები შემცირდეს.",
      "hotelsoltxt2": "ელექტრონული მოწყობილობების დისტანციური მონიტორინგი და კონტროლი. მარტივი დაჩექინება Wechat ან მომხმარებლის აპლიკაციის საშუალებით. სრული ინფომრაცია ოთახის სტატუსის შესახებ.მრაფალფეროვანი რეჟიმები: ძირის რეჟიმი, „კეთილი იყოს თქვენი მობრძანება\" რეჟიმი (ან სტუმრის დახვედრის რეჟიმი), განათებების გამორთვის რეჟიმი, ჩექაუთის რეჟიმი და ა.შ.ოთახების საკონტროლო უკაბელო სისტემა, მარტივი ინსტალაცია, საჭიროებისამებრ მორგება და გამოყენება.",
      "officesoltxt1": "\"მწვანე ოფისი\" დაპროექტებულია გაერთიანებული ოფისისთვის, მცირე და საშუალო ბიზნესებისთვის. ეს არის ჭკვიანი განათებისა და ენერგიის მართვის სისტემა.დაცვის სისტემითა და ელექტროენერგიის მოხმარების მონიტორინგის ფუნქციით, „მწვანე ოფისი\" მომხმარებელს უზრუნველყოფს გაცილებით უფრო კომფორტული და უსაფრთხო პირობებით.",
      "officesoltxt2": "24-საათიანი დისტანციური კონტროლი.ენერგიის მოხმარების კონტროლი დეპარტამენტების, რაიონებისა და თარიღების მიხედვით.ცენტრარული გათბობისა და განათების სისტემების ავტომატური ცვლილება გარემოპირობების მიხედვით.თარიღების აღრიცხვა და ანალიზი ქლაუდის სერვერის მეშვეობით, სასარგებლო რჩევები ენერგიის დაზოგვისთვის.მომხმარებელზე ორიენტირებული მენეჯმენტი, ეფექტურობის ზრდა.",
      "bankname1": "საქართველოს ბანკი",
      "banktext1": "ნივთები, რომლებსაც ყოველდღიურად იყენებ, ცხოვრების ხარისხის განმსაზღვრელია, ამიტომ აუცილებელია, თითოეული მათგანი სრულად აკმაყოფილებდეს შენს დღევანდელ საჭიროებებსა და მოლოდინებს.არ ჩამორჩე დროს შესაფერისი მომენტის დადგომის მოლოდინში, დღესვე მოითხოვე განვადება სავაჭრო და მომსახურების ობიექტებში და ყოველთვის დროულად გამოცადე ახალი შესაძლებლობები",
      "bankname2": "TBC Bank",
      "banktext2": "სწრაფი, მარტივი და ხელსაყრელი გზა შეიძინო სასურველი ნივთი მაღაზიიდან ან სასურველი ობიექტიდან ბანკში ვიზიტის გარეშე",
      "NewsName1": "ახალი ამბები",
      "NewsText1": "მთავარი სიახლეები კომპანიის შესახებ, რა პროექტები და ინოვაციები იგეგმება სამომავლოდ და სადამდე მივა ჭკვიანი სახლის განვითარება მომავალში",
      "NewsName2": "ერთად დავაჭკვიანოთ ჩვენი ქალაქი!",
      "NewsText2": "'მარტო სახლში' გთავაზობთ უმაღლესი ხარისხის სმარტ ტექნოლოგიას. ის ამოიცნობს მოძრაობას და ხმაურს გარკვეულ მანძილზე, რაც რეგულირდება მომხმარებლის სურვილებით და აპლიკაციის საშუალებით მას შეუძლია დაინახოს სახლის ამჟამინდელი მდგომარეობა",
      "NewsName3": "ააშენეთ მსოფლიოში ერთ -ერთი ყველაზე ჭკვიანი სახლი",
      "NewsText3": "ჭკვიანი ფარდის საკიდის დახმარებით თქვენ შეძლებთ მართოთ ფარდის მდგომარეობა დღის ნებისმიერ დროს, როგორც აპლიკაციის, ისე სკრიპტების საშუალებით.",
      "Modern House Analogy": "თანამედროვე სახლის ანალოგია",
      "Journal & OK About US": "ჟურნალი OK ჩვენს შესახებ",
      "RGB LIGHT system": "RGB LIGHT სისტემა",
      "HomeController": "სახლის კონტროლი დისტანციურად",
      "ContactUs": "დაგვიკავშირდით",
      "GetinTouch": "კონტაქტები",
      "Instagram": "Instagram",
      "Facebook": "Facebook",
      "addressline": "საქართველო, აჭარა, ბათუმი, ჟიული შარტავას ქ. 7",
      "mapsline": "რუკა",
      "coop": "კოოპერაცია",
      "Solutions": "სისტემები",
      "becpart": "გახდი ჩვენი პარტნიორი",
      "CEO":" CEO",
      "Jovani Ghoghoberidze":" ჯოვანი ღოღობერიძე",
      "CEO And Co-founder":" აღმასრულებელი დირექტორი",
      "Zurab Meskhidze":" ზურაბ მესხიძე",
      "Marketing":" მარკეტინგი",
      "Giorgi Kalandadze":" გიორგი კალანდაძე",
      "Marketing Manager":" მარკეტინგის მენეჯერი",
      "Kakhi Kakhidze":" კახი კახიძე",
      "Social Media Manager":" სოც. მედიის მენეჯერი",
      "Khvicha Tebidze":" ხვიჩა თებიძე",
      "Video Editor":" ვიდეო ედიტორი",
      "Sales":" გაყიდვები",
      "Naniko Mazanishvili":" ნანიკო მაზანიშვილი",
      "Sales Manager":" გაყიდვების მენეჯერი",
      "Technical And Supply Manager":" ტექნიკური და შესყიდვების მენეჯერი",
      "Mikheil donadze":" მიხეილ დონაძე",
      "Technical Manager":" ტექნიკური მენეჯერი",
      "Ianis Ambelidi":" იანის ამბელიდი",
      "Supply manager":" შესყიდვების მენეჯერი",
      "Our Project Statistics": "ჩვენი სტატისტიკა",
      "Current Projects": "მიმდინარე პროექტები",
      "Finished Projects": "დასრულებული პროექტები",
      "Costumers": "მომხმარებლები",
      "Products": "პროდუქტები",
      "Only with one click":"ღილაკზე მხოლოდ ერთი დაჭერით "


    }
  },
  ru: {
    translation: {
      "Hotel System":"Гостиничная система",
      "GetStarted":"О НАС",
      "TOP PRODUCT": "ТОП ПРОДУКТЫ",
      "prodiskr1": "Один MixPad Mini равен многим умным продуктам",
      "prodiskr2": "УНИВЕРСАЛЬНАЯ ПАНЕЛЬ ШЛЮЗА MIXPAD",
      "prodiskr3": "ОДНА ПАНЕЛЬ, ВСЕ УМНЫЕ",
      "prodiskr4": "Мощное системное оборудование объединяет функции различных устройств. Удобное управление и отличное взаимодействие делают домашнюю жизнь более естественной и комфортной.",
      "prodiskr5": "AI 3.0 ПОЛНЫЙ ДОМ",
      "prodiskr6": "ОПЕРАЦИОННАЯ СИСТЕМА УМНОГО ДОМА",
      "prodiskr7": "Совершенно новый дизайн пользовательского интерфейса, эффективный интерактивный помощник и голосовой помощник с искусственным интеллектом, создающий новый гуманный умный дом для пользователей.",
      "prodiskr8": "Управление освещением всего дома с помощью одной клавиши",
      "prodiskr9": "Одна панель может управлять несколькими источниками света,",
      "prodiskr10": "выключать все источники света одной кнопкой, и нет",
      "prodiskr11": "необходимости переключаться по одному.",
      "prodiskr12": "Перед выходом Одна ключевая операция",
      "prodiskr13": "Удобный интерфейс.",
      "prodiskr14": "Мобильное приложение дистанционного управления на открытом воздухе",
      "prodiskr15": "Летом включайте кондиционер дистанционно. Почувствуйте комфорт сразу же по приезду домой.",
      "Back": "назад",
      "Contact Us": "свяжитесь с нами",
      "Comfort Pack": "Комфорт-пакет",
      "Business Pack": "бизнес пакет",
      "Basic Pack": "Базовый пакет",
      "FeedBack": "Обратная связь",
      "Company": "Компания",
      "HOME": "ГЛАВНАЯ",
      "PRODUCTS": "ПРОДУКТЫ",
      "SERVICES": "СЕРВИСЫ",
      "ABOUT": "О НАС",
      "NEWS": "НОВОСТИ",
      "CONTACT": "КОНТАКТЫ",
      "Interaction Center": "Центр взаимодействия",
      "Smart Lighting": "Умное Освещение",
      "Home Security": "Домашняя безопасность",
      "Smart Curtain": "Умная стойка для штор",
      "Temperature Control": "Мониторинг температуры",
      "Home Entertaiment": "Домашние развлечения",
      "Domestic Appliances": "Домашная техника",
      "Audio Products": "Аудио продукты",
      "Flush Mount Ceiling Speaker": "Потолочный динамик скрытого монтажа",
      "Coaxial Ceiling Speaker": "Коаксиальный потолочный динамик",
      "Two-Way Ceiling Speaker": "Двухполосный потолочный динамик",
      "Fireproof Ceiling Speaker": "Огнестойкий потолочный динамик",
      "EN54 Ceiling Speaker": "EN54 Потолочный динамик",
      "Surface Mount Ceiling Speaker": "Потолочный динамик для поверхностного",
      "Mini Smart Music Host": "умный Мини музыкальный хост",
      "Network Smart Music Sys": "Сетевая музыкальная система",
      "Smart Central Music Sys": "центральная музыкальная система",
      "Economic Music Sys": "Экономическая Музыкальная Система",
      "Speaker": "Динамики",
      "Installment": "Рассрочка",
      "Smart Home System": "Система Умного Дома",
      "Smart Hotel System": "Система Умного Отеля",
      "Smart Office System": "Система Умного Офиса",
      "Partners": "партнеры",
    "Showroom": "Шоурум",
    "Gallery": "Галерея",
    "See More": "Подробнее",
    "AboutName": "О нас",
    "Abouttxt1": "Мы основанной в 2019 году компанией «Один дома», мы производим инновационные технологии и системы, основанные на управлении умным домом, целью которого является улучшение условий жизни. С помощью этих технологий можно быстро и легко создать идеальные условия для дома и изменить повседневную жизнь к лучшему.Компания продолжает продвигать передовые технологии для разработки и улучшения интеллектуальных систем. Компания фокусируется на внедрении систем IoT, которые включают домашнюю автоматизацию, энергоэффективность, вентиляцию и отопление, управление занавесками и солнечным светом, интеллектуальные аудиосистемы и системы интеллектуальных жалюзи.",
      "Abouttxt2": "Наши технологии основаны на технологии ZIGBEE. Это инновационная технология, основанная на беспроводной сети, которая в полной мере использует возможности сети для создания быстрого соединения между продуктами. Если один продукт выходит из строя, остальные продолжают работать без сбоев. По сравнению с другими технологиями ZEGBEE работает быстро, безопасно и надежно.",
      "INTRODUCTION": "ВСТУПЛЕНИЕ",
      "homesoltxt1": "Для того чтобы улучшить умный жизненный опыт пользователей, «Home Alone» предлагает решение для умного дома De-house.Это решение включает в себя 7 интеллектуальных систем: интеллектуальное освещение, интеллектуальную безопасность, центральное состояние, управление приборами, контроль доступа, интеллектуальные шторы и управление энергопотреблением.",
      "Features": "ФУНКЦИИ",
      "homesoltxt2": "Простая установка. Нет проводки при использовании беспроводной технологии ZigBee.Удобный. Более удобный дизайн и взаимодействие.Безопасное облако. Надежная умная домашняя облачная платформа.Более совместимый. Поддержка связи со смарт-устройствами разных брендов.Низкое энергопотребление. Связь ZigBee стабильна и экономична.",
      "hotelsoltxt1": "WeHotel — это инновационная и интеллектуальная система управления отелем, разработанная на основе новейших технологий IOT и мобильного Интернета.Система WeHotel может мониторить и контролировать устройства локально и удаленно, оптимизировать рабочие процедуры и экономить энергию, так что общие затраты на управление и эксплуатацию будут снижены.",
      "hotelsoltxt2": "Мониторинг и управление устройствами удаленно.Легкая и простая регистрация через Wechat или пользовательское приложение.Полная информация о состоянии номера.Различные умные сцены: спящий режим, режим приветствия, режим выключенного освещения, режим проверки и т. Д.Беспроводная система управления помещением, простота установки, модификации и обслуживания",
      "officesoltxt1": "Решение Green Office предназначено для совместных офисов, малых и средних предприятий. Это интеллектуальная система управления освещением и энергопотреблением.Благодаря текущей функции защиты и мониторинга использования электроэнергии она обеспечивает пользователям более удобную, комфортную и безопасную интеллектуальную жизнь.",
      "officesoltxt2": "24-часовой дистанционный контроль и управление.Контролировать энергопотребление по отделам, районам и датам. Автоматически отрегулируйте освещение и центральный кондиционер в соответствии с окружающей средой.Регистрация и анализ данных с помощью облачного сервера предоставляют целевые советы по энергосбережению для компаний.Удобное управление за кулисами, повышение эффективности.",
      "bankname1": "Bank Of Georgia",
      "banktext1": "Предметы, которыми вы пользуетесь каждый день, определяют качество вашей жизни, поэтому важно убедиться, что каждый из них соответствует вашим повседневным потребностям и ожиданиям. Не отставайте в ожидании подходящего момента, запросите рассрочку сегодня в POS-терминалах и своевременно опробуйте новые возможности.",
      "bankname2": "TBC Bank",
      "banktext2": "Если вы хотите купить товары или услуги еще в магазине, не посещая банк.",
      "NewsName1": "Новости",
    "NewsText1": "Главные новости о компании, какие проекты и нововведения запланированы в будущем и как далеко зайдет разработка умного дома в будущем?",
    "NewsName2": "Давайте вместе умнее наш город!",
    "NewsText2": "«Один дома» предлагает вам интеллектуальные технологии высочайшего качества. Он обнаруживает движение и шум на определенном расстоянии, которое регулируется по желанию пользователя, и через приложение он может видеть текущее состояние дома.",
    "NewsName3": "Постройте один из самых умных домов в мире",
    "NewsText3": "С помощью умной вешалки для штор вы сможете управлять состоянием штор в любое время суток, как через приложение, так и через скрипты.",
    "Modern House Analogy": "Аналогия с современным домом",
    "Journal & OK About US": "Журнал и ОК О нас",
    "RGB LIGHT system": "Система RGB освещение",
    "HomeController": "Домашний удаленный контроллер",
    "ContactUs": "Связаться с нами",
    "GetinTouch": "контакты",
    "Instagram": "Instagram",
    "Facebook": "Facebook",
    "addressline": "Улица Жиули Шартава, 7, Батуми, Аджария, Грузия",
    "mapsline": "Найдите нас на карте",
    "coop": "Сотрудничество",
    "Solutions": "Решения",
    "becpart": "Станьте нашим партнером",
    "CEO": "Генеральный директор",
    "Jovani Ghoghoberidze": "Джовани Гогоберидзе",
    "Zurab Meskhidze": "Зураб Месхидзе",
    "CEO And Co-founder": "Генеральный директор и соучредитель",
    "Marketing": "Маркетинг",
    "Giorgi Kalandadze": "Георгий Каландадзе",
    "Marketing Manager": "Менеджер по маркетингу",
    "Kakhi Kakhidze": "Кахи Кахидзе",
    "Social Media Manager": "Менеджер социальных сетей",
    "Khvicha Tebidze": "Хвича Тебидзе",
    "Video Editor": "Видеоредактор",
    "Sales": "Продажи",
    "Naniko Mazanishvili": "Нанико Мазанишвили",
    "Sales Manager": "Менеджер по продажам",
    "Technical And Supply Manager": "Технический менеджер и менеджер по снабжению",
    "Mikheil donadze": "Михеил донадзе",
    "Technical Manage": "Технический менеджмент",
    "Ianis Ambelidi": "Янис Амбелиди",
    "Supply manager": "Менеджер по снабжению",
    "Our Project Statistics": "Статистика нашего проекта",
    "Current Projects": "Текущие проекты",
    "Finished Projects": "Готовые проекты",
    "Costumers": "Костюмеры",
    "Products": "Продукты",
    "Only with one click":"Только одним нажатием на кнопку"


    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: `${localStorage.getItem('lang') || 'en'}`,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;