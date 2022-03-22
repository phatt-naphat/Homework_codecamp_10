SELECT A.account_number FROM branch B LEFT JOIN account A ON B.branch = A.branch_name WHERE B.branch_city = 'Riverside';
