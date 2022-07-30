import React from "react";
import "./header.css";

const Header = () => {
    let img_url = "https://i.postimg.cc/wjN7B58s/car-1.jpg";
    return (
        <section id="header">
            <div className="header-background_img" style={{ backgroundImage:`url(${img_url})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"   }}>
                <div className="header-background">
                    <div className="header-title"> Bienvenido a VENKRA</div>
                </div>
                <div className="header-scroll_down">
                    SCROLL DOWN! <br/> ARROW
                </div>
            </div>
        </section>
    );
};

export default Header;