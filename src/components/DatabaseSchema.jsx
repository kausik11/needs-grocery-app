
const DefaultUser = {
    "firstname": "",
    "lastname": "",
    "mobileno": "",
    "password": "",
    "isadmin": false,
    "cart":[{
        "pimage1":"",
        "pname":"",
        "pprice":"",
        "pquantity":"",
        "pcategory":"",
        "id":""
    }],
    "orders": [{
        "address": "",
        "apartment": "",
        "city": "",
        "country": "",
        "date": "",
        "items": [{
            "pname": "",
            "pimage1": "",
            "pprice": "",
            "pcategory": "",
            "pquantity": "",
            "id": ""
        }],
    }
    ]
}

const DefaultProduct = {
    "pname": "",
    "pimage1": "",
    "pimage2":"",
    "pimage3": "",
    "pimage4":"",
    "pprice": "",
    "pcategory": "",
    "pdesc":"",
    "bestSeller":false,
    "pquantity": "",
}

//in Json server the "id" for each endpoints is autogenarated. 

export default DefaultUser;
export {DefaultProduct};


// // Sample data sent from frontend with only firstname and lastname
//and rest of object properties will create a blank properties by default
// const formData = {
//     firstname: "John",
//     lastname: "Doe"
//   };
  
//   // Default structure for other properties
//   const defaultUser = {
//     firstname: formData.firstname || "", // use the provided firstname
//     lastname: formData.lastname || "", // use the provided lastname
//     mobileno: "", // blank value for mobileno
//     password: "", // blank value for password
//     isadmin: false, // default value for isadmin
//     orders: [] // empty array for orders
//   };
  
//   // Send POST request to JSON server
//   fetch('http://localhost:3000/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(defaultUser)
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });