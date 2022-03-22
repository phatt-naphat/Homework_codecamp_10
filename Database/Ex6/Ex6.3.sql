SELECT Customer_name, sum(balance) FROM Depositer D LEFT JOIN Account A ON D.Account_number = A.Account_number GROUP BY D.Customer_name;
