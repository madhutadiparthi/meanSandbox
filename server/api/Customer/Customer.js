export function info(req,resp)
{
	resp.setHeader('Content-Type', 'application/json');
	var test = getCustomerDetail();
	resp.send(JSON.stringify(test));
}

function getCustomerDetail()
{
	var customInfo = { "type" :"CustomerInfo", 
		"metadata" : {"Version":"1"},
		"id":"0001",
		"name" : {"first":"Watson","last":""},
		"mobile" : "",
		"mail_id" : "liberation@gmail.com",
		"password" :"BlueGene",
		"address" :{},
		"license_no" : "",
		"additional_info" : {}
		}	;
	return customInfo;
}