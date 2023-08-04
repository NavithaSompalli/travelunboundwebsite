import Footer from '../Footer'

import './index.css'

const BookNow = () => (
  <div className="booknow-bg-container">
    <div className="notes-container">
      <h1 className="notes-heading">Payment terms and Cancellation policy</h1>
      <ul>
        <li className="payment-description">
          100% of the tour cost at the time of booking
        </li>
        <li className="payment-description">
          50% of the tour cost would be given back as credit if the tour is
          cancelled 60 days before the travel dates
        </li>
        <li className="payment-description">
          No refund is provided if tour is cancelled within thirty days of the
          travel dates
        </li>
      </ul>
    </div>
    <div className="bank-details-container">
      <h1 className="bank-heading">Bank Details for USD transfers</h1>
      <p className="payment-description">
        All payments have to be done to the below mentioned bank only. Any
        guests wanting to pay in INR has to bear the conversion charges and the
        transfer charges
      </p>

      <div className="bank-details">
        <p>
          <span className="name-headings">Receiver Name : </span>
          <span> Travel Unbounded World Pvt Ltd</span>
        </p>
        <p>
          <span className="name-headings">Receiver Address : </span>
          <span>
            {' '}
            TRAVEL UNBOUND WORLD PVT LTD, MPESILANE,KENYA,TTA AVENUE,PO BOX
            6950,NAIROBI
          </span>
        </p>
        <p>
          <span className="name-headings">Receiver Nick name : </span>
          <span> TRAVEL UNB</span>
        </p>
        <p>
          <span className="name-headings">Branch : </span>
          <span> UBALGS/WESTANDS</span>
        </p>
        <p>
          <span className="name-headings">Country : </span>
          <span> KENYA</span>
        </p>
        <p>
          <span className="name-headings">Contact Number : </span>
          <span> 919845090041</span>
        </p>
        <p>
          <span className="name-headings"> Receiver Account number: </span>
          <span> USD55010130009921</span>
        </p>
        <p>
          <span className="name-headings"> Receiver Type: </span>
          <span> CURRENT A/C BUSINESS</span>
        </p>
        <p>
          <span className="name-headings"> E Mail address: </span>
          <span> ck@travelunbounded.com</span>
        </p>
        <p>
          <span className="name-headings"> Receiver SWIFTCODE: </span>
          <span> UNAFKENA</span>
        </p>
        <p>
          <span className="name-headings"> Bank Code : </span>
          <span> 076</span>
        </p>
        <p>
          <span className="name-headings"> Branch Code : </span>
          <span> 76001</span>
        </p>
        <p>
          <span className="name-headings"> Currency : </span>
          <span> USD</span>
        </p>
        <p>
          <span className="name-headings"> Receiver Bank Country : </span>
          <span> KENYA</span>
        </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default BookNow
