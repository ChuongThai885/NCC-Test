import "./index.css"

export const Paragraph = ({ srcSVG }) => {
    return (
        <div className="paragraph-container">
            <p className="paragraph-title">Lorem ipsum dolor sit amet</p>
            <div className="paragraph-content-1">
                <img src={srcSVG} alt="My SVG" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non dui sodales, faucibus libero ut, posuere felis. Donec
                    imperdiet suscipit accumsan. Aenean consequat condimentum
                    velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at{" "}
                </p>
            </div>
            <footer className="paragraph-content-2">
                ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
                est ullamcorper id. Aenean consequat condimentum velit ut
                tempor. Nam porta massa in metus bibendum congue. Pellentesque
                ultrices vestibulum mattis.
            </footer>
        </div>
    )
}
