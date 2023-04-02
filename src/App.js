
import './App.css';
import Card from './components/Card';
import billIcon from './imgs/bill.png';
import connectionIcon from './imgs/connection.png';
import coolingIcon from './imgs/cooling.png';
import generatorIcon from './imgs/generator.png';
import maintenanceIcon from './imgs/maintenance.png';
import nocIcon from './imgs/noc.png';
import paymentIcon from './imgs/payment.png';
import serviceIcon from './imgs/service.png';




const quickPayItems=[
  {icon:coolingIcon , text: "Cooling"},
  {icon:maintenanceIcon , text: "Maintenance"},
  {icon:connectionIcon , text: "Connection Fees"},
  {icon:generatorIcon , text: "Generator Bill"},
  {icon:billIcon , text: "NOC Fee"}
]
const salesServicesItems=[
  {icon:nocIcon , text: "Initial NOC Request"},
  {icon:nocIcon , text: "Final NOC Request"},
  {icon:nocIcon , text: "Sales Transfer NOC"}
  
]
const leaingServicesItems=[
  {icon:maintenanceIcon , text: "Maintenance Request"}
  
]
function App() {
  return (
      <div className='card-container'>
        <Card cardIcon={paymentIcon} cardTitle={"Quick Pay"} cardItems={quickPayItems}/>
        <Card cardIcon={serviceIcon} cardTitle={"Service Request"} cardItems={salesServicesItems} cardItemsTwo={leaingServicesItems} sectionOneLabel={"Sales services"} sectionTwoLabel={"Leasing services"}/>
        
      </div>

  );
}

export default App;
