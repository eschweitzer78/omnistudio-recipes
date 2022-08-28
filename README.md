# omnistudio-recipes
A collection of easy-to-digest code examples for Omnistudio components on Salesforce Public Sector Solutions.

## Disclaimer

Some of these recipes leverage undocumented or very little documented code which may change between releases. This repository is neither an official guide nor an endorsement and you should thoroughly check that the recipes carry on working on new releases by using preview instances.

## Calling APEX from an Omnistudio Element

There is a method to call APEX when you leverage the OmniscriptBaseMixin, but no real documentation when you want to do that when implementing OmniscriptBaseElement or are subclassing an existing widget class. Look no further and refer to the <code>orElementCallApexMethod</code> recipe.

## Testing an Integration Procedure being run as a given user

You can very well test an Integration Procedure with your own user, but there is no provision to test as someone else. If you want
to make sure it does the job for a specific category of users, check the <code>orTestIntegrationProcedure</code> Apex test method template.