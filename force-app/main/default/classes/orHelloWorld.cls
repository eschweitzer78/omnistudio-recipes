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
