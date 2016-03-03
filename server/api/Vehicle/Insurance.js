export function info(req,resp)
{
	resp.setHeader('Content-Type', 'application/json');
	var test = getInsurance();
	resp.send(JSON.stringify(test))

}
function getInsurance()
{
	var data = {
			"version" :"1",
			"metadata" :"Insurance",
			"id":"0001",
			"vehicleid":"0001",
			"renewal_due":"12/10/2016",
			"premium":"10000"			
	};
	return data;
}