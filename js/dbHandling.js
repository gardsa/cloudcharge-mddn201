function initialiseBanks() {
  firebase.database().ref('/').set(data);
}

function displayBank(bankName) {
  var bank = bankName;
  getDetails("title", bank);
  getDetails("availableCharge", bank);
  getDetails("capacity", bank);
  getDetails("owner", bank);
  getDetails("planDetails", bank);
  getDetails("chargeType", bank);
}

function getDetails(name, bank) {
  var element = document.getElementById(name);
  var text = firebase.database().ref('/banks/personal/' + bank + '/' + name);

  text.on('value', snap => {
    element.innerText = snap.val();
  });
}

function createBank(formObj) {
  var formBankType = formObj.bankType.value;
  var dbRef = firebase.database().ref('/banks/' + formBankType);

  var formTitle = formObj.title.value;

  dbRef.push({
    title: formObj.title.value,
    availableCharge: '0',
    capacity: formObj.capacity.value,
    owner: formObj.owner.value,
    planDetails: formObj.planDetails.value,
    chargeType: formObj.chargeType.value
  },
  function(){
    document.getElementById("addBankForm").reset();

    $('#addBankBtn').notify(
      "Bank Added",
      {
        position:"bottom center",
        style: "addBankSuccess",
        className: "base"
      }
    );
  });
}

function editBank() {

}

function deleteBank() {

}
