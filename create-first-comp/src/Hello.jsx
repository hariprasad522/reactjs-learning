function Hello() {
  
  let myName = "Hari";
  let msgNo = 123;
  let fullName = () => {
      return "Hariprasad C"
  
  };

  return <p>
       MsgNo: {msgNo} I am {fullName()}
  </p>
    
    
}

export default Hello;