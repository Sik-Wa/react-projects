

const List = () => {
    const userdata = [
        {user:"me",
         phone:[12233],
         place:"home"
        },
        {user:"you",
            phone:"111222",
            place:"there"
           },
           {user:"us",
            phone:"12345",
            place:"here"
           },
    ];

  return (
    <div>
      <section>
        {userdata.map((use)=>{
            <div>
                <h1>{use.user}</h1>
                <p>{use.phone}</p>
                <p>{use.place}</p>
            </div>
        })}
      </section>
    </div>
  )
}

export default  List
