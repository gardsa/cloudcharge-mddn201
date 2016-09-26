function createBank(bankName, iconUrl, initialCharge, capacity, owner, planType, chargeType) {
  firebase.database().ref('banks/' + bankId).set({
    title: bankName,
    batteryIconUrl: iconUrl,
    availableCharge: initialCharge,
    capacity: capacity,
    owner: owner,
    planDetails: planType,
    chargeType: chargeType
  });
}
