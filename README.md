🛍️ Order Control Case  
React tabanlı proje. Vite, TypeScript ve Ant Design kullanılarak geliştirilmiştir.  

🚀 Teknolojiler  
Bu proje aşağıdaki teknolojileri kullanmaktadır:  

⚛ React 19 - Modern React uygulama geliştirme  
⚡ Vite - Hızlı geliştirme ortamı  
🎨 Ant Design - Şık ve kullanışlı bileşenler  
🗓 Day.js - Tarih ve saat işlemleri  
🔌 Axios - HTTP istekleri için  
🛠 ESLint & TypeScript - Kod kalitesi ve güvenliği  

📦 Kurulum  
Projeyi çalıştırmak için aşağıdaki adımları takip edin:  

1️⃣ Depoyu Klonlayın  
git clone https://github.com/sadkcvd/Order-Control-Case.git  
2️⃣ Bağımlılıkları Yükleyin  
npm install  
3️⃣ Geliştirme Ortamını Başlatın  
npm run dev  
Tarayıcınızda http://localhost:5173/ adresine giderek projeyi görebilirsiniz.  
  
🔥 JSON Server Kullanımı  
sahte API'nizi başlatmak için aşağıdaki komutu çalıştırabilirsiniz:  
npx json-server --watch db.json --port 3000  

📜 Proje Yapısı  
order-control-case/  
│── src/  
│   ├── api/     # API çağrıları ve veri işlemleri  

│   ├── components/   # Yeniden kullanılabilir bileşenler  
│   └── Filter.tsx    # Dinamik Filter Bileşeni  
│   └── Table.tsx     # Dinamik Table Bileşeni  

│   ├── layout/       # Sayfa Düzeni (Header-Sider-Content)  

│   ├── pages/        # Sayfalar  
│   └── Home.tsx      # Dinamik Filter Bileşeni  
│   └── Detail.tsx    # Dinamik Table Bileşeni  

│   ├── helpers/      # Yardımcı fonksiyonlar  
│   ├── types/        # Types  

│   ├── App.tsx       # Parent - Route Yapısı  
│   └── main.tsx      # Ana giriş dosyası  
│── public/           # Statik dosyalar  
│── package.json  
│── vite.config.ts  
│── tsconfig.json  
│── README.md  
