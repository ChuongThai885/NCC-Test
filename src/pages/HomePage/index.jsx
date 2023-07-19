import React from "react"
import { Sidebar } from "../../components/Sidebar"
import "./index.css"
import { PageHeader } from "../../components/PageHeader"
import cssIcon from "../../assets/css-icon.svg"
import htmlIcon from "../../assets/html-icon.svg"
import urlIcon from "../../assets/url-icon.svg"
import { Paragraph } from "../../components/Paragraph"

export const HomePage = () => {
    return (
        <div className="container">
            <Sidebar />
            <div className="page-content">
                <div>
                    <PageHeader />
                </div>
                <div className="page-paragraph">
                    <div>
                        <div className="main-paragraph">
                            <p className="main-title">
                                Lorem ipsum dolor sit asmet?
                            </p>
                            <p className="main-content">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quia alias dolorem officia
                                distinctio nostrum ducimus ea quas tenetur,
                                incidunt recusandae aspernatur, amet eaque
                                commodi hic, quibusdam quam magnam numquam
                                repellendus.
                            </p>
                        </div>
                        <div className="sub-paragraphs">
                            <Paragraph srcSVG={cssIcon} />
                            <Paragraph srcSVG={htmlIcon} />
                            <Paragraph srcSVG={urlIcon} />
                        </div>
                    </div>
                    <div className="page-footer">
                        <p>Copyright © 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
