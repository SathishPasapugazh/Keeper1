import React from "react";

function Footer(){
  const year = new Date().getFullYear();
  return <div><footer><p>Copyright <span className="test">&#169;</span> {year} </p></footer></div>
}
 export default Footer;