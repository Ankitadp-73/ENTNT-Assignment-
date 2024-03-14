# React + Vite

Enterprise Resource Planning 
This Application is Built on React 
following pre requisites are required 
1)Node js setup in environment variable .
2) IDE for better experience .
once setup is done .
to Run the Application please take this Repository code in Local 
and go to src directory (where all the root components are present .
Step 1) run this command in the src directory "cd src".
Step 2) run the second command "npm run dev"
       This will run the project and will be available in the Local server .Generally 
       "http://127.0.0.1:5173/" this is the default url provided by react if no projects running on this server then this is the site where this EPR System website will de deployed and will be available in local server .

      Application Overview
Application has mainly 3 Modules .
1) Dashboard : dashboard is the landing page of the Application 
  And Dashboard has the Two main Tabs
    1.1) Products: This is the Tab where the admin can view the Total Available or added poducts for sell,and also he can add ,edit or even delete the products,
    once the product is added/deleted/or edited then he will get the success message for each criteria.
    
    
    1.2)where the  admin can view the total number of orders ,including the order id ,order name and the description of the project like price ,and the status of the payment and the order dates etc .and admin can even cancel the order or view the total number of available products.

2) Products Management : this is the Page where the Admin can view the products with the images he added for respective products .and also detailed description of the product.like Price ,images etc .here also admin can add,delete or update the category ,price etc of the product.
   2.1) on clicking of the add product this will direct to the different page where user can add the category, description ,price etc 
   2.2) Delete: to delete the product admin can click on delete eighther on dashboard or in products management page 
3) Orders Management : in is the page where all the orders done by the user can be viewed by the Admin .this is the page where admin can track all the orders and statuses of the orders .whether order delivered successfully or not.admin can cancel the orders for reason.



The Application is Responsive ,used media querries whereever required .
for the Mock data i have created the DATA file in the project and used the same data to display the details ,iterated the values .in all the pages used the same response of the data .
Added the react routes to navigate between the modules

