Feature: ShopNow validation
    @Regression
    Scenario Outline: Placing the Order
        Given a login to shopNow application with "<userName>" and "<password>"
        When Add "<productName>" to Cart
        Then Verify "<productName>" is displayed in the Cart
        When Enter "<userName>" valid details and Place the Order
        Then Verify order in present in the orderHistory
        
        #using data set
        Examples:
            | userName                  | password   | productName |
            | pandeyanish2001@gmail.com | Pandey@123 | ZARA COAT 3 |