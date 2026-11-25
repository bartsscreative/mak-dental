# Geliştirme durumu

25 Kasım 2026 · MAK Dental V2.0 · Yerel tasarım demosu

| Kontrol | Sonuç |
| --- | --- |
| Chrome, %100 zoom, 1920×1080 / 1440×900 / 1024×768 / 768×1024 / 400×904 / 390×844 / 360×800 | PASS |
| Toyopel kaynak ölçüleri, duyarlı grid, yatay taşma, yerel Manrope ve Türkçe glifler | PASS |
| Referans düzeni, özgün MAK logosu, petrol ve mint paleti, temsili görseller | PASS |
| Üç hekim, sekiz açılır konu, Enter ile açma ve kapama | PASS |
| Sticky header, 44 px menü, Enter, Tab, Escape, bağlantıda kapanma | PASS |
| Başa Dön eşik, boyut, gizli Tab durumu, menü açıkken gizleme ve JS kapalıyken bağlantı | PASS |
| Reduced motion, sayfa içi varlık istekleri, konsol ve ağ hatası kontrolü | PASS |
| Telefon, Instagram ve adres tabanlı harita bağlantılarının hedefleri | PASS |
| Gerçek arama, Instagram oturumu, harita işaretinin kesin doğruluğu ve fiziksel iOS | NOT TESTED |
| Serin kimliği taraması, noindex ve /mak-dental/ altında yerel çalışma | PASS |
| Hero kaynak genişliği için 2560 px hedefi | FAIL — Üretilen kaynak 1672 px. Kaynak boyutu korundu. |
| Hekim ve klinik bilgileri, görsel, tıbbi içerik ve yayın izni | PASS — Kullanıcı teyit etti. |

Yerel önizleme: http://127.0.0.1:8767/mak-dental/

Kayıtlar: `screenshots/desktop-1440.png`, `screenshots/mobile-390.png`, `screenshots/back-to-top.png`.
Yayın paketi: `release/mak-dental-v2.0.zip`.

## V2.0 ek kontrolleri

| Kontrol | Sonuç |
| --- | --- |
| Sekiz kategorinin detay içeriği, klavyeyle açılıp kapanma, sayfa içi bağlantılar | PASS |
| Yedi genişlikte metnin ekran sınırları içinde kalması ve konsol/ağ kontrolleri | PASS |
| Footer üzerinde Başa Dön sınırı ve ok kontrastı | PASS — Petrol zemin üzerinde mint sınır ve beyaz ok. |
| Yerel varlıklar, relative yollar, noindex/nofollow, favicon, gizli bilgi ve eski klinik taraması | PASS |
| GitHub Pages canlı HTTPS ve tarayıcı QA | NOT TESTED — Dağıtım öncesi canlı uç nokta HTTP 404. |
