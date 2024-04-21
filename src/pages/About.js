import userContext from "../context/userContext";
import Base from "../components/Base";

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          <h1>this is about page</h1>
          <p>This is a book review website</p>
          {console.log(object)}
          <h1>Welcome user: {object.user.data}</h1>
          {/*object.user.login && object.user.data.name*/}
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
