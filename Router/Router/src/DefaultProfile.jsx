import { Link } from "react-router-dom";
const DefaultProfile = () => {
  return (
    <>
      <p>
        To see the Spinach Profile : <Link to="spinach">Click Here!</Link>
      </p>
      <p>
        To see the Popeye Profile : <Link to="popeye">Click Here!</Link>
      </p>
    </>
  );
};

export default DefaultProfile;
