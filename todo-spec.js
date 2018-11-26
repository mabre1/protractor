

describe('angularjs homepage todo list', function() {
    beforeEach(() => {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false); // protractor fails completely if this flag is not set to false and you go to a non-angular page.
        browser.get('https://google.com/');  // googles home not angular and most oporations here had problems, if we need to traverse non angular places, this may be troublesome sor require separate frameworks - further investigation required 
        // browser.driver.manage().window().setPosition(100, 150);
        // browser.driver.manage().window().setSize(800, 600);
        browser.waitForAngularEnabled(true);// turn back on when going to angular places
    });

// pasted off the docs
    it('should add a todo', function() {
        
      browser.get('https://angularjs.org');
      element(by.model('todoList.todoText')).sendKeys('write first protractor test');
      element(by.css('[value="add"]')).click();
  
      var todoList = element.all(by.repeater('todo in todoList.todos'));
      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write first protractor test');
  
      // You wrote your first test, cross it off the list
      todoList.get(2).element(by.css('input')).click();
      var completedAmount = element.all(by.css('.done-true'));
      expect(completedAmount.count()).toEqual(2);
    });

    // describes inside describes inside describes! 
    describe('A experimental nested test with its own set-up', function() {
        beforeEach(() => {          
          // here is where you can do layered set up and tear down on this nested test
          browser.get('https://github.com/angular/protractor/blob/master/docs/browser-setup.md');
      });
      afterEach(() =>{
        browser.get('http://github.com');
      });
      it('should foo a bar', function() {        
        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('span.js-path-segment:nth-child(3) > a:nth-child(1)')).click();
  
        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(true).toEqual(true);
      });
    });    
  });
  
  