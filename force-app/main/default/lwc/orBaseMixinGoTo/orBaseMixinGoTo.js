/**
  Please refer to the disclaimer in README.md at the root of this repo.
  This custom LWC, when rendered in the UI will immediately jump to another Step (or Action) allowing you
  to create loops within an LWC-based OmniScript.  
  
  @author Joe McMaster
  @version 1.1
 
  History
  =======
  Nov 30, 2020 - v1.0 - Initial version
  Apr 15, 2021 - v1.1 - Renamed (for consistency)

  Configuration
  =============
  Set the following custom LWC properties for this component
  
  target  - The element name of the Step (or Action) you want to jump to
  mode    - Indication if this component should fire immediately upon being rendered or if it
            should be triggered manually be the user.
             mode = step  -> Immediately jump to the given step/action (Default)
             mode = click -> render as a button and jump to the given step when the user clicks it                             
  debug   - show extra debug information in the browser console (Optional, Default = false)

 */

import { LightningElement, api } from 'lwc';
import sldsTemplate from './orBaseMixinGoTo.html';
import ndsTemplate from './orBaseMixinGoTo_nds.html';
import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin';

export default class OrBaseMixinGoTo extends OmniscriptBaseMixin(LightningElement) {
  @api target;
  @api mode = "step";
  @api debug = false;

  /**
   * Return the correct template to use (SLDS vs NDS)
   * 
   * @return The correct HTML template
   */
  render() {
    // lightning vs. newport
    let layout = super.getAttribute("data-omni-layout");

    if (layout == "newport") return ndsTemplate;
    else return sldsTemplate;
  }

  /**
   * Standard LWC Lifecycle Hook called after this component has been rendered on the page.
   * This function attempts to navigate to a specific component in the OmniScript.
   */
  renderedCallback() {
    try {
      if (this.mode == "step") {
        // Jump to the step/action immediately
        if (this.target) {
          if (this.debug) {
            console.log("Jumping to " + this.target);
          }

          super.omniNavigateTo(this.target);
        } else {
          console.error("Error in goto LWC -> No step-name property was provided");
        }
      }
    } catch (err) { 
      console.error("Error in goto LWC -> " + err);
    }
  }

  /**
   * Handle the button click
   * 
   */
  execute() {
    try {
      if (this.debug) {
        console.log("Jumping to " + this.target);
      }

      super.omniNavigateTo(this.target);
    } catch (err) {
      console.error("Error in goto LWC -> " + err);
    }
  }
}