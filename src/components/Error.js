const Error = ({errormsg}) => {
  return (
    <div>
      <div className="alert alert-danger" role="alert" >
       {errormsg}
      </div>
    </div>
  );
};

export default Error;
