import "./App.css";
import Header from "./components/Header";

import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Items from "./components/Items";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appItemContainer">
        <Items
          title="Lowest Cost Solar Panels In America"
          disc="Money-back guarantee"
          discLink=""
          backgroundImage={SolarPanels}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnTitle="LEARN MORE"
          rightBtnLink=""
          twoBtn="true"
        />

        <Items
          title="Model S"
          disc="Starting at $69,420"
          discLink=""
          backgroundImage={ModelS}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnTitle="LEARN MORE"
          rightBtnLink=""
          twoBtn="true"
        />

        <Items
          title="Model 3"
          disc="
          Order Online for Touchless Delivery"
          discLink=""
          backgroundImage={Model3}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnTitle="LEARN MORE"
          rightBtnLink=""
          twoBtn="true"
        />

        <Items
          title="Model X"
          disc="
          Order Online for Touchless Delivery"
          discLink=""
          backgroundImage={ModelX}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnTitle="LEARN MORE"
          rightBtnLink=""
          twoBtn="true"
        />

        <Items
          title="Model Y"
          disc="
          Order Online for Touchless Delivery"
          discLink=""
          backgroundImage={ModelY}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnTitle="LEARN MORE"
          rightBtnLink=""
          twoBtn="true"
        />

        <Items
          title="Solar for New Roofs"
          disc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          discLink=""
          backgroundImage={SolarRoof}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnTitle="LEARN MORE"
          rightBtnLink=""
          twoBtn="true"
        />
      </div>
    </div>
  );
}

export default App;
