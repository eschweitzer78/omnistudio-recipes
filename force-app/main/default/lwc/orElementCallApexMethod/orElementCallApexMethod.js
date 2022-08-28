/**
  Please refer to the disclaimer in README.md at the root of this repo.
  This recipe is about calling Apex from an Omniscript element.
  The target Apex class should be implementing Callable as illustrated in orHelloWord.cls
  
  @author Emmanuel Schweitzer
  @version 1.0

 */

import { api, track } from "lwc";
import { OmniscriptActionCommonUtil } from "omnistudio/omniscriptActionUtils";
import OmniscriptBaseElement from "omnistudio/omniscriptBaseElement";
import tmpl from "./orElementCallApexMethod.html";

export default class orElementCallApexMethod extends OmniscriptBaseElement {
  @track name = "";
  @track greeting;

  render() {
    return tmpl;
  }

  _actionUtil;
  connectedCallback() {
    this._actionUtil = new OmniscriptActionCommonUtil();
  }

  handleGreetMe() {
    let elt = this.template.querySelector("input");
    this.name = elt ? elt.value || "Stranger" : "Stranger";

    let config = this._actionUtil.getConfigForActionService({
      sClassName: "orHelloWorld",
      sMethodName: "greet",  
      input: {
        name: this.name
        },
      options: {
        },
    });

    // options above accepts the useContinuation boolean flag

    this._actionUtil
    .callActionService(config, this)
    .then((data) => {
      // Replace with your own response handling
      let jsonData = JSON.parse(data)
      this.greeting = jsonData.result;
    })
    .catch((err) => {
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