/**
  Please refer to the disclaimer in README.md at the root of this repo.
  This class is used by the orElementCallApexMethod LWC recipe.
  It takes a 'name' input parameter, and returns a 'result' output parameter that
  adds 'Hello ' as a prefix to the name, and suffixes it with a final period.
  
  @author Emmanuel Schweitzer
  @version 1.0

 */

public with sharing class orHelloWorld implements Callable {
  public Object call(String action, Map<String, Object> args) {
    Map<String, Object> input = (Map<String, Object>) args.get('input');
    Map<String, Object> options = (Map<String, Object>) args.get('options');
    Map<String, Object> output = (Map<String, Object>) args.get('output');


    switch on action {
      when 'greet' {
        output.put('result', 'Hello ' + input.get('name') + '.');
        return true;
      }
    }

    return false;
  }
}
