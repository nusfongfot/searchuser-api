function Card({ users, search, infoUsers}) {
  return (
    <div>
      {users.filter((val) => {
              const fullname = val.name.title + '.' + val.name.first + ' ' + val.name.last
              return fullname.toLowerCase().includes(search.toLowerCase())
            }).map((user,index) => {       
               return (               
                <div className="show-user" key={index} onClick={() => infoUsers(user)}>
                    <img className="image-user" src={user.picture.thumbnail} alt="" />
                <div>
                  <li className="username" >{user.name.title}.{user.name.first} {user.name.last}</li>
                  <li className="useremail" >{user.email}</li>
                </div>
              </div>         
              )
            })}
    </div>
  )
}

export default Card