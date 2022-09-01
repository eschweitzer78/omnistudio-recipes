/**
  Please refer to the disclaimer in README.md at the root of this repo.
  This recipe is about calling an IP from an object that derives from OmniscriptBaseMixin.

  Here we decided to illustrate taking all parameters from api attributes, but you could
  very well use static values or you own data. The key part of this recipe is in the
  performCallout method.

  @author Emmanuel Schweitzer
  @version 1.0

 */

import { LightningElement, api } from "lwc";
import { getNamespaceDotNotation } from "omnistudio/omniscriptInternalUtils";
import { OmniscriptBaseMixin } from "omnistudio/omniscriptBaseMixin";

export default class OrBaseMixinCallIP extends OmniscriptBaseMixin(LightningElement) {
  _ipName;
  @api 
  get ipName() {
    return this._ipName;
  }
  
  set ipName(value) {
    this._ipName = value;
    this.performCallout();
  }

  _inputJson;
  @api 
  get inputJson() {
    return this._inputJson;
  }

  set inputJson(value) {
    this._inputJson = value;
    this.performCallout();
  }

  _optionsJson;
  @api 
  get optionsJson() {
    return this._optionsJson;
  }

  set optionsJson(value) {
    this._optionsJson = value;
    this.performCallout();
  }

  @api outputJson;

  _ns = getNamespaceDotNotation(); // replace by "omnistudio__" if you want to avoid this undocumented method
  _connected = false;

  connectedCallback() {
    this._connected = true;
  }
  
  performCallout() {
    // wait for all parameters to be set
    if (!this._ipName || !this._inputJson || !this._optionsJson) {
      return;
    }

    // here we decided to take everything from api attributes, but you could very well use the same blueprint
    // with static or your own values.
    this
      .omniRemoteCall({
        sClassName: `${this._ns}IntegrationProcedureService`,
        sMethodName: this._ipName,
        input: this._inputJson,
        options: this._optionsJson,
  
      }, true)
      .then((data) => {
        this.outputJson = JSON.stringify(data.result.IPResult);
        this.ipError = data.result.error;
        this.error = data.error; // should normally always be false
      })
      .catch((error) => {
        console.log("error", error);
        this.error = error;
      });
  }
}

