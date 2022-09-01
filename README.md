# omnistudio-recipes
A collection of easy-to-digest code examples for Omnistudio components on Salesforce Public Sector Solutions.

## Disclaimer

Some of these recipes leverage undocumented or very little documented code which may change between releases. This repository is neither an official guide nor an endorsement and you should thoroughly check that the recipes carry on working on new releases by using preview instances.

## Calling APEX from an Omnistudio Element

There is a method to call APEX when you leverage the OmniscriptBaseMixin, but no real documentation when you want to do that when implementing OmniscriptBaseElement or are subclassing an existing widget class. Look no further and refer to the <code>orElementCallApexMethod</code> recipe.

## Calling an Integration Procedure from an LWC deriving from OmniscriptBaseMixin

We leverage the documented method to call APEX from an OmniscriptBaseMixin and illustrate how you can apply that to invoking
an Integration Procedure (IP). Check the <code>orBaseMixinCallIP</code> recipe.

Kindly note that while it may be useful in specific circumstances, that pattern is not best practice. You would generally keep
the invocation of the IP as an action in your omniscript and your Custom LWC separate. You can use mappings in the Omnistudio
designer (see Custom Lighning Web Component Properties) to get the data retrieved from your IP tied to specific api attributes
of your LWC.

## Testing an Integration Procedure or DataRaptor being run as a given user

You can very well test an Integration Procedure or DataRaptor with your own user in the associated Designer, but there is no provision to test as
someone else. If you want to make sure it does the job for a specific category of users, check the
<code>orTestIntegrationProcedure</code> and <code>orTestDataRaptor</code> Apex test method templates.

## Going to a named previous step (and doing loops) in an Omniscript

You can go to a named previous step with the <code>orBaseMixinGoto</code> recipe. Loops can be set up by combining a GoTo step
and conditional visibility.
