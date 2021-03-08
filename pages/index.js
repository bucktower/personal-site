import Head from "next/head";
import InstaGrid from "../components/InstaGrid";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Buck Tower</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
          integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
          crossorigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Bungee|Bungee+Hairline"
          rel="stylesheet"
        />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/holder/2.8.1/holder.min.js"></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
          integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
          crossorigin="anonymous"
        ></script>
        <script src="legacy-js/InstagramFeed.min.js"></script>
      </Head>

      <main>
        <object type="image/svg+xml" data="/bucklogo.svg" width="200">
          Your browser does not support SVG
        </object>
        <h1>Buck Tower</h1>
        <script src="https://use.fontawesome.com/d99d1b5e9b.js"></script>
        <div class="social-media-icons">
          <a href="https://twitter.com/bucktower">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="https://github.com/bucktower">
            <i class="fa fa-github"></i>
          </a>
          <a href="https://medium.com/@bucktower">
            <i class="fa fa-medium"></i>
          </a>
        </div>
        <p>
          I study computer science at
          <a href="https://www.cs.utexas.edu/">
            The University of Texas at Austin
          </a>
          . Cooking, music, aviation.
        </p>
        <h2>
          <i class="fa fa-wrench"></i>
        </h2>
        <div class="row center">
          <br />
          <a
            class="twitter-timeline"
            data-width="600"
            data-height="500"
            data-theme="dark"
            href="https://twitter.com/bucktower?ref_src=twsrc%5Etfw"
          >
            Tweets by bucktower
          </a>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>

        {/* <h2>
          <i class="fa fa-camera-retro"></i>
          <InstaGrid account="bucktower" numberOfMediaElements={9} />
        </h2>
        <div class="row center">
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div id="instagram-feed1" style={{ maxWidth: "800px" }}></div>
          </div>
        </div>
        <br /> */}

        <h2>
          <i class="fa fa-music"></i>
        </h2>
        <iframe
          src="https://open.spotify.com/embed/playlist/7GCHvOJnQTFiVNLVWMBIGt"
          max-width="100%"
          width="1000"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        {/* <br />
        <br />
        <iframe
          style={{
            width: "100%",
            maxWidth: "1000px",
            border: "0px #000000 solid",
          }}
          src="https://listsfm-react.herokuapp.com/tower-family/3month"
          height="500"
          width="100%"
        ></iframe> */}

        <h2>
          <i class="fa fa-briefcase"></i>
        </h2>
        <br />
        <iframe
          style={{
            width: "100%",
            maxWidth: "1000px",
            border: "0px #000000 solid",
          }}
          src="https://docs.google.com/viewer?srcid=1KE-nOFkxk8b9XXEjulYgLPBdGFfAJDLTHFrh0J2tVgQ&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
          width="100%"
          height="480px"
        ></iframe>

        <h2>
          <i class="fa fa-globe"></i>
        </h2>
        <br />
        <iframe
          style={{
            width: "100%",
            maxWidth: "1000px",
            border: "0px #000000 solid",
          }}
          src="https://www.google.com/maps/d/u/0/embed?mid=1vFW6RTZZd-bxhY638mS1IZlwzgI"
          width="100%"
          height="480"
        ></iframe>
      </main>

      <footer>
        <h3>
          <i class="fa fa-twitter"></i>
        </h3>
        <p id="follow">
          Follow me <a href="https://twitter.com/bucktower">@bucktower</a> for
          more updates
        </p>

        <h4>
          <a href="https://github.com/bucktower/bucktower.github.com">
            <i class="fa fa-code"></i>
          </a>
        </h4>
      </footer>

      <style jsx global>{`
        :root {
          --animation-time: 6s;
        }

        iframe {
          border: 0;
        }

        body {
          text-align: center;
          background: #413233;
          /* background: #413233; */
          /* background: #ffffff url(../media/bg.jpg) top center */
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Bungee Hairline", monospace;
          color: white;
        }
        p,
        div {
          font-family: "Bungee Hairline", monospace;
          font-weight: 200;
          font-size: 20px;
        }
        .social-media-icons a {
          font-size: 28px;
          color: #dbd1b6;
        }

        a {
          color: white;
        }

        a:hover {
          color: grey;
        }

        #follow {
          color: grey;
        }

        #main {
          /* background: white; */
          /* border: 10px black solid; */
          margin: 30px;
          padding: 35px;
          padding-top: 0px;
          color: "white";
          // color: #dbd1b6;
          /* color: #DBD1B6; */
        }

        a:hover {
          text-decoration: none;
        }

        a:active {
          text-decoration: none;
        }

        button .retro-btn {
          margin: 2px 2px 2px 0;
          /* float:right; */
          width: 14px;
          height: 13.5px;
          background: #c0c0c0;
          border-width: 1px;
          border-color: #ffffff #808080 #808080 #ffffff;
          padding: 0;
          font-size: 9px;
          font-weight: bold;
          font-family: Tahoma;
          text-align: center;
          focus: none;
        }

        button:focus {
          outline: none;
        }

        @keyframes float {
          0% {
            /* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
            transform: translatey(0px);
          }
          50% {
            /* box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2); */
            transform: translatey(-20px);
          }
          100% {
            /* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
            transform: translatey(0px);
          }
        }

        .box {
          animation: float var(--animation-time) ease-in-out infinite;
        }

        #instagram {
          margin: 0;
          padding: 0;
          overflow: hidden;
          align-text: center;
          margin: auto;
        }

        #instagram li {
          list-style: none;
          float: left;
          margin: 0 20px 20px 0;
        }
      `}</style>

      {/* <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  );
}
