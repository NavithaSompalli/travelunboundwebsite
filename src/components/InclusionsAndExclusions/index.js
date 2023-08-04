import Footer from '../Footer'
import './index.css'

const InclusionsAndExclusions = () => (
  <div className="inclusions-container">
    <div className="inclusion-item-container">
      <h1 className="inclusion-heading">Inclusions</h1>
      <ul className="inclusion-ul-container">
        <li>
          Internal transfers from JKIA airport to Maasai Mara and back by
          Landcruiser on shared basis
        </li>
        <li>
          Stay on twin sharing basis at Maasai Mara either at Zebra plains or
        </li>
        <li>
          Game drives in Landcruisers in shared basis - minimum 4 paxs per
          vehicle
        </li>
        <li>Water during game drives</li>
        <li>All meals as mentioned in the itinerary</li>
        <li>Park Fees</li>
        <li>Guide Fees</li>
        <li>English speaking guides/drivers</li>
      </ul>
    </div>
    <div className="exclusion-item-container">
      <h1 className="inclusion-heading">Exclusions</h1>
      <ul className="inclusion-ul-container">
        <li>Any airfare or VISA charges</li>
        <li>Personal and medical expenses during the tour</li>
        <li>Tips and gratitude</li>
        <li>Anything other than mentioned in the Inclusions section</li>
      </ul>
    </div>
    <Footer />
  </div>
)

export default InclusionsAndExclusions
