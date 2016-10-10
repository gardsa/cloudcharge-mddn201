var dataObj;
firebase.database().ref('/').on('value', function(snapshot){
  console.log(snapshot.val());
  dataObj = snapshot.val();
});

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

function getDetails(elementName, bank) {
  var element = document.getElementById(elementName);
  var text = firebase.database().ref('/banks/personal/' + bank + '/' + elementName);

  text.on('value', snap => {
    element.innerText = snap.val();
  });
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
      }
    );
  });
}

function editBank() {

}

// function deleteBank(key) {
//   var ref = firebase.database().ref('/');
//   ref.child(key).remove();
// }

function render() {
  $(document).ready(function() {

    // compile our template
    var template = Handlebars.compile($("#banks-template").html());

    // add the bank partial
    Handlebars.registerPartial("bank", $("#personal-partial").html());
    Handlebars.registerPartial("bank", $("#local-partial").html());
    Handlebars.registerPartial("bank", $("#global-partial").html());

    $('#list').html(template(dataObj));
  });
}
