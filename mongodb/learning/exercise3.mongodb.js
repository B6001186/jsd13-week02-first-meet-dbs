use("sample_mflix");

db.theaters.find({"location.address.state": "AL"}).count();

db.theaters.find({"location.address.state": "La Quinta"}).count();

db.theaters.findOne({"location.address.state": "La Quinta"});