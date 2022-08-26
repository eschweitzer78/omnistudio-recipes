import { api } from "lwc";
import { invokeApexMethod } from "omnistudio/omniscriptUtils";
import OmniscriptBaseElement from "omnistudio/omniscriptBaseElement";
import OmniscriptRestApi from "omnistudio/omniscriptRestApi";
import tmpl from "./orElementCallApexMethod.html";

/*
   This recipe is about calling Apex from an Omniscript element.
   The target Apex class should be implementing Callback as illustrated in orHelloWord.cls
*/

export default class OmniElementCallApexMethod extends OmniscriptBaseElement {
  render() {
    return tmpl;
  }

  handleClick() {
    try {
      let r = invokeApexMethod(OmniscriptRestApi.GenericInvoke2NoCont, {
        input: JSON.stringify({
          name: "Astro"
        }),
        options: JSON.stringify({
        }),
        sClassName: "orHelloWorld",
        sMethodName: "greet"
      });

      console.log('r=', JSON.stringify(r));
    } catch (err) {
      console.log('Exception', err);
    }
  }

  @api checkValidity() {
    return true;
  }

  @api reportValidity() {
    return true;
  }
}