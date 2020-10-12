const family = [
      { name: "John",
    children: ["Ali","MOhsin","Alex","Tajwar"]},

    {
        name: "Alex",
        children: ["Ayaz","Faizan","Karem","Sajjad"]
      },
      {
      name: "Cendrella",
      children: ["Michelle","Sarah","Shireen","Sajjad"]
    }
   ];
     const body = document.body;
   body.innerHTML= "<h1>Mr David</h1>"
     family.forEach(member => {
    let name = document.createElement("ul")
   name.innerHTML = member.name;
   document.body.append(name);

    for (i=0;i<4;i++){
        let children  = document.createElement("li" )
        children.innerHTML = member.children[i];
        document.body.append(children)
    }
    
   });
