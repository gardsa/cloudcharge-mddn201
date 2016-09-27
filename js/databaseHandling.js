function initialiseBanks() {
  firebase.database().ref('/').set(banks);
}

function displayBank() {
  getDetails("title");
  getDetails("availableCharge");
  getDetails("capacity");
  getDetails("owner");
  getDetails("planDetails");
  getDetails("chargeType");
}

function getDetails(name) {
  var element = document.getElementById(name);
  var text = firebase.database().ref('/banks/personal/everyday/' + name);

  text.on('value', snap => {
    element.innerText = snap.val();
  });
}

function createBank() {
  // var b = data.banks.personal.everyday;

  // firebase.database().ref('/banks/personal/everyday').set({
  //   title: b.title,
  //   batteryIconUrl: b.batteryIconUrl,
  //   availableCharge: b.availableCharge,
  //   capacity: b.capacity,
  //   owner: b.owner,
  //   planDetails: b.planDetails,
  //   chargeType: b.chargeType
  // });
}

function editBank() {

}

function deleteBank() {

}
