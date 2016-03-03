function getService()
{
var data =	{
		"version" : "1",
		"metadata" : "Service",
		"id" :"0001",
		"ServiceCenterId" :"0001",
		"Customer":"0001",
		"Type":{},
		"Description":"",
		"CustomerComments":"",
		"RatingsByCustomer":"",
		"TimeEstimate":"",
		"ActualTime":"",
		"MoneyEstimate":"",
		"ActualCost":"",
		"Date":"",
		"Time":"",
		"Status":"",//"{COMPLETED,CUST_DECLINED,CUST_RESCHEDULED,S_DECLINED}"
		"ConfirmationMethod":{},	
		"CurrentStatus":""//"{ACCEPTED,START_SERVICE,STOP_SERVICE,PART_AWAITING,CUST_CONFIRMATION_PENDING}"
		}	
}

export function info(req,resp)
{
	resp.setHeader('Content-Type', 'application/json');
	var test = getService();
	resp.send(JSON.stringify(test));
}