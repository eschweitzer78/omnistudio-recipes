import { api, track } from "lwc";
import { invokeApexMethod } from "omnistudio/omniscriptUtils";
import OmniscriptBaseElement from "omnistudio/omniscriptBaseElement";
import OmniscriptRestApi from "omnistudio/omniscriptRestApi";
import tmpl from "./orElementCallApexMethod.html";

/*
  Please refer to the disclaimer in README.md at the root of this repo.
  This recipe is about calling Apex from an Omniscript element.
  The target Apex class should be implementing Callback as illustrated in orHelloWord.cls
*/

export default class OmniElementCallApexMethod extends OmniscriptBaseElement {
  @track name = "";
  @track greeting;

  render() {
    return tmpl;
  }

  handleGreetMe() {
    let elt = this.template.querySelector("input");
    this.name = elt ? elt.value || "Stranger" : "Stranger";

    invokeApexMethod(OmniscriptRestApi.GenericInvoke2NoCont, {
      input: JSON.stringify({
        name: this.name,
      }),
      options: JSON.stringify({
      }),
      sClassName: "orHelloWorld",
      sMethodName: "greet",
    })
    .then(data => {
      // Replace with your own response handling
      let jsonData = JSON.parse(data);
      this.greeting = jsonData.result;
    })
    .catch(err => {
      // Replace with your own error handling
      console.log("error", err);
    });
  }

  handleTryItAgain() {
    this.name = "";
    this.greeting = null;
  }

  @api checkValidity() {
    return true;
  }

  @api reportValidity() {
    return true;
  }
}