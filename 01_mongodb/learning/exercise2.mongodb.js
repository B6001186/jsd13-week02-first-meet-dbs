use("sample_mflix");

//ค้นหา 1 ผลลัพธ์ด้วย type และ rated
db.movies.findOne({type: 'movie', rated: 'TV-G'});

//ค้นหาทุกผลลัพธ์ด้วย type และ rated แล้วนับจำนวน
db.movies.find({type: 'movie', rated: 'TV-G'}).count();