use("sample_mflix");

//ค้นหาทุกผลลัพธ์ด้วยการเจาะจง state แล้วนับจำนวน
db.theaters.find({"location.address.state": "AL"}).count();

//ค้นหาทุกผลลัพธ์ด้วยการเจาะจง state แล้วนับจำนวน
db.theaters.find({"location.address.state": "La Quinta"}).count();

//ค้นหา 1 ผลลัพธ์ด้วยการเจาะจง state แล้วนับจำนวน
db.theaters.findOne({"location.address.state": "La Quinta"});