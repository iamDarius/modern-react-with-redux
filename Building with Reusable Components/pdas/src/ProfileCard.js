
function ProfileCard({title, handle, image}) {
    return(
        <div>
            <div><h3>{title}</h3></div>
            <img alt="pda logo" src={image} />
        </div>
    ) ;
}

export default ProfileCard;