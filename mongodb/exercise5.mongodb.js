use("sample_mflix");

//ค้นหาหนังที่มี runtime มากที่สุด 5 เรื่อง
db.movies.find().sort({runtime: -1}).limit(5);
