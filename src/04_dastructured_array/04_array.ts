
let user = {
    name: "pavel",
    age: 32,
    address: {
        city: {
            title: "Mascow"
        }
    }
}

user.address.city.title
user["address"]["city"]["title"] /// две одинаковые записи

let user1 = {
    "name": "pavel",
    "age": 32,
    "address": {
        "city": {
            "title": "Mascow"
        }
    },
    "привет как дела": "хорого"
}
user1["привет как дела"]