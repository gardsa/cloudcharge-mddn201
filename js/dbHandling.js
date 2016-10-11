var dataObj;
firebase.database().ref('/').on('value', function(snapshot){
  dataObj = snapshot.val();
});

function initialiseBanks() {
  firebase.database().ref('/').set(data);
}

function createBank(formObj) {
  var formBankType = formObj.bankType.value;
  var formTitle = formObj.title.value.toLowerCase();
  formTitle = formTitle.replace(/\s+/g, '');
  var dataKey = formTitle;
  var dbRef = firebase.database().ref('/banks/' + formBankType + '/' + formTitle);

  dbRef.set({
    bankType: formObj.bankType.value,
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
      });
  });
}

function populateEditBank(selectedBank) {
  // console.log(selectedBank);
  var title = selectedBank.title;
  document.getElementById("title").innerHTML = (title + " / Edit");
  document.getElementById("formTitle").value = title;

  var bankType = selectedBank.bankType;
  document.getElementById("formBankType").value = bankType;

  var owner = selectedBank.owner;
  document.getElementById("formOwner").value = owner;

  var planDetails = selectedBank.planDetails;
  document.getElementById("formBankDetails").value = planDetails;

  var chargeType = selectedBank.chargeType;
  document.getElementById("formChargeType").value = chargeType;

  var capacity = selectedBank.capacity;
  document.getElementById("formCapacity").value = capacity;
}

function editBank(formObj){
  var formBankType = formObj.bankType.value;
  var formTitle = formObj.title.value.toLowerCase();
  formTitle = formTitle.replace(/\s+/g, '');
  var dataKey = formTitle;
  var dbRef = firebase.database().ref('/banks/' + formBankType + '/' + formTitle);

  dbRef.set({
    bankType: formObj.bankType.value,
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
      });
  });
}
