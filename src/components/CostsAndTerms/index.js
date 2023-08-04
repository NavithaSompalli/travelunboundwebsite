import Footer from '../Footer'

import './index.css'

const CostsAndTerms = () => (
  <div className="cost-bg-container">
    <div className="costs-container">
      <h1 className="costs-heading">Costs</h1>
      <p className="costs-descriptions">
        Cost per adult, Ex Nairobi - USD1582/- incl of local taxes
      </p>
      <p className="costs-descriptions">
        Cost per child ( 4 to 9 years ), Ex Nairobi - USD 1400/- incl of taxes
      </p>
      <br />
      <p className="costs-descriptions">
        Special Independence Day offer valid for bookings made on or before till
        August 14th 2023 - Cost per adult - USD 1322
      </p>
      <p className="costs-descriptions">
        Special Independence Day offer valid for bookings made on or before till
        August 14th 2023 - Cost per child - USD 1127
      </p>
    </div>
    <div className="costs-container">
      <h1 className="costs-heading">Terms and Conditions:</h1>
      <ul>
        <li className="costs-descriptions">
          Costs are based at 4 paxs per vehicle for game drives and 5 per
          vehicle for Internal transfers
        </li>
        <li className="costs-descriptions">
          Stay at Mara would be at Zebra plains or Loyk camp or Julia river
          camp.
        </li>
        <li className="costs-descriptions">
          Last day to confirm the tour is August 14th 2023.
        </li>
        <li className="costs-descriptions">
          Guests travelling should process valid passports with a minimum of 6
          months validity from the date of return.
        </li>
        <li className="costs-descriptions">
          Guests traveling should be administered with Yellow fever vaccination
          and Oral polio vaccination. The vaccines should be taken at least 15
          days prior to travel. The certificates has to be shared for us to send
          you the invite letter for VISA application.
        </li>
        <li className="costs-descriptions">
          Guests should intimate us on any medical ailment and Travel Unbounded
          World Pvt Ltd is not liable for any loss or damage to the guests
          during the tour.
        </li>
        <li className="costs-descriptions">
          Guests should provide International travel insurance 15 days prior to
          travel.
        </li>
        <li className="costs-descriptions">
          Guests staying at Nairobi one day prior to the travel dates have to
          reach JKIA airport at 7AM on Nov 14th
        </li>
        <li className="costs-descriptions">
          Guests staying at Nairobi on Nov 17th would have to arrange their
          transport from JKIA airport after we drop you.
        </li>
        <li className="costs-descriptions">
          Lunch on the return on Nov 17th is not a part of the package
        </li>
        <li className="costs-descriptions">
          Meals are mentioned in brackets at the end of the Day’s itinerary
        </li>
        <li className="costs-descriptions">
          Groups above 5 can avail special discounts
        </li>
        <li className="costs-descriptions">
          Vehicles are provided only for internal transfers and game drives,
          they are not for another purposes or use.
        </li>
        <li className="costs-descriptions">
          Please refer to all the terms and conditions on
          www.travelunbounded.com
        </li>
      </ul>
    </div>
    <Footer />
  </div>
)

export default CostsAndTerms
