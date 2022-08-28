/**
  Please refer to the disclaimer in README.md at the root of this repo.
  This recipe is about testing a DataRaptor from Apex, and possibly running as a different user.
  
  @author Emmanuel Schweitzer
  @version 1.0

 */

@isTest(seeAllData=true)
private class orTestDataRaptor {
    static @isTest void orTestDataRaptor() {

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

        Object results = 
          omnistudio.DRGlobal.process(input, 'DataRaptorName');

        /* Results is a Map<String, Object> */
      }

      /* PERFORM YOUR TESTS HERE */

    }
}
