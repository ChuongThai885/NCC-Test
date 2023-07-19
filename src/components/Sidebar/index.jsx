import React from "react"
import { PAGES } from "../../utils/constants"
import "./index.css"

export const Sidebar = () => {
    return (
        <div className="side-bar">
            <ul>
                {Object.entries(PAGES).map(([id, { name, url }]) => (
                    <li key={id} className="block">
                        <a className="block-item" href={url}>
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
