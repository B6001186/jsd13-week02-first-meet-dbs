use("sample_mflix");

//ค้นหาหนังที่มี runtime มากที่สุด 5 เรื่อง
db.movies.find().sort({runtime: -1}).limit(5);

//ค้นหาหนังที่มี runtime มากที่สุด 5 เรื่อง และมีความยาวน้อยกว่า 60
db.movies.find({runtime: {$lt: 60}}).sort({runtime: -1}).limit(5)

//เกิด 1955 อีก 10 ปีข้างหน้าจะดูเรื่องไหนได้บ้าง 3 เรื่อง
db.movies.find({year: {$gt: 1954, $lt: 1966}}).limit(3)

//นับจำนวนภาพยนตร์ในช่วงปี 1990-2000
db.movies.find({released: {$gte: ISODate("1990-01-01T00:00:00Z"), $lte: ISODate("2000-12-31T00:00:00Z")}}).count()

