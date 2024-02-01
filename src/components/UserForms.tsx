type UserProps = { //preparando a variavel para receber um objeto do data
  data: {
    name: string,
    email: string
  };
  updateFieldHandler: (key: string, value: string) => void; //quando o returno é nulo eu tipo ela como void
}

const UserForms = ({data, updateFieldHandler}: UserProps) => {
  return (
    <div>
       <div className="form-control">
      <label htmlFor="name">Nome:</label>
      <input 
      type="text" 
      name='name' 
      id='name' 
      placeholder='Type your name' 
      required 
      value={data.name || ""}
      onChange={(e) => updateFieldHandler("name", e.target.value)}
      />
    </div>

      <div className="form-control">
      <label htmlFor="email">Nome:</label>
      <input 
      type="text" 
      name='email' 
      id='email' 
      placeholder='Type your E-mail' 
      required 
      value={data.email || ""}
      onChange={(e) => updateFieldHandler("email", e.target.value)}
      />
    </div>
    </div>
   
    
  )
}

export default UserForms