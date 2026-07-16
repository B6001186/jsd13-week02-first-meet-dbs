use("sample_mflix");

//ค้นหาหนังที่ฉายระหว่างปี 1950 ถึง 1970 ในประเทศ USA
db.movies.find({
    countries:{$in: ["USA"]},
    released: {$gte: ISODate("1950-01-01T00:00:00Z"), $lte: ISODate("1970-12-31T00:00:00Z")}
})

//ค้นหาหนังที่มีประเภท drama และ history ที่ฉายหลัง 1970
db.movies.find({
    genres: {$all: ["Drama", "History"]},
    released: {$gt: ISODate("1970-12-31T00:00:00Z")}
}).count()

//ค้นหาหนังที่มี Roy L. McCardell แสดง ว่ามีกี่เรื่อง
db.movies.find({
    cast: "Roy L. McCardell"
}).count()

//ค้นหาหนังที่ Hal Roach กำกับ ว่ามีกี่เรื่อง
db.movies.find({
    directors: "Hal Roach"
}).count()

//ค้นหาหนังปีที่ออกฉายครั้งแรกที่ Hal Roach กำกับ
db.movies.find({
    directors: "Hal Roach"
}).sort({year: 1}).limit(1)

//ค้นหาหนังที่ win award ที่ Hal Roach กำกับ ว่ามีกี่เรื่อง
db.movies.find({$and: [{
    directors: "Hal Roach",
    "awards.wins": 1
}]}).count()