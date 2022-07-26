// import data from "./example.json";
// console.log(data)

var jsondata = [
    {
        destination_addresses: [
            "Washington, DC, USA",
            "Philadelphia, PA, USA",
            "Santa Barbara, CA, USA",
            "Miami, FL, USA",
            "Austin, TX, USA",
            "Napa County, CA, USA",
        ],
        origin_addresses: ["New York, NY, USA"],
        rows: [
            {
                elements: [
                    {
                        distance: {
                            text: "227 mi",
                            value: 365468,
                        },
                        duration: {
                            text: "3 hours 54 mins",
                            value: 14064,
                        },
                        status: "OK",
                    },
                    {
                        distance: {
                            text: "94.6 mi",
                            value: 152193,
                        },
                        duration: {
                            text: "1 hour 44 mins",
                            value: 6227,
                        },
                        status: "OK",
                    },
                    {
                        distance: {
                            text: "2,878 mi",
                            value: 4632197,
                        },
                        duration: {
                            text: "1 day 18 hours",
                            value: 151772,
                        },
                        status: "OK",
                    },
                    {
                        distance: {
                            text: "1,286 mi",
                            value: 2069031,
                        },
                        duration: {
                            text: "18 hours 43 mins",
                            value: 67405,
                        },
                        status: "OK",
                    },
                    {
                        distance: {
                            text: "1,742 mi",
                            value: 2802972,
                        },
                        duration: {
                            text: "1 day 2 hours",
                            value: 93070,
                        },
                        status: "OK",
                    },
                    {
                        distance: {
                            text: "2,871 mi",
                            value: 4620514,
                        },
                        duration: {
                            text: "1 day 18 hours",
                            value: 152913,
                        },
                        status: "OK",
                    },
                ],
            },
        ],
        status: "OK",
    },
];
console.log(jsondata[0]);
//    console.log(jsondata.duration);
let destadd = jsondata.destination_addresses;

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);
document.getElementById("body").appendChild(table);

let row_1 = document.createElement("tr");

let heading_1 = document.createElement("th");
heading_1.innerHTML = "Adress";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "Distance";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "duration";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

// Adding the entire table to the body tag
document.getElementById("body").appendChild(table);

for (let destadd of jsondata[0].destination_addresses) {
    console.log(destadd);
    let row_2 = document.createElement("tr");
    row_2.setAttribute("id","foo");

    let row_2_data_1 = document.createElement("td");
    row_2.appendChild(row_2_data_1);
    row_2_data_1.innerHTML = destadd;
    tbody.appendChild(row_2);
}

for (let ele of jsondata[0].rows) {
  console.log("Elemenet--", ele);
  Object.values((ele)).map((data) => (
    data.map((element) => {
      console.log('element', element)
      let docId = document.getElementById('foo');
      let row_3_data_2 = document.createElement("td");
      row_3_data_2.innerHTML = element.distance.text
      docId.appendChild(row_3_data_2);
      tbody.appendChild(docId);
      let row_3_data_3 = document.createElement("td");
      row_3_data_3.innerHTML = element.duration.text
      docId.appendChild(row_3_data_3);
      tbody.appendChild(docId);
    })
  ))
}
