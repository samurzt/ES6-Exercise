const list = [
  {
    "id": 1,
    "status": 1,
    "inputs": [
      "asd",
      ""
    ],
    "outputs": [
      ""
    ]
  },
  {
    "id": "",
    "status": 1,
    "inputs": [
      "test",
      ""
    ],
    "outputs": [
      ""
    ]
  },
  {
    "id": "",
    "status": 1,
    "inputs": [
      "",
      "test1"
    ],
    "outputs": [
      ""
    ]
  },
  {
    "id": "",
    "status": 1,
    "inputs": [
      "gfg",
      ""
    ],
    "outputs": [
      ""
    ]
  },
  {
    "id": 10,
    "status": 1,
    "inputs": undefined,
    "outputs": [
      ""
    ]
  },    
];

for(let x in list)
{
    if(!list[x].inputs||list[x].inputs.length==0)
    {
        console.log(x," has no inputs");
    }
    else
    {
                console.log(x," has inputs");
    }
}