import { api } from "lwc";
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
  @api greeting;

  render() {
    return tmpl;
  }

  handleClick() {
    invokeApexMethod(OmniscriptRestApi.GenericInvoke2NoCont, {
      input: JSON.stringify({
        name: "Astro"
      }),
      options: JSON.stringify({
      }),
      sClassName: "orHelloWorld",
      sMethodName: "greet"
    })
    .then(data => {
      // Replace with your own response handling
      let jsonData = JSON.parse(data);
      console.log('response', jsonData);
      this.greeting = jsonData.result;
    })
    .catch(err => {
      // Replace with your own error handling
      console.log('error', err);
    });
  }

  @api checkValidity() {
    return true;
  }

  @api reportValidity() {
    return true;
  }
}