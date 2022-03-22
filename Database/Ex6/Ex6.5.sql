SELECT sum(balance) FROM Depositor D LEFT JOIN Account A ON D.Account_name = A.Account_name 
GROUP BY D.Customer_name HAVING count(*) > 1 ORDER BY sum(balance) DESC;
