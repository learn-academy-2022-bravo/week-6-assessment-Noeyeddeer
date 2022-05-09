# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: If you forget to add the foreign key, you can fix the issue through a migration. The foreign key would be named cohort_id and would reside in the Student model.

  Researched answer: A foreign key is the integer corresponding to the primary key in the main model and is what allows for a referential relationship between both tables. The primary key is automatically created but the foreign key must be added to the non-primary table.



2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes which must always be passed params are show, update and delete. These need params in order to effect an action on a particular item.

  Researched answer: Show lists one item in a particular model and as such needs to know exactly which item it is showing. Update modifies a particular item and delete destroys a particular item so each likewise need that specific item id in order to effect the action.



3. Name three rails generator commands. What is created by each?

  Your answer: Three rails generator commands are generate model, generate migration, and generate rspec. Generate model creates a database model which can be used to store information, generate migration allows you to modify an existing database, and generate rspec allows you to run tests on your rails code.

  Researched answer: Generate model can be used to create ActiveRecord models. When creating the model you can also generate some fields for it. Generate migration allows you to alter your database schema over time, essentially creating a new version of an existing database. Generate rspec installs the rspec gem, which is a testing framework for a rails application.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students    
- The controller method is index, and it displays a list of all students.   

action: "POST"   location: /students   
- The controller method is create, it creates a new student entry.    

action: "GET"    location: /students/new
- The controller method is new, it returns an HTML form for creating a new student entry.

action: "GET"    location: /students/2
- The controller method is show, it displays a specific student item.  

action: "GET"    location: /students/2/edit
- The controller method is edit, it returns an HTML form for editing a student item.    

action: "PATCH"  location: /students/2      
- The controller method is update, it updates a specific student item.

action: "DELETE" location: /students/2  
- The controller method is destroy, it deletes a specific student item.



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- As a user, I can see a web application titled 'My To Do List'
- As a user, I can see a blank form in list format.
- As a user, I can add an item to list.
- As a user, I can check off an item when I complete it.
- As a user, I can add the time and date that I completed the item to the form.
- As a user, I can modify a list item.
- As a user, I can delete an item from the list.
- As a user, I can create a new list.
- As a user, I can share my to do list with others.
- As a user, I can delete my list entirely.