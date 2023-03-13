sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("monday.controller.page1", {
        onInit() {
        },

          //  onPress: function(oEvent){
          // var oRouter=sap.ui.core.UIcomponent.getRouterFor(this);
          // oRouter.navTo("end");

        //   onPress: function () {
        //     this.getOwnerComponent().getRouter().navTo("page2");
        
        // }

        onPress:function(oEvent)
        {
         var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
         oRouter.navTo("end");
        }


      });
    });
  