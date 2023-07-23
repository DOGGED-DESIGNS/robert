import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Animatez from "@/Animate";
import { Scale } from "@mui/icons-material";

const index = () => {
  const { menu, menuchild, supplychild, supplycont, genchild, gencont } =
    Animatez();

  const [toggle, setToggle] = useState(false);
  const [indexz, setIndexz] = useState(1);

  const [name, setName] = useState(false);
  const [text, setText] = useState(false);
  const [email, setEmail] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const passwordRegex = /^.{6,}$/;
  // const passwordRegexconfirm = /^.{6,}$/;
  const textarea = /^[a-zA-Z0-9_-]{2,225}$/;
  const username = /^[a-zA-Z0-9_-]{2,20}$/;

  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      autoplay: {
        delay: 5000, // Set the delay between lside transitions (in milliseconds)
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    });

    // this is the second fade

    // second script swiper for scroll

    var swiperz = new Swiper(".iconSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 3,
        },
        950: {
          slidesPerView: 4,
        },
      },
      autoplay: {
        delay: 2000, // Set the delay between lside transitions (in milliseconds)
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // third swiper for scroll
    var swiperz = new Swiper(".swiperService", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 2,
        },
      },
      autoplay: {
        delay: 2000, // Set the delay between lside transitions (in milliseconds)
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swipertest = new Swiper(".testSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 1,
        },
        950: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2000, // Set the delay between lside transitions (in milliseconds)
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <>
      <header className="header">
        <img className="header__img" src="./asset/img/city.png" alt="" />
        <div className="main header__mover">
          <motion.nav
            variants={supplycont}
            initial="initial"
            animate="animate"
            className="nav"
          >
            <div className="nav__logo">
              <img src="./asset/icons/martins.svg" alt="" />
            </div>

            <div className="nav__link">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#"> Home </a>
            </div>

            <div className="nav__social">
              <a href="#">
                {" "}
                <i className="fab fa-facebook"></i>{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fab fa-telegram"></i>{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fab fa-instagram"></i>{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fab fa-whatsapp"></i>{" "}
              </a>
            </div>
          </motion.nav>
          <motion.nav
            variants={genchild}
            initial="initial"
            whileInView="animate"
            animate="animate"
            className="nav2"
          >
            <div className="nav__logo">
              <img src="./asset/icons/martins.svg" alt="" />
            </div>

            <motion.div
              variants={menu}
              initial="initial"
              onClick={() => {
                setToggle(!toggle);
              }}
              whileTap={"animate"}
              whileInView="animate"
              className="nav2__ham"
            >
              <motion.span variants={menuchild}></motion.span>
              <motion.span variants={menuchild}></motion.span>
              <motion.span variants={menuchild}></motion.span>
            </motion.div>
          </motion.nav>

          {
            <AnimatePresence>
              {toggle && (
                <motion.div
                  variants={genchild}
                  initial="initial"
                  animate="animate"
                  className="navsmallzz"
                  exit="exit"
                >
                  <div className="d-flex i">
                    <i
                      onClick={() => {
                        setToggle(false);
                      }}
                      className="fa p-3 fa-times ml-auto"
                    >
                      {" "}
                    </i>
                  </div>
                  <div className="navsmallzz__a">
                    <a href="">Home</a>
                    <a href="">Contact</a>
                    <a href="">About</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          }

          <motion.div
            variants={gencont}
            initial="initial"
            animate="animate"
            className="header__mover2"
          >
            <motion.p variants={genchild} className="header__p">
              this is what i want to do with my live
            </motion.p>

            <motion.h1 variants={genchild} className="header__h1">
              Financial freedom is what everyone seeks to attain
            </motion.h1>

            <motion.button
              whileTap={{
                originx: 0,
                scale: 0.9,
              }}
              variants={genchild}
              className="header__button"
            >
              contact
            </motion.button>
          </motion.div>
        </div>
      </header>

      <section className="trust main">
        <h1 className="trust__h1">How it works</h1>
        <p className="trust__p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          eaque eligendi ipsum magni quae asperiores deserunt sint sunt, maxime
          enim eos alias officia earum aut ullam quisquam? Reiciendis, voluptas
          optio!
        </p>

        <div className="trust__grid">
          <div>
            <div className="shadow-sm trust__grid--cont">
              <h3 className="trust__grid--h3">Reliable</h3>
              <p className="trust__grid--p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                esse eum reprehenderit provident accusamus. Placeat facere fuga
                ullam at ratione!
              </p>
            </div>
          </div>
          <div>
            <div className="shadow-sm trust__grid--cont">
              <h3 className="trust__grid--h3">Trusted</h3>
              <p className="trust__grid--p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                esse eum reprehenderit provident accusamus. Placeat facere fuga
                ullam at ratione!
              </p>
            </div>
          </div>
          <div>
            <div className="shadow-sm trust__grid--cont">
              <h3 className="trust__grid--h3">On Time</h3>
              <p className="trust__grid--p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                esse eum reprehenderit provident accusamus. Placeat facere fuga
                ullam at ratione!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="core main">
        <div className="core__grid">
          <motion.div
            variants={gencont}
            initial="initial"
            whileInView={"animate"}
          >
            <div className="core__img">
              <img src="./asset/img/miartins-8.png" alt="" />
            </div>
          </motion.div>
          <div>
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <h2 className="core__h3">Core Services</h2>
              <motion.div variants={genchild} className="core__flex">
                <div>
                  <div className="core__flex--img">
                    <img src="./asset/icons/hedge.svg" alt="" />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <h2 className="core__flex--h2">Hedge Funds</h2>
                    <p className="core__flex--p">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rem, magnam.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={genchild} className="core__flex">
                <div>
                  <div className="core__flex--img">
                    <img src="./asset/icons/forex.svg" alt="" />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <h2 className="core__flex--h2">Forex</h2>
                    <p className="core__flex--p">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rem, magnam.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={genchild} className="core__flex">
                <div>
                  <div className="core__flex--img">
                    <img src="./asset/icons/stock.svg" alt="" />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <h2 className="core__flex--h2">Stocks</h2>
                    <p className="core__flex--p">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rem, magnam.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={genchild} className="core__flex">
                <div>
                  <div className="core__flex--img">
                    <img src="./asset/icons/realestate.svg" alt="" />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <h2 className="core__flex--h2">Real Estate</h2>
                    <p className="core__flex--p">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rem, magnam.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <!-- end of trust --> */}

      <section className="tab main">
        <div className="tab__contz">
          <div className="tab__button">
            <button
              onClick={() => {
                setIndexz(1);
              }}
              className={indexz == 1 && "buttonactive"}
            >
              examination
            </button>
            <button
              onClick={() => {
                setIndexz(2);
              }}
              className={indexz == 2 && "buttonactive"}
            >
              Finra
            </button>
            <button
              onClick={() => {
                setIndexz(3);
              }}
              className={indexz == 3 && "buttonactive"}
            >
              storries
            </button>
            <button
              onClick={() => {
                setIndexz(4);
              }}
              className={indexz == 4 && "buttonactive"}
            >
              mission
            </button>
          </div>
        </div>

        <AnimatePresence>
          {indexz == 1 && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={genchild}
              exit="exit"
              className="tab__tab"
            >
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <p>this is the first lorem30</p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {indexz == 2 && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={genchild}
              exit="exit"
              className="tab__tab"
            >
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <p>this is the second</p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {indexz == 3 && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={genchild}
              exit="exit"
              className="tab__tab"
            >
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <p>this is the third</p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {indexz == 4 && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={genchild}
              exit="exit"
              className="tab__tab"
            >
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <p>this is the foruth</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* <!-- test --> */}

      <section className="test mt-5">
        <div className="container-fluid">
          <h2 className="test__h2">What Our Client Says !</h2>
          {/* <!-- this is where the fade swiper starts --> */}

          <div className="pt-5 swiper testSwiper">
            <div className="swiper-wrapper mb-5">
              <div className="swiper-slide">
                <div className="test__mover">
                  <p className="test__p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quam quidem libero provident, iusto dicta laboriosam quaerat
                    sit quia alias. Perferendis.
                  </p>

                  <div className="test__people">
                    <div className="test__img">
                      <img
                        src="https://images.pexels.com/photos/6766248/pexels-photo-6766248.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                    </div>
                    <div className="test__name">
                      <h6>Miller Robert</h6>
                      <p>manager</p>
                    </div>
                  </div>

                  <img
                    className="test__quote"
                    src="./asset/icons/quote.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="test__mover">
                  <p className="test__p">
                    aspernatur fugiat voluptatum quisquam enim porro atque
                    voluptates consectetur. Ab earum est nulla provident! Atque
                    culpa ab perferendis officiis quo officia magni molestiae
                    ipsum cumque!
                  </p>

                  <div className="test__people">
                    <div className="test__img">
                      <img
                        src="https://images.pexels.com/photos/6766248/pexels-photo-6766248.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                    </div>
                    <div className="test__name">
                      <h6>Miller Robert</h6>
                      <p>manager</p>
                    </div>
                  </div>

                  <img
                    className="test__quote"
                    src="./asset/icons/quote.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="test__mover">
                  <p className="test__p">
                    reiciendis error! Repellat quisquam quis maxime magnam,
                    doloribus commodi ullam nostrum suscipit inventore animi
                    dolorum numquam exercitationem modi dolore. Adipisci rem ut
                    eum? Sapiente, deleniti id. Dolorum distinctio voluptas unde
                    maxime
                  </p>

                  <div className="test__people">
                    <div className="test__img">
                      <img
                        src="https://images.pexels.com/photos/6766248/pexels-photo-6766248.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                    </div>
                    <div className="test__name">
                      <h6>Miller jeremiah</h6>
                      <p>manager</p>
                    </div>
                  </div>

                  <img
                    className="test__quote"
                    src="./asset/icons/quote.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* <!-- <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> --> */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      {/* <!-- end of test --> */}

      <section className="main contact">
        <div className="contact__grid">
          <div>
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <h2 className="contact__h2">contact</h2>

              <motion.div variants={genchild} className="contact__flex">
                <i className="fab fa-instagram"></i>
                <p>@matinsinstagram</p>
              </motion.div>
              <motion.div variants={genchild} className="contact__flex">
                <i className="fab fa-facebook"></i>
                <p>@matinsinstagram</p>
              </motion.div>
              <motion.div variants={genchild} className="contact__flex">
                <i className="fab fa-telegram"></i>
                <p>@matinsinstagram</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="contact__form">
            <form action="">
              <input
                onChange={(e) => {
                  if (username.test(e.target.value)) {
                    setName(false);
                  } else {
                    setName(true);
                  }
                }}
                placeholder="name"
                className="   contact__input"
                type="text"
              />
              <AnimatePresence>
                {name && (
                  <motion.p
                    variants={genchild}
                    initial="initial"
                    animate="animate"
                    className=" my-1 text-danger"
                    exit="exit"
                  >
                    invalid input
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                onChange={(e) => {
                  if (emailRegex.test(e.target.value)) {
                    setEmail(false);
                  } else {
                    setEmail(true);
                  }
                }}
                placeholder="email"
                className="   contact__input"
                type="text"
              />
              <AnimatePresence>
                {email && (
                  <motion.p
                    variants={genchild}
                    initial="initial"
                    animate="animate"
                    className=" my-1 text-danger"
                    exit="exit"
                  >
                    invalid email address
                  </motion.p>
                )}
              </AnimatePresence>

              <textarea
                onChange={(e) => {
                  if (textarea.test(e.target.value)) {
                    setText(false);
                  } else {
                    setText(true);
                  }
                }}
                className="  contact__text"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <AnimatePresence>
                {text && (
                  <motion.p
                    variants={genchild}
                    initial="initial"
                    animate="animate"
                    className=" my-1 text-danger"
                    exit="exit"
                  >
                    Text should not be longer than 225 characters{" "}
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                disabled={text || name || email ? true : false}
                className="contact__button"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* <!-- this is the footer --> */}

      <footer className="main pb-5">
        <p className="text-center font-weight-bolder">copyright &copy; 2023</p>
      </footer>
    </>
  );
};

export default index;
