
import './App.css';
import Card from './components/Card';
import billIcon from './imgs/bill.png';
import connectionIcon from './imgs/connection.png';
import coolingIcon from './imgs/cooling.png';
import generatorIcon from './imgs/generator.png';
import maintenanceIcon from './imgs/maintenance.png';
import nocIcon from './imgs/noc.png';
import paymentIcon from './imgs/payment.png';




const quickPayItems=[
  {icon:coolingIcon , text: "Cooling"},
  {icon:maintenanceIcon , text: "Maintenance"},
  {icon:connectionIcon , text: "Connection Fees"},
  {icon:generatorIcon , text: "Generator Bill"},
  {icon:nocIcon , text: "NOC Fee"}
]
const serviceRequestItems=[
  {icon:coolingIcon , text: "Cooling"},
  {icon:maintenanceIcon , text: "Maintenance"}

]
function App() {
  return (
      <div className='card-container'>
        <Card cardIcon={paymentIcon} cardTitle={"Quick Pay"} cardItems={quickPayItems}/>
        <Card cardIcon={billIcon} cardTitle={"Service Request"} cardItems={serviceRequestItems}/>
        
      </div>

  );
}

export default App;
