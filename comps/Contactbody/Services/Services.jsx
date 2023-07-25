import { useState, useEffect } from "react";

const Services = ({
  title,
  iconcolor,
  textcolor,
  titlecolor,
  text,
  primary,
  iconname,
}) => {
  const [prim, setPrim] = useState("");
  useEffect(() => {
    setPrim(primary);
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="">
        <div className={`card ${prim}`}>
          <div className="card-body">
            <div className="d-flex">
              <i className={`${iconcolor} fa-3x m-auto  ${iconname}`}></i>
            </div>
            <h3 className={`${titlecolor} font-weight-bold text-center my-3`}>
              {title}
            </h3>

            <p className={`${textcolor} mt-3  text-center `}>
              {toggle ? text.substring(0) : `${text.substring(0, 150)}.... `}

              {!toggle ? (
                <a
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className={`${textcolor} font-italic text-decoration-none font-weight-bold`}
                >
                  Readmore
                </a>
              ) : (
                <a
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className={`${textcolor} font-italic text-decoration-none font-weight-bold`}
                >
                  ShowLess
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
