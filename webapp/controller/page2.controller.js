sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("monday.controller.page2", {
        onInit: function() {

        },

         oNavButton_press:function(oEvent)
         {
          var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("home");
         }
      });
    }
  );
  