use("sample_mflix");

//ค้นหาหนังที่มีคำว่า "American" ใน plot
db.movies.find({plot: {$regex: "American", $options: "i"}}).count();

//ค้นหาหนังที่มีคำลงท้ายว่า "street" ใน plot
db.movies.find({plot: {$regex: "street.$", $options: "i"}}).count();

db.movies.findOne({plot: {$regex: "street.$", $options: "i"}});