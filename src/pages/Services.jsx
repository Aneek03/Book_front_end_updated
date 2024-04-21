import userContext from "../context/userContext"
import Base from "../components/Base"

const Services = () => {
    return (
        <userContext.Consumer>
            {
                (object) => (

                    <Base>
                        <h1>
                            This is services page
                        </h1>
                        {console.log(object)}
                        <h1>Welcome {object.user.login && object.user.data}</h1>
                    </Base>
                )
            }
        </userContext.Consumer>
    )
}

export default Services