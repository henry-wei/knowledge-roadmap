## 1. Data Structure

### IndexedDB

**objectStores**:

**1. items: basic info about knowledge nodes in recipe**

| data     | type(json) | size      | desc                            |
| -------- | ---------- | --------- | ------------------------------- |
| id       | number     |           | key path                        |
| title    | string     | <10 words | name of knowledge node          |
| path     | string     |           | route of knowledge node         |
| mastered | number     | 0 or 1    | whether be marked to “mastered” |
| category | array      |           | class of knowledge node         |

**2. relations: the relations of each knowledge nodes in recipe**

| data   | type(json) | size | desc                              |
| ------ | ---------- | ---- | --------------------------------- |
| id     | number     |      | key path                          |
| itemId | number     |      | the id in items                   |
| parent | number     |      | the parent node of knowledge node |

**3. knowledgeDetails: the details info of knowledge nodes**

| data       | type(json) | size       | desc                                                   |
| ---------- | ---------- | ---------- | ------------------------------------------------------ |
| id         | number     |            | key path                                               |
| itemId     | number     |            | the id in items                                        |
| title      | string     | <20 words  | name of knowledge details                              |
| introduce  | string     | <300 words | the basic information about knowledge node             |
| popularity | string     |            | the image to describe the popularity of knowledge node |
| moreInfo   | array      |            | the useful websites address about the knowledge node   |

e.g.

items = [

 { id: 1, title: "Internet", path: "", mastered: 0, category: ["vantage", "advanced"] },

 { id: 2, title: "OSI", path: "/sss", mastered: 0, category: ["vantage"] },

 { id: 3, title: "HTTP", path: "/xxx", mastered: 0, category: ["vantage"] },

 { id: 4, title: "Angular", path: "/zzz", mastered: 0, category: ["vantage"] },

];

relations = [

 { id: 1, itemId: 1, parent: 0 },

 { id: 2, itemId: 2, parent: 1 },

 { id: 3, itemId: 3, parent: 1 },

 { id: 4, itemId: 4, parent: 0 },

];

knowledgeDetails = [

 { id: 1, itemId:4, title: "Angular", introduce: "xxxxxxxxxxxxxxxx", popularity: "response-blob", moreInfo: ["https://xxxx.html", "https://xxxx.html"] }

];