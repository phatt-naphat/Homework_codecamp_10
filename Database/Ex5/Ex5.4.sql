SELECT s.name Sailors S1 WHERE S1.age = (SELECT MAX(S.age) FROM Sailors S);
