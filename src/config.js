const API_URL = 'https://svcs.ebay.com/services/search/FindingService/v1';
const SEARCH_BASE_URL = `${API_URL}?
	OPERATION-NAME=findItemsAdvanced
	&SECURITY-APPNAME=Benjamin-VideoGam-PRD-83882c164-4d873162
	&GLOBAL-ID=EBAY-US
	&RESPONSE-DATA-FORMAT=JSON
	&REST-PAYLOAD
	&SERVICE-VERSION=1.13.0
	&outputSelector(0)=SellerInfo
	&outputSelector(1)=ListingInfo
	&categoryId=139973
	&itemFilter(0).name=ListingType
	&itemFilter(0).value(0)=FixedPrice
	&itemFilter(0).value(1)=StoreInventory
	&keywords=`;

const CONDITIONS = ['Brand New', 'Like New', 'Very Good', 'Good', 'Acceptable'];

export { SEARCH_BASE_URL, CONDITIONS };
