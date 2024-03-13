const http = require("http");

let users = [
  {
    id: 1,
    name: "hepin",
    age: 21,
  },
  {
    id: 2,
    name: "varun",
    age: 21,
  },
  {
    id: 3,
    name: "Mit",
    age: 22,
  },
];

function generateUserId() {
  const lastUser = users[users.length - 1];
  return lastUser ? lastUser.id + 1 : 1;
}

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(users));
  } else if (request.method === "POST") {
    console.log('req.body :>> ', request.body);
    let chunks = [];
    request.on("data", (chunk) => {
      chunks.push(chunk);
    });
    request.on("end", () => {
      const data = Buffer.concat(chunks);
      const querystring = data.toString();
      const parsedData = new URLSearchParams(querystring);
      const dataObj = {};
      for (var pair of parsedData.entries()) {
        dataObj[pair[0]] = pair[1];
      }
      console.log(dataObj);
      dataObj.id = generateUserId();
      users.push(dataObj);
      console.log(users);
      response.end(JSON.stringify(users));
    });
  } else if (method === "PUT") {
    const userId = parseInt(url.split("/")[2]);

    let chunks = [];
    request.on("data", (chunk) => {
      chunks.push(chunk);
    });

    request.on("end", () => {
      const data = Buffer.concat(chunks);
      const updatedUser = data.toString();
      const parsedData = new URLSearchParams(updatedUser);
      const dataObj = {};
      for (var pair of parsedData.entries()) {
        dataObj[pair[0]] = pair[1];
      }
      console.log(dataObj);
      const index = users.findIndex((user) => user.id === userId);
      if (index >= 0) {
        // console.log(updatedUser);
        users[index].name = dataObj.name;
        users[index].age = Number(dataObj.age);

        response.statusCode = 200;
        console.log(users);
        response.end(JSON.stringify(users[index]));
      } else {
        response.statusCode = 404;
        console.log(users);
        response.end("User not found");
      }
    });
  } else if (method === "DELETE") {
    const userId = parseInt(url.split("/")[2]);
    const index = users.findIndex((user) => user.id === userId);

    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];
      response.statusCode = 200;
      response.setHeader("Content-Type", "application/json");
      console.log(users);
      console.log(deletedUser);
      response.end(JSON.stringify(deletedUser));
    } else {
      response.statusCode = 404;
      response.end("User not found");
    }
  }
});

server.listen(8000);

//question => can we change data type in post man or validate it or we need to do it in node js


// /user?username+"chfhe"