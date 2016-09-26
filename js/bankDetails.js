Handlebars.registerPartial(
  'bankTemplate',
  '{{language}} is {{adjective}}. You are reading this article on {{website}}.'
);

var context={
  "language" : "Handlebars",
  "adjective": "awesome"
}




var theData = {
  banks [
    { title:"Everyday",
      batteryIconUrl:"battery1.png",
      availableCharge:"10,245",
      capacity:"12,000",
      owner:"gardsama",
      planDetails:"Monthly Premium",
      chargeType:"Contact + Wireless"
    },
    { title:"Middle East Trip",
      batteryIconUrl:"battery1.png",
      availableCharge:20,
      capacity:20,
      owner:"",
      planDetails:"",
      chargeType:""
    },
    { title:"",
      batteryIconUrl:"battery1.png",
      availableCharge:20,
      capacity:20,
      owner:"",
      planDetails:"",
      chargeType:""
    },
    { title:"",
      batteryIconUrl:"battery1.png",
      availableCharge:20,
      capacity:20,
      owner:"",
      planDetails:"",
      chargeType:""
    },
    { title:"",
      batteryIconUrl:"battery1.png",
      availableCharge:20,
      capacity:20,
      owner:"",
      planDetails:"",
      chargeType:""
    },
    { title:"",
      batteryIconUrl:"battery1.png",
      availableCharge:20,
      capacity:20,
      owner:"",
      planDetails:"",
      chargeType:""
    },
    { title:"",
      batteryIconUrl:"battery1.png",
      availableCharge:20,
      capacity:20,
      owner:"",
      planDetails:"",
      chargeType:""
    },
    { title:"",
      batteryIconUrl:"battery1.png",
      availableCharge:20,
      capacity:20,
      owner:"",
      planDetails:"",
      chargeType:""
    },
  ]
}

 var theTemplateScript = $("#title").html();  

 var theTemplate = Handlebars.compile (theTemplateScript);  

 $(document.body).append (theTemplate (theData));
