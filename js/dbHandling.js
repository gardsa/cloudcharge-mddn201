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
  console.log(selectedBank);
  var title = selectedBank.title;
  document.getElementById("title").innerHTML = ("Edit > " + title);
}
