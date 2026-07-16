use("sample_mflix");

//ค้นหาทั้งหมด
db.comments.find({});

//ค้นหา 1 ผลลัพธ์ด้วย id
db.comments.findOne({_id: ObjectId("5a9427648b0beebeb69579f5")});

//ค้นหา 1 ผลลัพธ์ด้วย email
db.comments.findOne({email: "john_bishop@fakegmail.com"});

//ค้นหา 1 ผลลัพธ์ด้วย name
db.comments.findOne({name: "John Bishop"});