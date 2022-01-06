//Task Name Open Brewery API 

async function getdata(){
try{
let res=await fetch ("https://api.openbrewerydb.org/breweries")
let result= await res .json();

   //Display the breweries name and type?
for(var i in result){
   var value=result[i].name
   console.log(value)
   console.log(typeof value)

   //Display the brewery’s address?
   var address=result[i].address_2
   console.log(address)

   //Display the phone no of the brewery?
   var phone =result[i].phone
   console.log(phone)

}
//Also display the website url?
function getURL() {
    return("The URL of this page is: " + window.location.href);
}
     console.log(getURL())
}  
     catch (error) {
}
}
getdata()