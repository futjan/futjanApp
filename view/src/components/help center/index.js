import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";

const index = () => {
  return (
    <>
      <div
        id="wrapper"
        className="wrapper-fluid banners-effect-5"
        style={{ margin: "30px 0" }}
      >
        <div className="main-container container">
          <ul className="breadcrumb">
            <li>
              <Link to="/">
                <i className="fa fa-home"></i>
              </Link>
            </li>

            <li>
              <Link to="/help-center">Help Center</Link>
            </li>
          </ul>
          <h3 className="about-title">
            <i>Help Center</i>
          </h3>
          <div style={{ padding: "30px" }}>
            <div>
              <Typography variant="h4">
                <HashLink to="#items">
                  1. Items / Services not allowed on FutJan
                </HashLink>
              </Typography>
            </div>
            <div>
              <Typography variant="h4">
                <HashLink to="#block">2. Block Messages</HashLink>
              </Typography>
            </div>

            <div>
              <Typography variant="h4">
                <HashLink to="#account"> 3. Account Management</HashLink>
              </Typography>
              <ul style={{ listStyleType: "circle", paddingLeft: "25px" }}>
                <li>
                  <Typography variant="h5" component={HashLink} to="#account-1">
                    How to login/register and logout?
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5" component={HashLink} to="#account-2">
                    How to write a review?
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5" component={HashLink} to="#account-3">
                    How to save or delete favourites?
                  </Typography>
                </li>
              </ul>
            </div>
            <div>
              <Typography variant="h4">
                <HashLink to="#seller">4. Seller guide</HashLink>
              </Typography>
              <ul style={{ listStyleType: "circle", paddingLeft: "25px" }}>
                <li>
                  <Typography variant="h5" component={HashLink} to="#seller-1">
                    How to post an Ad and photos effective?
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5" component={HashLink} to="#seller-2">
                    How to edit/delete an Ad?
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5" component={HashLink} to="#seller-3">
                    How to share Ad with friends/Family?
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5" component={HashLink} to="#seller-4">
                    What is Ad active time period?
                  </Typography>
                </li>
              </ul>
            </div>
            <div>
              <Typography variant="h4">
                <HashLink to="#buyer">5. Buyer Guide</HashLink>
              </Typography>
              <ul style={{ listStyleType: "circle", paddingLeft: "25px" }}>
                <li>
                  <Typography variant="h5" component={HashLink} to="#buyer-1">
                    How to search for a product based on location?
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5" component={HashLink} to="#buyer-2">
                    Can I pay advance pay to the seller?
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5" component={HashLink} to="#buyer-3">
                    Where to meet seller?
                  </Typography>
                </li>
              </ul>
            </div>
            <div>
              <Typography variant="h4">
                <HashLink to="#payment">6. Payments & Promotions</HashLink>
              </Typography>
              <ul style={{ listStyleType: "circle", paddingLeft: "25px" }}>
                <li>
                  <Typography variant="h5" component={HashLink} to="#payment-1">
                    How to promote an Ad
                  </Typography>
                </li>
              </ul>
            </div>
            <br />
          </div>
        </div>
      </div>
      <div
        id="wrapper"
        className="wrapper-fluid banners-effect-5"
        style={{ margin: "30px 0" }}
      >
        <div
          className="main-container container"
          style={{ padding: "30px" }}
          id="items"
        >
          <Typography variant="h3">
            A to Z list of items/services cannot be posted on FUTJAN
          </Typography>
          <Typography variant="h4">A</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Animal body parts or any product made of such material
              </Typography>
            </li>
            <li>
              <Typography variant="p">2. Any kind of live animal</Typography>
            </li>
            <li>
              <Typography variant="p">
                3. Adult toys, products, or entertainment (like blue movies)
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                4. Adult toys, products, or entertainment (like blue movies)
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">B</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Body parts or fluids and anything related to
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                2. Botox, fillers or any kind of equipment or services related
                to
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">C</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Chemicals that are dangerous
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                2. Cosmetics that are used and not in original packaging
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                3. Currency that are fake or virtual
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                4. Crime scene photos or anything associated with criminals
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">D</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Drugs that are illegal, prescribed medicines, steroids etc.
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                2. Digital media & electronic devices that are unauthorized for
                streaming
              </Typography>
            </li>
            <li>
              <Typography variant="p">3. Discrimination of any kind</Typography>
            </li>
            <li>
              <Typography variant="p">
                4. Dating activities of any kind
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                5. Database of any kind which can benefit others
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                6. Direct admissions to education institute through quota or
                donations
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">E</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Events or Admission tickets selling is prohibited
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">F</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Fake, duplicate and unauthorized trademark products,
                copyright items
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                2. Firearms, Fireworks or any kind of ammunition or equipment
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">G</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Gambling that includes gaming, betting, lotteries, raffles,
                casino, fantasy sports, bingo, poker and sweepstakes in an
                online environment.
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                2. Government ids/documents or any licenses services
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">H</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Hate speeches or Hate organisation of any kind
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                2. Human parts or services of any kind
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                3. Hacking services of any kind
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">I</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Illegal items or services of any kind
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">J</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Jobs of any kind involved in advance payment, bribe, child
                labour or slavery etc.
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">K</Typography>
          <ul>
            <li>
              <Typography variant="p">1. Kits or vaccinations sell</Typography>
            </li>
          </ul>
          <Typography variant="h4">L</Typography>
          <ul>
            <li>
              <Typography variant="p">1. Lottery tickets</Typography>
            </li>
            <li>
              <Typography variant="p">
                2. Loans offered by unauthorized parties or institutions as per
                RBI guidelines
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">M</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Massage services related to sexual services that includes
                reference to age, gender, race or physical features etc.
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                2. Medical equipment’s that’s require licence
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">N</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Network marketing jobs and affiliated home jobs
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">O</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Offensive goods/material that’s are unethical or racially
                offensive
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">P</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Pirated videos, movies, modified gaming consoles, cable boxes
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                2. Photos of any celebrities or human being without permission
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                3. Police, Army, Navy, and Air force related products or
                services
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">Q</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Quick health fix cures, miracle or remedies
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">R</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Resale any tickets related to sports, bus, train, flights etc
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">S</Typography>
          <ul>
            <li>
              <Typography variant="p">1. Security tag removal items</Typography>
            </li>
            <li>
              <Typography variant="p">2. Stolen goods or services</Typography>
            </li>
            <li>
              <Typography variant="p">3. Supplements of any kind</Typography>
            </li>
            <li>
              <Typography variant="p">4. Surrogacy</Typography>
            </li>
          </ul>
          <Typography variant="h4">T</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Tickets, gift vouchers or any passes of events, games,
                matches or concerts, lottery tickets, sweepstakes entries,
                subscriptions, etc.
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                2. Traffic devices, which include radar detectors/hammers,
                license plate covers, traffic signal changers /sensors, and
                related products.
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                3. Transfer of membership/subscription/certificates/timeshare
                etc.
              </Typography>
            </li>
            <li>
              <Typography variant="p">
                4. Transfer or selling license for pharmacy or liquor shop or
                any such institution which is controlled by the government
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">U</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Used items that can effect someone health
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">V</Typography>
          <ul>
            <li>
              <Typography variant="p">1. Votes to sell or buy</Typography>
            </li>
          </ul>
          <Typography variant="h4">W</Typography>
          <ul>
            <li>
              <Typography variant="p">
                1. Weapons or Knives of any kind
              </Typography>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="wrapper"
        className="wrapper-fluid banners-effect-5"
        style={{ margin: "30px 0" }}
      >
        <div
          className="main-container container"
          style={{ padding: "30px" }}
          id="block"
        >
          <secion style={{ marginTop: "15px", lineHeight: "30px" }}>
            <Typography variant="h3">Block Messages</Typography>
            <Typography variant="p">
              If you want to block messages of the people and don’t want to
              communicate further, tap the three dots in the top right corner of
              the conversation. Click “block”. Further, if you want to ‘unblock’
              click unblock in the messages at the bottom of the conversation.
            </Typography>
          </secion>
        </div>
      </div>
      <div
        id="wrapper"
        className="wrapper-fluid banners-effect-5"
        style={{ margin: "30px 0" }}
      >
        <div
          id="account"
          className="main-container container"
          style={{ padding: "30px" }}
        >
          <section style={{ marginTop: "15px", lineHeight: "30px" }}>
            <Typography variant="h3">Account Management</Typography>
            <Typography variant="h4" id="account-1">
              How to login/register and logout?
            </Typography>
            <ol type="1">
              <li>
                <Typography variant="p">
                  1. Click Login/Register at the top of the FutJan homepage.
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  2. Select Register tab, enter your name, email & password or
                  else you can directly login via Facebook, google account or by
                  mobile no.
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  3. Click register at the bottom of the form
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  4. After that you will receive a welcome email to the email
                  address. In order to activate your account, open the email and
                  click activate.
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  5. Now you can login to your account
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  6. For logout click on menu from the homepage and select
                  logout.
                </Typography>
              </li>
            </ol>
            <Typography variant="h4" id="account-2">
              {" "}
              How to write a review?
            </Typography>
            <Typography variant="p">
              To write a review, click on Ad and there is a section at the top
              right side of the Ad which says write review, click on it and
              write your review about the seller.
            </Typography>

            <Typography variant="h4" id="account-3">
              How to save or delete favourites?
            </Typography>
            <Typography variant="p">
              To save favourites, click on Ad and there is a section at the
              bottom right side of the Ad which has icon , click on it and it
              will save. To delete favourites, go to menu at homepage and select
              my favourites. Select the one you want to delete and choose option
              to delete it.
            </Typography>
          </section>
        </div>
      </div>
      <div
        id="wrapper"
        className="wrapper-fluid banners-effect-5"
        style={{ margin: "30px 0" }}
      >
        <div
          id="seller"
          className="main-container container"
          style={{ padding: "30px" }}
        >
          <section style={{ marginTop: "15px", lineHeight: "30px" }}>
            <Typography variant="h3">Seller guide</Typography>
            <Typography variant="h4" id="seller-1">
              How to post an Ad and photos effective?
            </Typography>
            <Typography variant="p">
              For posting an ad for surplus and business you need to register
              your account and then:
            </Typography>
            <ol type="1">
              <li>
                <Typography variant="p">
                  1. Click the Post Ad button at the top of the Page or at the
                  category page
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  2. Type Name/Company, Contact, address, postcode, country,
                  State/county, Business type, category, website, Title name,
                  description, keyword, original price, offered price, upload
                  images, choose if you want to promote Ad, finally click on
                  Post my Ad
                </Typography>
              </li>
            </ol>
            <Typography variant="p">
              For posting an ad for Job you need to register your account and
              then:
            </Typography>
            <ol type="1">
              <li>
                <Typography variant="p">
                  1. Click the Post Ad button at the top of the Page or at the
                  category page
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  2. Type Job title, select category, Subcategory, Job type,
                  Gender, Salary type, country, state/county, city, experience,
                  qualification, contact, email, address, description, keyword,
                  min salary, Max salary, upload image, choose if you want to
                  promote Ad, finally click on Post my Ad
                </Typography>
              </li>
            </ol>

            <Typography variant="p">
              For posting an ad for Job seeker you need to register your account
              and then:
            </Typography>
            <ol type="1">
              <li>
                <Typography variant="p">
                  1. Click the Post Ad button at the top of the Page or at the
                  category page
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  2. Type Name, Job title, select category, Subcategory, Job
                  type, Gender, Salary type, country, state/county, city,
                  experience, qualification, contact, email, address,
                  description, skills, rate, DOB, age, upload profile, upload
                  CV, choose if you want to promote Ad, finally click on Post my
                  Ad.
                </Typography>
              </li>
            </ol>
            <Typography variant="h4" id="seller-2">
              {" "}
              How to edit/delete an Ad?
            </Typography>
            <ol type="1">
              <li>
                <Typography variant="p">
                  1. For edit and delete an Ad, you need to login to your
                  account and click on menu at the top of the page.
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  2. Select My Ads, find the Ad you want to edit and edit your
                  section at right side under the action column.
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  3. Then go the any section of the page you want to change and
                  add/remove information as needed
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  4. For editing photos, click delete X in the corner of the
                  image and then rearrange the photos in the order you want them
                  to appear
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  5. Finally when everything ready to post the changes, click
                  Update my Ad.
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  6. For deleting an Ad, select My Ads and select delete at the
                  right side under action column.
                </Typography>
              </li>
            </ol>

            <Typography variant="h4" id="seller-3">
              How to share Ad with friends/Family?
            </Typography>
            <Typography variant="p">
              To share an Ad, go to Ad and select Share on section at the right
              side of the Ad and select to share an Ad via Facebook, whatsApp,
              twitter, LinkedIn
            </Typography>
            <Typography variant="h4" id="seller-4">
              {" "}
              What is Ad active time period?
            </Typography>
            <Typography variant="p">
              Ad will be active for 30 days and after that either you need to
              renew it or if items is sold you can delete it
            </Typography>
          </section>
        </div>
      </div>
      <div
        id="wrapper"
        className="wrapper-fluid banners-effect-5"
        style={{ margin: "30px 0" }}
      >
        <div
          id="buyer"
          className="main-container container"
          style={{ padding: "30px" }}
        >
          <section style={{ marginTop: "15px", lineHeight: "30px" }}>
            <Typography variant="h3">Buyer Guide</Typography>
            <Typography variant="h4" id="buyer-1">
              How to search for a product based on location?
            </Typography>
            <ol type="1">
              <li>
                <Typography variant="p">
                  1. First select a category from the homepage and it take you
                  to the category page and there at the left side bar you search
                  the items either based on Keyword, country, state, city,
                  Business type, category.
                </Typography>
              </li>
              <li>
                <Typography variant="p">
                  2. You can also save your alert from the bottom left page and
                  you will start getting emails related to your preference.
                </Typography>
              </li>
            </ol>
            <Typography variant="h4" id="buyer-2">
              {" "}
              Can I pay advance pay to the seller?
            </Typography>
            <Typography variant="p">
              {" "}
              Although we invest significantly in ensuring only genuine users
              are active on the platform, your safety is just as much your
              responsibility as it is ours. If seller urge you to make advance
              please go through secure system so if you didn’t get
              service/product you can get your money back. Do not scan any QR
              codes as this may lead to deduct money from your account. FutJan
              is not responsible for any delivery services or paid delivery.
              Buyer and seller have to arrange themselves.
            </Typography>

            <Typography variant="h4" id="buyer-3">
              How to search for a product based on location?
            </Typography>
            <Typography variant="p">
              Meet seller at secure & public location wherever possible and also
              try to have someone accompany you in order to close any deal.{" "}
            </Typography>
            <Typography variant="h4" id="buyer-4">
              {" "}
              Where to meet seller?
            </Typography>
            <Typography variant="p">
              Meet seller at secure & public location wherever possible and also
              try to have someone accompany you in order to close any deal.{" "}
            </Typography>
          </section>
        </div>
      </div>
      <div
        id="wrapper"
        className="wrapper-fluid banners-effect-5"
        style={{ margin: "30px 0" }}
      >
        <div
          id="payment"
          className="main-container container"
          style={{ padding: "30px" }}
        >
          <section style={{ marginTop: "15px", lineHeight: "30px" }}>
            <Typography variant="h3">Payments & Promotions</Typography>
            <Typography variant="h4" id="payment-1">
              How to promote an Ad
            </Typography>
            <Typography variant="p">
              After log into your account select My Ads from menu and find the
              Ad you want to promote and click promote at the right side. To
              promote new Ad while posting it, there is an option within the
              form, click the checkbox the one you would like from the 3
              promotion options and post it.
            </Typography>
          </section>
        </div>
      </div>
    </>
  );
};
export default index;
