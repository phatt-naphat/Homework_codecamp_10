SELECT DISTINCT sname FROM Sailors S WHERE S.sname IN
(SELECT distinct S.sname FROM Sailors S LEFT JOIN Reserves R
ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid
WHERE B.color = 'Red')
AND S.sname IN
(SELECT distinct S.sname FROM Sailors S LEFT JOIN Reserves R
ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid
WHERE B.color = 'Green');
