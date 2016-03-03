export function info(req,resp)
{
	resp.setHeader('Content-Type', 'application/json');
	var test = getServiceCenter();
	resp.send(JSON.stringify(test))

}
function getServiceCenter()
{
	var data= {
			"version":"1",
			"metadata":"ServiceCenter",
			"id":"0001",
			"service_name":"Royal Honda",
			"rating":"3",
			"contact":{"mobile":"9962520940","phone":""},
			"address" :{},
			"working_hours":{"start":"","end":""},
			"license_no":"",
			"years_of_existance":"",
			"brand_serviced":[],
			"branches":[]
	};
	return data;
}