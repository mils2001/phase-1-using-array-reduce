const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteryData = [
    { id: 1, assembled: 10 },
    { id: 2, assembled: 15 },
    { id: 3, assembled: 6 },
  ];
  
  
  const batteryReducer = (data) => {
    return data.reduce((total, battery) => total + battery.assembled, 0);
  };
  
  
  const totalBatteries = batteryReducer(batteryData);
  
  module.exports = { totalBatteries, batteryReducer };
  


