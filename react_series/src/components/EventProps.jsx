export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`Welcome ${user.toUpperCase()}`);
    }

    const Handlehover = () => {
        alert('Hovered on welcome button');
    }
    return (
            <>
            <WelcomeUser
             onClick={() => HandleWelcomeUser('shahid')} onMouseEnter={Handlehover}
             /> 
            </>
    );
};

const WelcomeUser = (props) => {

    const { onClick, onMouseEnter } = props;
    return (
        <>
        <button onClick={onClick}>Welcome</button>
        <button onMouseEnter={onMouseEnter}>Hover</button>
        </>
    );
}