import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Makepost from "@/hooks/makepost";

import Animatez from "@/Animate";
import { Scale } from "@mui/icons-material";
import Services from "../comps/Contactbody/Services/Services";

const index = () => {
  const { menu, menuchild, supplychild, supplycont, genchild, gencont } =
    Animatez();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addContacts, addcontact, setAddcontact } = Makepost();

  const [toggle, setToggle] = useState(false);
  const [indexz, setIndexz] = useState(1);

  const [name, setName] = useState(false);
  const [text, setText] = useState(false);
  const [email, setEmail] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const passwordRegex = /^.{6,}$/;
  // const passwordRegexconfirm = /^.{6,}$/;
  const textarea = /^[a-zA-Z0-9_-\s]{2,225}$/;
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
      <header className="main header">
        <motion.nav
          variants={supplycont}
          initial="initial"
          animate="animate"
          className="nav"
        >
          <div className="nav__logo">
            <img src="./asset/icons/robert.svg" alt="" />
          </div>

          <div className="nav__link">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#"> Home </a>
          </div>

          <div className="nav__social">
            <a href="#contact">
              {" "}
              <i className="fab fa-telegram"></i>{" "}
            </a>
            <a href="#contact">
              {" "}
              <i className="fab fa-instagram"></i>{" "}
            </a>
            <a href="#contact">
              {" "}
              <i className="fa fa-envelope"></i>{" "}
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
            <img src="./asset/icons/robert.svg" alt="" />
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
                  <a
                    onClick={() => {
                      setToggle(false);
                    }}
                    href="#"
                  >
                    Home
                  </a>
                  <a
                    onClick={() => {
                      setToggle(false);
                    }}
                    href="#contact"
                  >
                    Contact
                  </a>
                  <a
                    href="#about"
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    About
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        }
        <motion.div
          variants={gencont}
          initial="initial"
          whileInView="animate"
          className="main header__grid"
        >
          <motion.div variants={genchild}>
            <h1 className="header__h1">
              I Am Robert Miller.
              <br />A Financial Market Expert, Broker, Investment Adviser
            </h1>
          </motion.div>
          <motion.div variants={genchild}>
            <h3 className=" font-weight-bolder text-white">
              {" "}
              Welcome to the World of Digital Assets.
            </h3>
            <p className="header__p">
              If you’re looking to dive into the exciting and potentially
              lucrative world of digital assets, you’ve come to the right place.
              As a financial market coach and trader , I am here to guide you on
              your journey toward financial freedom and independence. With my
              help, you will be able to navigate the complex and
              rapidly-evolving world of digital assets such as. <br />
            </p>
            <ul className="header__ul">
              <li>crypto</li>
              <li>stock</li>
              <li>hedge funds</li>
              <li>forex</li>
            </ul>
            <p className="header__p">
              {" "}
              with confidence, understanding, and success.
            </p>
            <a href="#contact" className=" text-decoration-none">
              <div className="d-flex">
                <button className="header__button">contact me</button>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </header>

      <motion.section
        variants={genchild}
        initial="initial"
        animate="animate"
        whileInView={"animate"}
        className="trust main"
      >
        <div className="trust__display">
          <img src="./asset/img/bitcoin.png" alt="" />
          <div className="trust__mover">
            <div>
              <p>| Estimated profit Accumulated.</p>
              <h1>48M</h1>
            </div>
            <div>
              <p>| Active Client Portfolio.</p>
              <h1>11K</h1>
            </div>
            <div>
              <p>| Quality and Satisfaction Guaranteed.</p>
              <h1>100%</h1>
            </div>
            <div>
              <p>| Vistors-Client-Conversation.</p>
              <h1>100%</h1>
            </div>
          </div>
        </div>
      </motion.section>

      <section id="about" className="core main">
        <div className="core__grid">
          <p className="core__float">
            <img
              className="core__floatimg"
              src="./asset/img/Robert-8.png"
              alt=""
            />
            <span className="d-block headtext">About Me</span>
            <br />
            My name is Robert Allen Miller, and I’m a digital asset enthusiast
            with a passion for helping others succeed in this exciting and
            ever-evolving trading world. I have over 16years experience in
            trading and have written and passed the following examinations as a
            standard requirement of the Financial Industry Regulatory Authority.
            <br />
            <small className=" p  font-weight-bold  py-2">
              Series 65 - Uniform Investment Adviser Law ExaminationDec 17, 2012{" "}
              <br />
              <small class="d-block">
                {" "}
                <i>State Securities Law Exam</i>
              </small>
            </small>
            <br />
            <small className="p  font-weight-bold text-capitalize py-2">
              Series 63 - Uniform Securities Agent State Law ExaminationSep 26,
              2012
              <br />
              <small class="d-block">
                {" "}
                <i>State Securities Law Exam</i>
              </small>
            </small>
            <br />
            <small className="p   font-weight-bold text-capitalize py-2">
              SIE - Securities Industry Essentials ExaminationOct 1, 2018
              <br />
              <small class="d-block">
                {" "}
                <i>General Industry/Products Exam</i>
              </small>
            </small>
            <br />
            <small className="p   font-weight-bold text-capitalize py-2">
              Series 7 - General Securities Representative ExaminationApr 13,
              2005.
              <br />
              <small class="d-block">
                {" "}
                <i>General Industry/Products Exam</i>
              </small>
            </small>
            <br />
            <small className="p  font-weight-bold text-capitalize py-2">
              Series 6 - Investment Company Products/Variable Contracts
              Representative ExaminationSep 17, 2012.
              <br />
              <small class="d-block">
                {" "}
                <i>General Industry/Products Exam</i>
              </small>
            </small>
            <br />
            I am currently registered under CHARLES SCHWAB & CO., INC.
            (CRD#:5393) 1958 Summit Park Dr., Orlando, FL 32810 Registered with
            this firm since 12/20/2016 as a broker.
            <br />
            <br />
            <small className=" p  font-weight-bold text-capitalize py-2">
              A (INVESTMENT ADVISER) CHARLES SCHWAB & CO., INC. (CRD#:5393) 1958
              Summit Park Dr., Orlando, FL 32810
              <br />
              <small class="d-block">
                {" "}
                <i>Registered with this firm since 2/27/2017.</i>
              </small>
            </small>
            <br />
            <span className="h3 text-primary font-weight-bolder">
              Previous Registration(s){" "}
            </span>{" "}
            <br />
            <small className="font-weight-bold text-capitalize py-2">
              SECURITIES AMERICA, INC. (CRD#:10205) NEW YORK, NY
              <br />
              <small class="d-block">
                {" "}
                <i>05/28/2014 - 01/26/2016</i>
              </small>
            </small>
            <br />
            <small className="font-weight-bold text-capitalize py-2">
              CHARLES SCHWAB & CO., INC. (CRD#:5393) ORLANDO, FL
              <br />
              <small class="d-block">
                {" "}
                <i>07/15/2008 - 05/12/2014</i>
              </small>
            </small>
            <br />
            <small className="font-weight-bold text-capitalize py-2">
              WACHOVIA SECURITIES, LLC (CRD#:19616) BRADENTON, FL
              <br />
              <small class="d-block">
                {" "}
                <i>05/31/2007 - 04/04/2008.</i>
              </small>
            </small>
            <br />
            <small className="font-weight-bold text-capitalize py-2">
              AMERIPRISE FINANCIAL SERVICES, INC. (CRD#:6363) ORLANDO, FL <br />
              <small class="d-block">
                {" "}
                <i>04/29/2005 - 05/31/2006</i>
              </small>
            </small>
            <br />I have gained valuable experience in Investing, as well as a
            deep understanding of the global financial markets and how they
            operate. My passion for digital asset developed as I saw the
            potential for this revolutionary technology to shape the future of
            finance. In recent years, I have focused my efforts on digital
            assets and have become an expert in the field. I have a strong
            understanding of the technical aspects of the financial market, as
            well as the economic and political factors that can impact its
            value. I am passionate about helping others to understand and
            navigate the complex world of trading, and that is why I offer One
            on One coaching and portfolio management services. Whether you are a
            beginner looking to get started in cryptocurrency, stock, forex
            hedge funds etc, or an experienced trader looking to fine-tune your
            strategy, I am here to help you reach your goals. I also provide
            comprehensive market analysis to keep my clients in the know of all
            the latest trends and developments. Basically, I’m here to be your
            personal coach, guiding you through the wild world of
            financialmarket.
          </p>
        </div>
      </section>

      <section className="main">
        <h1 className="mb-2 text-center mt-5">What i Can Do for You</h1>

        <motion.div
          variants={gencont}
          initial="initial"
          whileInView="animate"
          className="row mt-3"
        >
          <motion.div
            className="p-4 col-lg-4 col-md-6 col-sm-12"
            variants={genchild}
          >
            <Services
              title="Personalized Caoching"
              iconname="fa fa-chart-bar"
              primary="bg-primary"
              textcolor="text-white"
              iconcolor="text-white"
              titlecolor="text-white"
              text="  I provide personalized guidance and support to help my clients improve their understanding on trading and their trading skills. This may involve assessing their goals and needs, developing a personalized coaching plan, providing guidance and support, and regularly assessing progress. I encourage my clients to take an active role in their own learning and development, and I work with them to help them achieve their goals and become more confident and skilled in the world of finance. 

"
            />
          </motion.div>
          <motion.div
            className="p-4 col-lg-4 col-md-6 col-sm-12"
            variants={genchild}
          >
            <Services
              title="Risk Management"
              primary="bg-light"
              iconname="fas fa-toggle-on"
              textcolor=""
              iconcolor="text-primary"
              titlecolor="text-secondary"
              text="  I can help you develop a risk management plan to minimize
                  cryptocurrency losses. This plan may include stop-loss orders,
                  which automatically sell a coin or token when it reaches a
                  certain price, position sizing, which allocates a specific
                  amount of money to a trade or investment, diversification,
                  which spreads investments across a range of coins and tokens,
                  and considering the risk-reward ratio. I can help you
                  understand and implement these strategies in a customized risk
                  management plan."
            />
          </motion.div>

          <motion.div
            className="p-4 col-lg-4 col-md-6 col-sm-12"
            variants={genchild}
          >
            <Services
              title="Research"
              primary="bg-primary"
              iconname="fas fa-laptop"
              textcolor="text-white"
              iconcolor="text-white"
              titlecolor="text-white"
              text=" I believe that conducting thorough research upfront is a crucial aspect of successful trading. That's why it's important to keep up to date with the latest trends and news in the financial market. Using tools like chart patterns, indicators, and moving averages to analyze the past performance of various markets and make predictions about their future price movements to help us make informed trades.

"
            />
          </motion.div>

          <motion.div
            className="p-4 col-lg-4 col-md-6 col-sm-12"
            variants={genchild}
          >
            <Services
              title=" Trading Signals"
              primary="bg-light"
              textcolor=""
              iconname="fas fa-signal"
              iconcolor="text-primary"
              titlecolor="text-secondary"
              text=" I use a combination of both fundamental and technical analysis to provide accurate signals. This includes data on specific coins and tokens' price, volume, and market capitalization. My team trades and reviews each market signal for accuracy before sharing it with clients and highly increase the results by running it on the live trading stage, this is awesome to ensure maximum profit."
            />
          </motion.div>

          <motion.div
            className="p-4 col-lg-4 col-md-6 col-sm-12"
            variants={genchild}
          >
            <Services
              title="Portfolio Management"
              primary="bg-primary"
              textcolor="text-white"
              iconcolor="text-white"
              iconname="fas fa-money-check-alt"
              titlecolor="text-white"
              text=" I help build and manage your portfolio. I will help you diversify your investments across different markets and manage your investments to ensure maximum returns."
            />
          </motion.div>

          <motion.div
            className="p-4 col-lg-4 col-md-6 col-sm-12"
            variants={genchild}
          >
            <Services
              title="Market Analysis And Insights"
              primary="bg-light"
              iconname="fas fa-marker"
              textcolor=""
              iconcolor="text-primary"
              titlecolor="text-secondary"
              text="I provide valuable insights and analysis of the market that can help you understand market trends, identify potential investment opportunities, and provide recommendations on which market to invest in."
            />
          </motion.div>
        </motion.div>
      </section>

      {/* <!-- end of trust --> */}

      <section className="main mt-5">
        <h2 className="text-center">Programs</h2>

        <p className="text-center mt-4">
          I offer proper education around fundamentals, risk management, and
          best trading practices traders are lacking. I believe that traders and
          investors need access to proper education. My Trade sessions are built
          around a support network, and a trading community with a flexible work
          time frame depending on your own time. My signals are delivered in
          real-time for the most familiar market pairs which is the perfect
          solution when it comes to dissecting and deciphering crypto-trading
          signals. Why holdl blindly? trade smartly.
        </p>
      </section>
      <section className="bg-light py-5 card main mt-5">
        <h2 className="text-center">Why Trade With My Program</h2>

        <p className="text-center mt-4">
          The internet is full of blogs and websites offering tips and
          techniques for trading, so why choose my service? I provide you with
          an abundant variety of trading options for an exquisite trading
          experience, good strategies that will assist you as you trade, and
          excellent customer service with quick replies to any query. I aim to
          improve my service and build a new and evolving platform to suit your
          every demand. Earning your trust is always the first thing on my mind,
          so I place the success of teamwork over personal ambition. I have
          built a great team with this in mind, and I am ready to deliver
          outstanding service to help you achieve your financial goals. My team
          consists of skilled traders who will provide strategies to direct you
          to make the best trading decisions. We work thoughtfully and
          consciously, so your profit is guaranteed with my service. My service
          teaches you how to combine the advantages of Value Investing and
          Momentum Trend methodologies that help investors score larger margins
          of profits in long and shorter-term timeframes. Each market signal
          will tell you everything you need to know to trade in a risk-averse
          manner. That is to say, once you receive a signal from us – you’ll
          know which market to trade, whether you should go long or short, and
          what entry and exit price to target.
        </p>
      </section>
      <section className="main mt-5">
        <h2 className="text-center">Return of Investments</h2>

        <p className="text-center mt-4">
          I offer a percentage profit-sharing model to ensure that my interests
          are aligned with those of my clients, as i only make money when you
          make money. I believe that this model is a fair and transparent way to
          ensure that clients feel confident in my services. With the required
          startup trading amount we will be able to work your way up between
          180% – 290% ROI in 7 – 14 Trading Days after which you would pay a
          mentorship fee of 15% on the accumulative profits made within this
          period of trading. I have engaged in detailed and deep research of
          trading platforms and we have seen a number of reviews from many
          platforms. This has helped us pick the best platform for our clients.
        </p>
      </section>

      <section className="main contact" id="contact">
        <div className="contact__grid">
          <div>
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <h2 className="contact__h2 text-capitalize ">contact me</h2>

              {/* Mail: robertallanmiller17@gmail.com

Telegram: Allanmillertrade

Instagram: allanmillertrade */}

              <motion.div variants={genchild} className="contact__flex">
                <i className="fab fa-instagram"></i>
                <p>Alenmillertrade</p>
              </motion.div>
              <motion.div variants={genchild} className="contact__flex">
                <i className="fa fa-envelope"></i>
                <p>Robertallenmiller31@gmail.com</p>
              </motion.div>
              <motion.div variants={genchild} className="contact__flex">
                <i className="fab fa-telegram"></i>
                <p>Alenmillertrade</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="contact__form">
            <form
              onSubmit={async (e) => {
                setLoading(true);
                e.preventDefault();

                if (
                  e.target.elements.name.value == "" ||
                  e.target.elements.email.value == "" ||
                  e.target.elements.des.value == ""
                ) {
                  setError(true);
                  setLoading(false);
                } else {
                  const formz = new FormData();

                  formz.append("message", "addcontact");
                  formz.append("des", e.target.elements.des.value);
                  formz.append("email", e.target.elements.email.value);
                  formz.append("name", e.target.elements.name.value);

                  await addContacts(formz);
                  setError(false);
                  setLoading(false);
                }
                setLoading(false);
              }}
              action=""
            >
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{
                      y: "-20%",
                      // position: "fixed",
                      // opacity: 0,
                    }}
                    animate={{
                      // opacity: 1,
                      // position: "fixed",
                      y: 0,
                    }}
                    exit={{
                      y: "-20%",
                      opacity: 0,
                      transition: {
                        //   type: "spring",
                        //   stiffness: 200,
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className={` my-3 alert alert-danger fade show`}
                  >
                    <strong>Please fill all form field</strong>

                    <div
                      className=" mx-2 close alert-dismissable mx-3 "
                      onClick={() => {
                        setError(false);
                      }}
                    >
                      {" "}
                      &times;{" "}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {addcontact?.message && (
                  <motion.div
                    initial={{
                      y: "-20%",
                      // position: "fixed",
                      // opacity: 0,
                    }}
                    animate={{
                      // opacity: 1,
                      // position: "fixed",
                      y: 0,
                    }}
                    exit={{
                      y: "-20%",
                      opacity: 0,
                      transition: {
                        //   type: "spring",
                        //   stiffness: 200,
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className={` my-3 alert alert-${addcontact?.type} fade show`}
                  >
                    <strong>{addcontact?.message}</strong>

                    <div
                      className=" ml-5 close alert-dismissable mx-3 "
                      onClick={() => {
                        setAddcontact({});
                      }}
                    >
                      {" "}
                      &times;{" "}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
                name="name"
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
                name="email"
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
                name="des"
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
                {loading ? "please wait..." : "submit"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* <!-- this is the footer --> */}

      <footer className="main pb-5">
        <p className="text-center font-weight-bolder">copyright &copy; 2018</p>
      </footer>
    </>
  );
};

export default index;
