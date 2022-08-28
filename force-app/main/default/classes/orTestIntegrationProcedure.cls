/**
  Please refer to the disclaimer in README.md at the root of this repo.
  This recipe is about testing an Integration Procedure from Apex, and possibly running as a different user.
  
  @author Emmanuel Schweitzer
  @version 1.0

 */

@isTest(seeAllData=true)
private class orTestIntegrationProcedure {
  static @isTest void orTestIntegrationProcedure() {

    /* REPLACE THE USER SELECTION LOGIC BELOW AS REQUIRED */

    User testUser = [
      SELECT Id
      FROM User
      WHERE Name = 'Administrator'
    ];

    /* PREPARE YOUR DATA HERE */

    System.runAs(testUser) {
      Map<String, Object> input = new Map<String, Object> {
        'MyInputArgumentName' => 'MyInputArgumentValue'
      };

      Map<String, Object> options = new Map<String, Object>();

      Object results = 
        omnistudio.IntegrationProcedureService.runIntegrationService('IntegrationProcedureName', input, options);

      /* Results is a Map<String, Object> */
    }

    /* PERFORM YOUR TESTS HERE */

  }
}
