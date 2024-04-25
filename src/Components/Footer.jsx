import React from "react";
import { Layout } from "antd";
import './Footer.css';





const { Footer: AntFooter } = Layout;

const Footer = () => {
    return (
        <AntFooter className="footer">
            &Copy; 2024 Nick Maina.All rights reserved.
        </AntFooter>
    )
}

export default Footer