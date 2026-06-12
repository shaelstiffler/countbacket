    const Button = ({ onClick,imagtitle, imgurl, btnclass, children }) => {

    return (
        <button className="btn" onClick={onClick} className={btnclass}>
            <img src={imgurl} title={children} />
            {children}
        </button>

    )
}

export default Button