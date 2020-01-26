sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("com.myorg.myUI5App2.controller.MainView", {

    onAuthorSelectd : function (oEvent) {
			this.byId("SalesOrderItems").setBindingContext(
        oEvent.getParameters().listItem.getBindingContext());
        
    }
    
  });
});
