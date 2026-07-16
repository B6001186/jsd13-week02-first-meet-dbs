use("sample_mflix");

//ค้นหาหนังที่มีคำว่า "American" ใน plot แบบไม่สนตัวเล็ก-ใหญ่ แล้วนับจำนวน
db.movies.find({plot: {$regex: "American", $options: "i"}}).count();

//ค้นหาหนังที่มีคำลงท้ายว่า "street" ใน plot แบบไม่สนตัวเล็ก-ใหญ่ แล้วนับจำนวน
db.movies.find({plot: {$regex: "street.$", $options: "i"}}).count();

//ค้นหา 1 ผลลัพธ์หนังที่มีคำลงท้ายว่า "street" ใน plot แบบไม่สนตัวเล็ก-ใหญ่
db.movies.findOne({plot: {$regex: "street.$", $options: "i"}});