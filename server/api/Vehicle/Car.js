export function info(req,resp)
{
	resp.setHeader('Content-Type', 'application/json');
	var test = getCarDetail();
	resp.send(JSON.stringify(test))
}


function getCarDetail()
{
	
	var carData = {"version" :"1.0",
					"metadata" : "Vehicle",
					"regNum" : "TN 22 CS 0079", 
					"make" : "Maruti", 
					"model":"Swift Zxi",
					"year":"2012",
					"color":"black",
					"odometer":"28,000",
					"owner" : "9962520940"};
		
	return carData;
}